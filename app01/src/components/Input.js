import React from 'react'

function Input({placeholder,onChange}) {
    return (
        
        <input onChange={(e)=>onChange(e.target.value)} placeholder={placeholder}/>
    )
}

export default Input
