import React, { Component } from 'react'
import EmployeeInput from './EmployeeInput';
import EmployeesList from './EmployeesList';

export const ChangeListContext = React.createContext();

export class Employees extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            employees: [],
        }
    }

    componentDidMount = async () => {
        try {
            const respone = await fetch('http://dummy.restapiexample.com/api/v1/employees');
            const data = await respone.json();

            this.setState({
                employees: data.data
            })

        } catch (error) {
            console.log(error);
        }
    }

    changeEmployeeList = (e, inputText, selectValue) => {
        e.preventDefault();
        
        if (selectValue === 'add') {
            
            this.setState({
                employees: [...this.state.employees, {
                    /*id: this.state.employees.length + 1,*/
                    id: + this.state.employees[this.state.employees.length -1 ].id + 1,
                    employee_name: inputText
                }]
            })
        } else {
            const newEmployees = []

            this.state.employees.forEach((employee) => {
                if (employee.employee_name != inputText) {
                    newEmployees.push(employee)
                }
            })

            this.setState({
                employees: newEmployees
            })
        }
    }
    
    render() {
        const { employees } = this.state;
       
        return (
            <div>
                <EmployeeInput changeEmployeeList={this.changeEmployeeList} />
                <ChangeListContext.Provider value={this.changeEmployeeList}>
                    <EmployeesList employees={employees} />
                </ChangeListContext.Provider>
            </div>
        )
    }
}

export default Employees
