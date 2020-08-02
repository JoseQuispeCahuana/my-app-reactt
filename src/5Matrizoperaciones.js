import React, {useState, Fragment} from 'react';
import Matriz from './4Matriz';

const MatrizOperaciones = () =>{

    const [lista, setLista] = useState([1,2,3,4,5]);
    const [dias, setDias]= useState(["lunes","Martes","Miercoles","Jueves"]);
    const uniendoArray = [...lista, ...dias];

    const [numero, setNumero] = useState(6);
    const agregarNumero = () =>{
        //console.log(uniendoArray);
        setNumero(numero + 1);
        setLista([...lista, numero]);
    }

    const [texto, setTexto] = useState(["Viernes","Sabado","Domingo"]);
    const agregarTexto = () =>{
            //setTexto(texto);
            setDias([...dias, ...texto]);
    }   
    return (
        <Fragment>
            <h1>Lectura de la union de matrices</h1>
            {
                uniendoArray.map((item,index) =>
            <p key = {index} > {item} - {index}</p>
                )
            }
            <hr />
            <h1>Agregar un valor a un array</h1>
            <button onClick={agregarNumero}>Agregar numero</button>
            {
                lista.map((item, index) =>
            <p key = {index} > {item} - {index} </p>    
                )
            }
            <hr />
            <h1>Agregar un texto a un array</h1>
            <button onClick={agregarTexto}>Agregar texto</button>
            {
                dias.map((item, index) =>
                    <p key = {index} > {item} - {index} </p>
                )
            }
        </Fragment>
    );
}
export default MatrizOperaciones;