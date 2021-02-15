import React from 'react'
import Employee from './Employee'

const EmployeesList = ({ employees }) => {

    return (
        <div>
            <h2>List of employees</h2>
            <ul>
            {
                employees.map((employee) => <Employee key={employee.id} name={employee.employee_name} /> )
            }
            </ul>
        </div>
    )
}

export default EmployeesList
