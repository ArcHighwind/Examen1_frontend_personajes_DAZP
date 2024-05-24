import React from 'react'
import { HookFormaInfo } from '../Hooks/HookFormaInfo';

export const FormInfo = () => {

    const {dataForm, resultado, changeHandler, submitHandler} = HookFormaInfo();


  return (
    <>
        <h1> Add a Character's Information </h1>
        <form onSubmit={submitHandler}>
            <input type='text' name='personalinfo' onChange={changeHandler} placeholder='Enter the Characters Bio'/>
            <br></br>
            <button type='submit'> Add </button>
        </form>
        <p>{resultado}</p>
    </>
  )
}