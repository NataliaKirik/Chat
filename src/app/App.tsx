import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Content } from './Content';


const App: FC = () => {
    return (
        <Provider store={store}>
            <Content />
        </Provider>
    );
};

export default App;
