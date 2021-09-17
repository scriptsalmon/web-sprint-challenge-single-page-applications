import React from 'react';
import toppings from '../data/toppings';
import styled from 'styled-components';

const StyledForm = styled.div`
    width:100%;
    height:auto;
    background: ${props => props.theme.secondaryColor};

    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction:column;

    #customer-name, #size-dropdown, 
    #sauce-selection, #toppings-checklist, 
    #special-text, #submit-order {
        background-color:${props => props.theme.tertiaryColor};
        margin:2% 1%;
    }

`

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
        <StyledForm>
        <div id="pizza-form">
            <form autoComplete="off" onSubmit={onSubmit}>
                <div id="customer-name">
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
                    {
                        toppings.map((topping, idx) => {
                            return(
                                <label key={idx} >
                                    <input
                                        type="checkbox"
                                        name="topping"
                                        checked={values.checked}
                                        value={topping}
                                        onChange={onChange}
                                    /> {topping} &nbsp;
                                </label> 
                            )
                        })
                    }

                    {/* <label>
                        <input 
                            type="checkbox"
                            name="topping"
                            checked={values.checked}
                            value="Pepperoni"
                            onChange={onChange}
                        /> Pepperoni &nbsp;
                    </label> 
                    <label>
                        <input 
                            type="checkbox"
                            name="topping"
                            checked={values.checked}
                            value="Grilled Chicker"
                            onChange={onChange}
                        /> Grilled Chicker &nbsp;
                    </label> 
                    <label>
                        <input 
                            type="checkbox"
                            name="topping"
                            checked={values.checked}
                            value="Diced Tomato"
                            onChange={onChange}
                        /> Diced Tomato &nbsp;
                    </label> 
                    <label>
                        <input 
                            type="checkbox"
                            name="topping"
                            checked={values.checked}
                            value="Spinach"
                            onChange={onChange}
                        /> Spinach &nbsp;
                    </label>  */}
                    <a>{errors.topping}</a>
                </div>
{/* SPECIAL TXT INSTRUCTIONS */}
                <div id="special-text">
                    <label> Note &nbsp;
                        <textarea 
                            rows="4"
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
                        <button id="order-button" disabled={disabled}>Submit</button>
                    </label>
                </div>
            </form>

        </div>
        </StyledForm>
    )
}