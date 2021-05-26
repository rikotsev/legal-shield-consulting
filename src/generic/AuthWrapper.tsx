import * as React from "react";

import {Auth} from "aws-amplify";

interface IAuthWrapperState {
    isLoggedIn: boolean
}

export type AuthWrapperState = {
    isLoggedIn: boolean
}

class AuthWrapper extends React.Component<any, IAuthWrapperState> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount(): void {
        this.getCurrentUser();
    }
    state = {
        isLoggedIn: false
    }
    getCurrentUser = ():void => {
        Auth.currentAuthenticatedUser().then(user => {

            this.setState((state) => ({
                isLoggedIn: true
            }));
        }).catch(e => {
            this.setState((state) => ({
                isLoggedIn: false
            }));
        });
    }
    render() {
        if(this.state.isLoggedIn) {
            return (
                <>
                    {this.props.children}
                </>
            )
        }
        else {
            return null;
        }

    }

}

export default AuthWrapper;