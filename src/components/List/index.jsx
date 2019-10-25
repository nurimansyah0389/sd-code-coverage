import React from 'react';
import PropTypes from 'prop-types';

const List = ({ data = [] }) => (
    <div>
        <ul>
            {data.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);
List.propTypes = {
    data: PropTypes.array
};
export default List;