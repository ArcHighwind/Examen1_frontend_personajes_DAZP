import React from 'react'
import { HookFormaPersonaje } from '../Hooks/HookFormaPersonaje';

export const FormPersonajes = () => {

    const {dataForm, resultado, changeHandler, submitHandler} = HookFormaPersonaje();

    //para cuando aprendamos componentes atomicos
    const FormStructure = [
        {
            name: "pname",
            placeholder : "Character Name",
            action : changeHandler
        },
        {
            name: "p_age",
            placeholder: "Character Age",
            action: changeHandler
        }
    ];
    // --------------------------------------

  return (
    <>
        <h1> Add a Character</h1>
        <form onSubmit={submitHandler}>
            <input type='text' name='pname' onChange={changeHandler} placeholder='Character Name'/>
            <br></br>
            <input type='text' name='p_age' onChange={changeHandler} placeholder='Character Age'/>
            <br></br>
            <button type='submit'> Add </button>
        </form>
        <p>{resultado}</p>
    </>
  )
}
