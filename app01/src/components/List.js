import React from 'react'
import Button from './Button'

const print= (string)=>console.log(string)

function List({ data, deleteTask }) {
    return (

        <ul>
            {
                data.map(taskName =>

                    <li><Button onClick={()=>deleteTask(taskName)} name={`[x]`} /> {taskName}</li>
                )
            }
        </ul>
    )
}

export default List
