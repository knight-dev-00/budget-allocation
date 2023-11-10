import React, { useContext } from 'react';
import DepartmentItem from './DepartmentItem';
import { AppContext } from '../context/AppContext';

const DepartmentsList = () => {
  const { departments } = useContext(AppContext);

  return(
    <table className='table'>
      <thead className="thead-light">
       <tr>
        <th scope="col">Department</th>
        <th scope="col">Allocated Budget</th>
        <th scope="col">Increase by 10</th>
        <th scope="col">Decrease by 10</th>
        <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {departments.map((department) => (
          
          <DepartmentItem id={department.id} key={department.id} name={department.name} allocation={department.allocation} />
        ))}
      </tbody>
    </table>
  );
};

export default DepartmentsList;