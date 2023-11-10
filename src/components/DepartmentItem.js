import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const DepartmentItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);

    const handleIncAllocation = () => {
        const department = {
            name: props.name,
            allocation: 10,
        };

        dispatch({
            type: 'ADD_ALLOCATION',
            payload: department,
        });
    };

    const handleDecAllocation = () => {
        const department = {
            name: props.name,
            allocation: 10,
        };

        dispatch({
            type: 'RED_ALLOCATION',
            payload: department,
        });
    };


    const handleDeleteAllocation = () => {
        const department = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ALLOCATION',
            payload: department,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{props.allocation}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncAllocation}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDecAllocation}></FaMinusCircle></td>
        <td><FaTimesCircle size='1em' color="black" onClick={handleDeleteAllocation}></FaTimesCircle></td>
        </tr>
    );
};

export default DepartmentItem;