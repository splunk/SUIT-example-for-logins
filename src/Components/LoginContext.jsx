import { createContext } from 'react';

// create our login context, defaults to false
// and also a function that we can use to update it

const LoginContext = createContext([false, () => {}]);

export default LoginContext;
