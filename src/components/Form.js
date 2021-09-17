import React, { useState } from 'react';

export default function Form (props) {
    const { values, update, submit } = props;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const valueToUse = type === 'checked' ? checked : value;
        update(name, valueToUse);
    }
    return (
        <div id="pizza-form">
            <div id="name-input">
            <label>
                <input 
                    type="text"
                    name="name"

                />
            </label>
            </div>

        </div>
    )
}