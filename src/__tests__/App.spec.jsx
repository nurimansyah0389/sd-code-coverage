import React from 'react';
import Renderer from 'react-test-renderer';

import App from '../App';

describe('App Spec', () => {
    it('Should render without error', () => {
        const tree = Renderer.create(<App/>);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});