import React, { Fragment } from 'react';

import List from './components/List';

import './App.css';

const data = ['First Todo', 'Second Todo', 'Third Todo'];

const App = () => (
    <Fragment>
        <main>
            <h1>Code Coverage Tests</h1>
            <List data={data} />
        </main>
    </Fragment>
);
export default App;