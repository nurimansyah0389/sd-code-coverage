import React from 'react';
import Renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import List from '../';

describe('List Spec', () => {
    it('Should render without error', () => {
        const tree = Renderer.create(<List />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('Should render todo data from the initial data', () => {
        // Assign
        const data = ['First Todo', 'Second Todo', 'Third Todo', 'Fourht Data'];
        const wrapper = shallow(<List data={data} />);

        // Assert
        expect(wrapper.find('ul > li')).toHaveLength(data.length);
    });
    it.todo('Should show add new todo form when "Add Todo" button clicked');
    it.todo('Should delete selected todo item');
});