import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
                I am {person.name} years old {person.age}
            </h2>

        </div>
    )
}

export default Person
