import React, { useContext } from 'react'
import { ChangeListContext } from './Employees';

const Employee = ({ name }) => {
    const changeEmployeeList = useContext(ChangeListContext);
    return (
            <li >name: {name} <button onClick={(e) => changeEmployeeList(e, name, 'del')}>Delete item</button></li>
    )
}

export default Employee
