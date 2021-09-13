import * as React from "react";
import { Beans } from "../beans/Beans";
import ServiceRow from "./ServiceRow";
import NewService from "./NewService";
import { Route, Switch } from "react-router";
import ServiceDetails from "./ServiceDetails";
import { Link } from "react-router-dom";
import * as custom_queries from "../dao/CustomQueries";
import { API } from "aws-amplify";


type ServicesProps = {
    user: {
        username: string
        Session: string
    }
};

type ServicesState = {
    services: Beans.ServiceBean[]
};

const sidemenuDivStyles = {
    position: "relative",
    display: "block",
    float: "left",
    width: "30%",
    textAlign: "left"
} as React.CSSProperties;

const mainDivStyles = {
    position: "relative",
    display: "block",
    float: "left",
    width: "70%",
    textAlign: "left"
} as React.CSSProperties;

class Services extends React.Component<ServicesProps, ServicesState> {
    constructor(props: ServicesProps) {
        super(props);
    }
    state = {
        services: []
    };
    /**
     * We need to have this as any because there is no
     * support for the GraphQLResults object as a generic type to contain the data parameter
     */
    getAllServices = async (): Promise<any> => {
        const response = await (API.graphql({ query: custom_queries.listServicesWithOptions }) as any);

        console.log(response);

        return (response.data.listServices.items);
    }
    async componentDidMount() {
        let services = await this.getAllServices();

        console.log(services);

        this.setState(() => ({
            services: services
        }));
    }
    syncServices = async (): Promise<void> => {
        let services = await this.getAllServices();

        this.setState(() => ({
            services: services
        }));
    }
    render() {
        return (
            <div>
                <h1>Services</h1>
                <div style={sidemenuDivStyles}>
                    <ul>
                        {this.state.services.map((service) => {

                            return (
                                <ServiceRow service={service} />
                            );
                        })}
                        {(() => {
                            if (this.props.user.username !== "") {
                                return (
                                    <li>
                                        <Link to={"/services/new"}>
                                            Create new service
                                        </Link>
                                    </li>

                                )
                            }
                        })()}
                    </ul>
                </div>)
                <div style={mainDivStyles}>
                    <Switch>
                        {
                            this.state.services.map((service: Beans.ServiceBean) => {
                                return (
                                    <Route exact path={"/services/" + service.id} >
                                        <ServiceDetails syncServices={this.syncServices} service={service}></ServiceDetails>
                                    </Route>
                                );
                            })
                        }
                        <Route exact path={"/services"}>
                            <h2>Select a service to see the details!</h2>
                        </Route>
                        <Route exact path={"/services/new"}>
                            <NewService syncServices={this.syncServices} user={this.props.user}></NewService>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }

}

export default Services;