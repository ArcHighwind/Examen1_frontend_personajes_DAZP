import React from 'react'
import {HookFormaClass} from '../Hooks/HookFormaClass'

export const FormClass = () => {

    const {dataForm, resultado, changeHandler, submitHandler} = HookFormaClass();


  return (
    <>
        <h1> Add a Class</h1>
        <form onSubmit={submitHandler}>
            <input type='text' name='class_name' onChange={changeHandler} placeholder='Class Name'/>
            <br></br>
            <button type='submit'> Add </button>
        </form>
        <p>{resultado}</p>
    </>
  )
}