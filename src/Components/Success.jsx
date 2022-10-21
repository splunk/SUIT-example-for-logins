import React, { useContext } from 'react';
import MessageBar from '@splunk/react-ui/MessageBar';
import Link from '@splunk/react-ui/Link';
import { Navigate } from 'react-router-dom';
import LoginContext from './LoginContext';

const Success = () => {
    const [authStatus] = useContext(LoginContext); // grab the context from the Context Provider
    if (!authStatus) {
        // if not authenticated, navigate back to homepage
        return <Navigate replace to="/" />;
    } else {
        // if authenticated, display the success banner
        return (
            <div className="App">
                <MessageBar type="success" onRequestClose={() => {}}>
                    You are now <strong>authenticated</strong>. Check out
                    <Link to="splunkui.splunk.com">Splunk UI Toolkit</Link>
                    for more cool examples!
                </MessageBar>
            </div>
        );
    }
};

export default Success;
