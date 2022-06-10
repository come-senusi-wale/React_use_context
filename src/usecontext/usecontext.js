 import React, {useState, useContext}from 'react';

 import { data } from "./data ";

 import { Loop } from "./loop";
 

 export let personContext = React.createContext();

 // two context are provider and consumer ::::::::::::

const Usecontext = () => {

    let [people, setPeople] = useState(data);

    let removehandler = (id) => {

        let remainingPeople = people.filter((person) => person.id != id);
        setPeople(remainingPeople);

    }

  return (
    <personContext.Provider value={{people, removehandler}}>
        <Loop />
    </personContext.Provider>
  )
}

/*let Loop = () => {

    let {people} = useContext(personContext);

    return(
        people.map((person) => {
            return <Single key={person.id} name={person.name} id={person.id}/>
        })
    )
    
}*/


/*let Single = ({name, id}) => {

    let {removehandler} = useContext(personContext);
    

    

    return(
        <>

        <div>
            <span>{name}</span>
            <button type='button' onClick={() => removehandler(id)}>remove</button>
        </div>
            
        </>
    )

}*/

export default Usecontext