import React, {useContext} from 'react';

import { personContext } from "./usecontext";



export let Single = ({name, id}) => {

    let {removehandler} = useContext(personContext);
    

    

    return(
        <>

        <div>
            <span>{name}</span>
            <button type='button' onClick={() => removehandler(id)}>remove</button>
        </div>
            
        </>
    )

}