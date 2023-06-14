import React from 'react'
import Person from './Person'
function List() {
    const names =['Deepika','Sindhuja','Bold','Deepika']
    // const nameList =names.map(name=><h2>{name}</h2>)
    // return (
    //     <div>{nameList}</div>
    // )
    const person =[
        {
            id : 1,
            name: 'Deka',
            age : 22,
        
        },
        {
            id : 2,
            name: 'aasha',
            age : 21,
        },
       {
        id : 3,
        name : 'Babu',
        age : 25,
       }
    ]
    const nameslist = names.map((name,index) =><h2 key={index}>{index} {name}</h2>)
    //keys are used while the list has unique names it identify which items have
    //changed and added
    return(
        <div>{nameslist}</div>
    )
}

export default List
