import React, {useContext} from 'react';

import { personContext } from "./usecontext";

import { Single } from "./single";

export let Loop = () => {

    let {people} = useContext(personContext);

    return(
        people.map((person) => {
            return <Single key={person.id} name={person.name} id={person.id}/>
        })
    )
    
}