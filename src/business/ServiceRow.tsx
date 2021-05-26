import * as React from "react";
import * as ReactDOM from "react-dom";
import {Beans} from "../beans/Beans";
import {Link} from "react-router-dom";

type ServiceRowProps = {
    service: Beans.ServiceBean
}

type ServiceRowState = {
    service: Beans.ServiceBean
}

class ServiceRow extends React.Component<ServiceRowProps, ServiceRowState> {
    constructor(props: ServiceRowProps) {
        super(props);
    }
    render() {
        return (
            <li>
                <p>
                    <Link to={"/services/" + this.props.service.id}>
                        {this.props.service.title}
                    </Link>
                </p>
            </li>
        );
    }
}

export default ServiceRow;