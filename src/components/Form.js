import React, { useState } from 'react';
import toppings from '../data/toppings';

export default function Form (props) {
    const { values, update, submit, errors, disabled } = props;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const valueToUse = type === 'checked' ? checked : value;
        update(name, valueToUse);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div id="pizza-form">
            <form autoComplete="off" onSubmit={onSubmit}>
                <div>
                    <label> Name &nbsp;
                        <input 
                            id="name-input"
                            type="text"
                            name="name"
                            placeholder="name"
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                    <a>{errors.name}</a>
                </div>
{/* SIZE DROPDOWN */}
                <div id="size-dropdown">
                    <label> Choice of Size &nbsp;
                        <select value={values.size} name="size" onChange={onChange}>
                            <option value="">Size</option>
                            <option value="sm">Small</option>
                            <option value="md">Medium</option>
                            <option value="lg">Large</option>
                        </select>
                    </label>
                    <a>{errors.value}</a>
                </div>
{/* SAUCE SELECTION */}
                <div id="sauce-selection">
                    <label htmlFor="sauce">
                        <input 
                            type="radio"
                            name="sauce"
                            value="Original"
                            checked={values.sauce === 'Original'}
                            onChange={onChange}
                        /> Original &nbsp;
                    </label>
                    <label htmlFor="sauce">
                        <input 
                            type="radio"
                            name="sauce"
                            value="Ranch"
                            checked={values.sauce === 'Ranch'}
                            onChange={onChange}
                        /> Garlic Ranch &nbsp;
                    </label>
                    <label htmlFor="sauce">
                        <input 
                            type="radio"
                            name="sauce"
                            value="BBQ"
                            checked={values.sauce === 'BBQ'}
                            onChange={onChange}
                        /> Barbeque &nbsp;
                    </label>
                    <label htmlFor="sauce">
                        <input 
                            type="radio"
                            name="sauce"
                            value="Spinach"
                            checked={values.sauce === 'Spinach'}
                            onChange={onChange}
                        /> Spinach &nbsp;
                    </label>
                    <a>{errors.sauce}</a>
                </div>
{/* TOPPINGS CHECKBOXES */}
                <div id="toppings-checklist"> Add Toppings <br/> Choose a few <br/>
                    {/* {
                        toppings.map(topping => {
                            return(
                                <label> {topping} &nbsp;
                                    <input 
                                        type="checkbox"
                                        name="topping"
                                        checked={values.checked}
                                        value={values.topping}
                                        onChange={onChange}
                                    />
                                </label>
                            )
                        })
                    } */}

                    <label>
                        <input 
                            type="checkbox"
                            name="topping"
                            value={values.topping}
                            checked={values.checked}
                            onChange={onChange}
                        />
                    </label> Pepperoni &nbsp;
                    <label>
                        <input 
                            type="checkbox"
                            name="topping"
                            id="Grilled Chicken"
                            checked={values.checked}
                            value={values.topping}
                            onChange={onChange}
                        />
                    </label> Grilled Chicker &nbsp;
                    <label>
                        <input 
                            type="checkbox"
                            name="topping"
                            checked={values.checked}
                            value={values.topping}
                            onChange={onChange}
                        />
                    </label> Diced Tomatos &nbsp;
                    <label>
                        <input 
                            type="checkbox"
                            name="topping"
                            checked={values.checked}
                            value={values.topping}
                            onChange={onChange}
                        />
                    </label> Spinach &nbsp;
                    <a>{errors.topping}</a>
                </div>
{/* SPECIAL TXT INSTRUCTIONS */}
                <div id="special-text">
                    <label> Note &nbsp;
                        <input 
                            type="text"
                            name="note"
                            placeholder="special request?"
                            value={values.note}
                            onChange={onChange}
                        />
                    </label>
                </div>
{/* SUBMIT FORM */}
                <div id="submit-order">
                    <label>
                        <button id="submitBtn" disabled={disabled}>Submit</button>
                    </label>
                </div>
            </form>

        </div>
    )
}