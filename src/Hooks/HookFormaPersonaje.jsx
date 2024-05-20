import React from 'react'

export const HookFormaPersonaje = () => {

    const [dataForm, setDataForm ] = useState (
        {
            pname: "",
            p_age: ""
        }
    );

    const [resultado, setResultado] = useState("");

    const changeHandler = (event)=>{
        const { name, value } = event.target;
        setDataForm({...dataForm, [name] : value});
    }

    const submitHandler = async (event)=>{
        event.preventDefault();
        const url ="http://localhost:3000/api/personaje";
        const result = await axios.post(url, dataForm);
        const dataResult = (await result).data;
        setResultado ( dataResult.message + ' id: ' + dataResult.object_created)

    }

  return {
    dataForm, resultado,
    changeHandler, submitHandler
  }
}
