import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Header</h2>
            <ul>
                <li><Link to='/' >Main page</Link></li>
                <li><Link to='/employees'>Employees</Link></li>
            </ul>
        </div>
    )
}

export default Header
