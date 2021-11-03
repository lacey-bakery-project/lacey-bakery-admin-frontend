import React from 'react'

export default function Input(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.change}
            />
        </div>
    )
}


