import React from 'react';
import Button from '@splunk/react-ui/Button';
import Modal from '@splunk/react-ui/Modal';
import P from '@splunk/react-ui/Paragraph';
import Heading from '@splunk/react-ui/Heading';
import List from '@splunk/react-ui/List';
import Link from '@splunk/react-ui/Link';
import Info from '@splunk/react-icons/Info';

// display a modal that has resources

const HelpModal = ({ openState, onClose }) => {
    return (
        <div>
            <Modal onRequestClose={onClose} open={openState} style={{ width: '600px' }}>
                <Modal.Header
                    onRequestClose={onClose}
                    title="Login Page with Splunk UI"
                    subtitle=""
                    icon={<Info width="100%" height="100%" />}
                />

                <Modal.Body>
                    <P>
                        This app will show you how to query Splunk from a remote webapp using our
                        Splunk UI Toolkit in React. It uses a couple of packages listed below:{' '}
                    </P>
                    <Heading level={2}>Resources</Heading>
                    <List>
                        <List.Item>
                            <Link to="https://www.npmjs.com/package/@splunk/splunk-utils">
                                @splunk/splunk-utils
                            </Link>
                        </List.Item>
                        <ul>
                            <li>
                                <Link to="https://splunkui.splunk.com/Packages/splunk-utils">
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                        <List.Item>
                            <Link to="https://www.npmjs.com/package/@splunk/visualizations">
                                @splunk/visualizations
                            </Link>
                        </List.Item>
                        <ul>
                            <li>
                                <Link to="https://splunkui.splunk.com/Packages/visualizations">
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                        <List.Item>
                            <Link to="https://www.npmjs.com/package/@splunk/react-ui">
                                @splunk/react-ui
                            </Link>
                        </List.Item>
                        <ul>
                            <li>
                                <Link to="https://splunkui.splunk.com/Packages/react-ui">
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </List>
                    <Heading level={2}>Setup Instructions</Heading>
                    <P>
                        Note: You may need to complete a step for this app to work with your Splunk
                        Environment. Details below:
                    </P>
                    <List>
                        <List.Item>
                            You'll need to configure CORS on your Splunk Environment. Instructions
                            can be found{' '}
                            <Link to="https://dev.splunk.com/enterprise/docs/developapps/visualizedata/usesplunkjsstack/communicatesplunkserver/">
                                here
                            </Link>
                        </List.Item>
                        <List.Item>
                            You'll need to have a trusted certificate for the Splunk management
                            port. If you don't have a valid certificate, you can always visit the
                            URL for the management port of your Splunk environment, and trust the
                            certificate manually with your browser.
                        </List.Item>
                    </List>
                </Modal.Body>
                <Modal.Footer>
                    <Button appearance="secondary" onClick={onClose} label="Cancel" />
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default HelpModal;
