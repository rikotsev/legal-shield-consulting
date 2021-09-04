import * as React from "react";
import { Beans } from "../beans/Beans";
import NewOption from "./NewOption";
import Option from "./Option";
import { API } from "aws-amplify";
import * as custom_queries from "../dao/CustomQueries";

type ServiceDetailsProps = {
    service: Beans.ServiceBean,
    syncServices(): void
}

type ServiceDetailsState = {
    service: Beans.ServiceBean
    isEdit: boolean
}

class ServiceDetails extends React.Component<ServiceDetailsProps, ServiceDetailsState> {
    constructor(props: ServiceDetailsProps) {
        super(props);
    }
    state = {
        isEdit: false,
        service: this.props.service
    }
    setIsEdit = (newIsEdit: boolean): void => {
        this.setState((state) => ({
            isEdit: newIsEdit
        }));
    }
    render() {
        return (
            <div>
                {
                    this.state.isEdit ?
                        <ServiceDetailsEdit service={this.props.service} setIsEdit={this.setIsEdit} /> :
                        <ServiceDetailsView service={this.props.service} setIsEdit={this.setIsEdit} syncServices={this.props.syncServices} />
                }
                <hr />
                {this.props.service.options.map(opt => {
                    return (
                        <Option syncServices={this.props.syncServices} option={opt} serviceId={this.props.service.id} />
                    );
                })}
                <div>
                    <NewOption syncServices={this.props.syncServices} service={this.props.service}></NewOption>
                </div>

            </div>
        );
    }
}

type ServiceDetailsViewProps = {
    service: Beans.ServiceBean,
    setIsEdit(newIsEdit: boolean): void,
    syncServices(): void
};

type ServiceDetailsViewState = {

};

class ServiceDetailsView extends React.Component<ServiceDetailsViewProps, ServiceDetailsViewState> {
    constructor(props: ServiceDetailsViewProps) {
        super(props);
    }
    deleteService = async (event: any): Promise<void> => {
        console.log('Deleteing service');

        API.graphql({
            query: custom_queries.deleteService, variables: {
                id: this.props.service.id
            }
        });

        this.props.syncServices();
    }
    render() {
        return (
            <div>
                <div>
                    <label>Name:</label>
                    <p>
                        {this.props.service.title}
                    </p>
                </div>
                <div>
                    <label>Description:</label>
                    <p>
                        {this.props.service.description}
                    </p>
                </div>
                <div>
                    <button onClick={(e) => {
                        this.props.setIsEdit(true);
                    }}>Edit</button>
                    <button onClick={this.deleteService}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

type ServiceDetailsEditProps = {
    service: Beans.ServiceBean,
    setIsEdit(newIsEdit: boolean): void
};

type ServiceDetailsEditState = {

}

class ServiceDetailsEdit extends React.Component<ServiceDetailsEditProps, ServiceDetailsEditState> {
    constructor(props: ServiceDetailsEditProps) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text" defaultValue={this.props.service.title} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea defaultValue={this.props.service.description}></textarea>
                </div>
                <div>
                    <button onClick={() => {
                        this.props.setIsEdit(false);
                    }}>Save</button>
                </div>
            </div>
        );
    }
}

export default ServiceDetails;