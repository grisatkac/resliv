import React, { useState } from 'react'

const EmployeeInput = ({ changeEmployeeList }) => {
    const [inputText, setInputText] = useState('');
    const [selectValue, setSelectValue] = useState('add');

    const clickBtn = (e) => {
        changeEmployeeList(e, inputText, selectValue)
        setInputText('')
    }

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
            />
            <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)} >
                <option value="add" >Add employee</option>
                <option value="del">Delete employee</option>
            </select>
            <button onClick={clickBtn}>Change list</button>
        </div>
    )
}

export default EmployeeInput
