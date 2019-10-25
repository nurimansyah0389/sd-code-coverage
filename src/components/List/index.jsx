import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

const Button = () => <button type="submit">Add Todo</button>
const Form = ({ onSubmit }) => {

    const [todo, setTodo] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setTodo(value);
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        onSubmit(todo);
        setTodo('');
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>What will you do next?</label>
                <input type="text" name="todo" id="todo" value={todo} onChange={handleChange}/>
                <Button />
            </div>
        </form>
    );
};
Form.propTypes = {
    onSubmit: PropTypes.func
};

class List extends Component {

    static propTypes = {
        data: PropTypes.array
    };

    state = {
        data: this.props.data || []
    };

    handleOnSubmit = value => {
        const data = this.state.data.slice();
        data.push(value);
        this.setState({ data });
    };

    handleRemove = item => {
        const data = this.state.data.slice().filter(row => row !== item);
        this.setState({ data });
    };

    render = () => {
        const { data } = this.state;

        return (
            <div>
                <ul>
                    {data.map((item, index) => <li key={index}>{item} - <button type="button" onClick={() => this.handleRemove(item)}>Delete</button></li>)}
                </ul>
                <hr/>
                <Form onSubmit={this.handleOnSubmit} />
            </div>
        );
    };
};
export default List;