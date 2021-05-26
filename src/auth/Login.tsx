import * as React from "react";
import {ChangeEvent} from "react";

import {Auth} from 'aws-amplify';


type LoginProps = {
    isLoggedIn: boolean
    setUser(user:any): void
};

type LoginState = {
    credentials: {
        username: string,
        password: string
    }
};

class CustomLogin extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
    }
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    handleChange = (event: ChangeEvent): void => {

        // @ts-ignore
        let value = event.target.value;
        // @ts-ignore
        let name = event.target.name;

        switch(name) {
            case 'username':
                this.setState((state) => {
                    state.credentials.username = value;
                    return state;
                });
                break;
            case 'password':
                this.setState((state) => {
                    state.credentials.password = value;
                    return state;
                });
                break;
        }

    };
    login = async (event: any): Promise<void> => {
        console.log('username -> ' + this.state.credentials.username + ' password -> ' + this.state.credentials.password)

        let username = this.state.credentials.username;
        let password = this.state.credentials.password;

        let user = await Auth.signIn(username, password);

        console.log(user);

        /*
        let session = await Auth.currentSession();

        console.log(session);
        */

        this.props.setUser(user);

        console.log(user);
    }
    logout = async (event: any): Promise<void> => {
        Auth.signOut();

        this.props.setUser({username: ""});
    }
    render() {
        return (
            <div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} />
                </div>
                <div>
                    {
                        !this.props.isLoggedIn ? <button onClick={this.login}>Login</button> : <button onClick={this.logout}>Logout</button>
                    }
                </div>
            </div>
        );
    }
}

export default CustomLogin;