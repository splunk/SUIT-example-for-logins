import React, { useContext } from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SplunkThemeProvider from '@splunk/themes/SplunkThemeProvider';
import Heading from '@splunk/react-ui/Heading';
import Text from '@splunk/react-ui/Text';
import Button from '@splunk/react-ui/Button';
import Card from '@splunk/react-ui/Card';
import HelpModal from './HelpModal';
import LoginContext from './LoginContext';

// use Splunk Utils package to send an Auth request

async function GetSessionKey(username, password, server) {
    var key = await fetch(server + '/services/auth/login', {
        method: 'POST',
        body: new URLSearchParams({
            username: username,
            password: password,
            output_mode: 'json',
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return data['sessionKey']; // indicates a successful request
        });

    return { sessionKey: key };
}

// some styling
const cardStyle = {
    width: 350,
    height: 420,
    margin: '0 20px 20px 0',
    borderRadius: 10,
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
};

const Login = () => {
    // set our state hooks for each input and the state of the modal

    const [sessionKey, setSessionKey] = useState('<Token>');
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [serverURL, setServerURL] = useState();
    const [open, setOpen] = useState(false);
    const modalToggle = useRef(null);
    const navigate = useNavigate();
    const [authStatus, setStatus] = useContext(LoginContext); // use the useContext hook to easily pull the value from the Context Provider

    const handleRequestOpen = (e, data) => {
        // handle the modal opening
        setOpen(true);
    };

    const handleRequestClose = () => {
        // handle the modal closing
        setOpen(false);
        modalToggle?.current?.focus(); // Must return focus to the invoking element when the modal closes
    };

    function handleLoginButton() {
        // when the login button is clicked, make an auth request
        GetSessionKey(username, password, serverURL)
            .then((response) => response)
            .then((data) => {
                setSessionKey(data['sessionKey']); // we can store the key if this is needed later
                setStatus(true); // need to store this in context
                navigate('/success'); // use React Router Dom to navigate to the Success screen
            });
    }

    return (
        <div className="App">
            <SplunkThemeProvider family="prisma" density="compact" colorScheme="light">
                <Card style={cardStyle}>
                    <form style={formStyle}>
                        <Heading level={2}>Login Example App</Heading>
                        <div>
                            <Heading level={3}>Splunk Server URL</Heading>
                            <Text
                                style={{ width: '200px' }}
                                value={serverURL}
                                onChange={(e) => {
                                    setServerURL(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <Heading level={3}>Username</Heading>

                            <Text
                                style={{ width: '200px' }}
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <Heading level={3}>Password</Heading>

                            <Text
                                style={{ width: '200px' }}
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        <div className="buttons">
                            <Button
                                onClick={handleRequestOpen}
                                ref={modalToggle}
                                label="Help"
                                appearance="default"
                            />
                            <Button
                                label="Login"
                                appearance="primary"
                                onClick={() => handleLoginButton()}
                            />
                        </div>
                        <HelpModal openState={open} onClose={handleRequestClose} />
                    </form>
                </Card>
            </SplunkThemeProvider>
        </div>
    );
};

export default Login;
