import * as React from "react";
import { Beans } from "../beans/Beans";
import { API } from "aws-amplify";
import * as custom_queries from "../dao/CustomQueries";
import * as mutations from "../graphql/mutations";

type OptionProps = {
    option: Beans.OptionBean
    serviceId: string
    syncServices(): void
};

type OptionState = {
    isEdit: boolean
}

class Option extends React.Component<OptionProps, OptionState> {
    constructor(props: OptionProps) {
        super(props);
    }
    state = {
        isEdit: false
    };
    handleStateChange = (newState: boolean): void => {
        this.setState((state) => ({
            isEdit: newState
        }));
    }
    render() {
        return (
            <div>
                {
                    this.state.isEdit ?
                        <OptionEdit option={this.props.option} handleStateChange={this.handleStateChange} /> :
                        <OptionView option={this.props.option} handleStateChange={this.handleStateChange} syncServices={this.props.syncServices} serviceId={this.props.serviceId} />
                }
            </div>
        );
    }
}


type OptionViewProps = {
    option: Beans.OptionBean
    serviceId: string
    handleStateChange(newState: boolean): void
    syncServices(): void
};

type OptionViewState = {

};

class OptionView extends React.Component<OptionViewProps, OptionViewState> {
    constructor(props: OptionViewProps) {
        super(props);
    }
    deleteOption = (event: any): void => {
        console.log('Deleteing option');
        console.log(this.props.option.id);
        console.log(this.props.serviceId);

        API.graphql({
            query: mutations.deleteOption, variables: {
                input: {id: this.props.option.id}
            }
        });

        this.props.syncServices();
    }
    render() {
        return (
            <div>
                <div>
                    {this.props.option.title}
                </div>
                <div>
                    {this.props.option.description}
                </div>
                <div>
                    {this.props.option.price}
                </div>
                <div>
                    <button onClick={(e) => {
                        this.props.handleStateChange(true);
                    }}>Edit</button>
                    <button onClick={this.deleteOption}>Delete</button>
                    <button>
                        Buy
                    </button>
                </div>
            </div>
        );
    }
}

type OptionEditProps = {
    option: Beans.OptionBean,
    handleStateChange(newState: boolean): void
};

type OptionEditState = {

};

class OptionEdit extends React.Component<OptionEditProps, OptionEditState> {
    constructor(props: OptionEditProps) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" defaultValue={this.props.option.title} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" defaultValue={this.props.option.description}></textarea>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" name="price" defaultValue={this.props.option.price} />
                </div>
                <div>
                    <button onClick={(e) => {
                        this.props.handleStateChange(false);
                    }}>Save</button>
                </div>
            </div>
        );
    }
}

export default Option;