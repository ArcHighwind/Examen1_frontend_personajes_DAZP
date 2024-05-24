import React from 'react'

export const HomePage = () => {
  return (
    <>
        <div>
            <h3>Bienvenido a la Pagina Principal!</h3>
            <h4>Aqui podras crear tu personaje. Solo sigue las siguientes instrucciones: </h4>
            <p>Tendras que escribir en la URL lo siguiente para poder acceder a las diferentes ramas de la app. Incluire botones una vez que aprenda como implementar saltos de pagina en react/vite asi que espero me disculpen estas molestias.</p>
            <br/>
            <p>1. Para agregar un personaje nuevo: "/personajes" </p>
            <p>2. Para agregar un poder nuevo: "/power" </p>
            <p>3. Para agregar una clase/profesion nueva: "/class" </p>
            <p>4. Para agregar una arma nueva: "/weapon" </p>
            <p>5. Para agregar informacion personal del personaje: "/info" </p>
        </div>
    </>
  )
}
