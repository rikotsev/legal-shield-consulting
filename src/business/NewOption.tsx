import * as React from "react";
import { Beans } from "../beans/Beans";
import { v4 as uuid } from 'uuid';
import { ChangeEvent } from "react";
import { API } from "aws-amplify";
import * as custom_queries from "../dao/CustomQueries";

type NewOptionProps = {
    service: Beans.ServiceBean
    syncServices(): void
};

type NewOptionState = {
    option: Beans.OptionBean
};

class NewOption extends React.Component<NewOptionProps, NewOptionState> {
    constructor(props: NewOptionProps) {
        super(props);
    }
    state = {
        option: {
            id: uuid(),
            description: "",
            title: "",
            price: 0,
            serviceID: ""
        }
    };
    handleChange = (event: ChangeEvent): void => {
        // @ts-ignore
        let value = event.target.value;
        // @ts-ignore
        let name = event.target.name;

        switch (name) {
            case 'title':
                this.setState((state) => {
                    state.option.title = value;
                    return state;
                })
                break;
            case 'description':
                this.setState((state) => {
                    state.option.description = value;
                    return state;
                })
                break;
            case 'price':
                this.setState((state) => {
                    state.option.price = value;
                    return state;
                })
                break;
        }

    }
    saveNewOption = (event: any): void => {
        console.log('Creating a new option!');
        console.log(this.state);

        let newOptionInput = {
            id: uuid(),
            title: this.state.option.title,
            description: this.state.option.description,
            serviceId: this.props.service.id,
            price: this.state.option.price
        };

        console.log(newOptionInput);

        API.graphql({
            query: custom_queries.createNewOption, variables: newOptionInput
        });

        this.props.syncServices();

    }
    render() {
        return (
            <div>
                <div>
                    <label>Title:</label>
                    <input onChange={this.handleChange} type="text" name="title" />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea onChange={this.handleChange} name="description" defaultValue={"Enter your option description here..."}></textarea>
                </div>
                <div>
                    <label>Price:</label>
                    <input onChange={this.handleChange} type="text" name="price" />
                </div>
                <div>
                    <button onClick={this.saveNewOption}>Save</button>
                </div>
            </div>
        );
    }
}

export default NewOption;