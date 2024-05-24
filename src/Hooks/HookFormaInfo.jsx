
import { useState } from 'react';
import axios from 'axios';

import React from 'react'

export const HookFormaInfo = () => {
    const [dataForm, setDataForm ] = useState (
        {
            personalinfo: ""
        }
    );

    const [resultado, setResultado] = useState("");

    const changeHandler = (event)=>{
        const { name, value } = event.target;
        setDataForm({...dataForm, [name] : value});
    }

    const submitHandler = async (event)=>{
        event.preventDefault();
        const url ="http://localhost:3000/api/info";
        const result = await axios.post(url, dataForm);
        const dataResult = (await result).data;
        setResultado ( dataResult.message + ' id: ' + dataResult.object_created)
    }

  return {
    dataForm, resultado,
    changeHandler, submitHandler
  }
}

