import * as React from "react";
import {Beans} from "../beans/Beans";
import {v4 as uuid} from 'uuid';
import {ChangeEvent} from "react";
import {API, Auth} from "aws-amplify";
import * as custom_queries from "../dao/CustomQueries";

type NewServiceProps = {
    user: {
        username: string
        Session: string
    }
    syncServices(): void
};

type NewServiceState = {
    service: Beans.ServiceBean
};

class NewService extends React.Component<NewServiceProps, NewServiceState> {
    constructor(props: NewServiceProps) {
        super(props);
    }
    state = {
        service: {
            id: uuid(),
            title: '',
            description: '',
            price: 0,
            _version: 1,
            options: []
        }
    };
    handleChange = (event: ChangeEvent): void => {

        // @ts-ignore
        let value = event.target.value;
        // @ts-ignore
        let name = event.target.name;

        switch(name) {
            case 'name':
                this.setState((state) => {
                    state.service.title = value
                    return state;
                });
                break;
            case 'description':
                this.setState((state) => {
                    state.service.description = value
                    return state;
                });
                break;
        }

    };
    saveNewService = async (event: any): Promise<void> => {
        console.log('Creating a new service!');
        console.log(this.state);

        //let currentSession = await Auth.currentSession();

        let additionalHeaders =  {
            Authorization: this.props.user.Session
        };

        await API.graphql({query: custom_queries.createNewService, variables: {
                title: this.state.service.title,
                description: this.state.service.description
            }}, additionalHeaders);

        this.props.syncServices();

    };
    render() {
        return (
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.service.title}/>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" onChange={this.handleChange} defaultValue={"Enter your service description here..."}>
                    </textarea>
                </div>
                <div>
                    <button onClick={this.saveNewService}>Save</button>
                </div>
            </div>
        );
    }
}

export default NewService;
