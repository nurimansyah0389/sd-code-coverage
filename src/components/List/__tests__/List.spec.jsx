import React from 'react';
import Renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import List from '../';

describe('List Spec', () => {
    const data = ['First Todo', 'Second Todo', 'Third Todo'];

    it('Should render without error', () => {
        const tree = Renderer.create(<List />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('Should render todo data from the initial data', () => {
        const wrapper = shallow(<List data={data} />);
        const instance = wrapper.instance();

        expect(instance.state.data).toHaveLength(data.length);
    });
    it('Should show add new todo when "Add Todo" button clicked', () => {
        const wrapper = mount(<List data={data} />);
        const instance = wrapper.instance();
        const Form = wrapper.find('Form');
        const Input = Form.find('[name="todo"]');
        const Button = Form.find('Button');
        
        Input.simulate('change', { target: { value: 'Playing footbal' } });
        Button.simulate('submit');

        expect(instance.state.data).toHaveLength(4);
        expect(instance.state.data.includes('Playing footbal')).toBeTruthy();
    });
    it('Should delete selected todo item', () => {
        const wrapper = shallow(<List data={data} />);
        const instance = wrapper.instance();
        const selectedItem = wrapper.find('ul > li').at(0);
        const Button = selectedItem.find('button');

        Button.simulate('click');

        expect(instance.state.data).toHaveLength(2);
        expect(instance.state.data.includes('First Todo')).toBeFalsy();
    });
});