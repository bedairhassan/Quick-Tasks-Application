import React from 'react'

function Input({name,onClick}) {
    return (
        
    <button onClick={()=>onClick()}>{name}</button>
    )
}

export default Input
