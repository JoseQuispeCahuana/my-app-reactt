import React, {useState, Fragment} from 'react';

const Contador = () => {

    const [valor, setValor] = useState(0);
    const[numero, setNumero] = useState(0);

    const IncrementoDos = () =>{
        setNumero(numero + 1);
        console.log("Mensaje De Contador");

        
    }

    return (
        <Fragment>
            <button onClick={()=> setValor(valor + 2)} >Contador de a 2</button>
            <span>incremento de contador2: {valor}</span>
            <hr />
            <button onClick={IncrementoDos}>contador de a 1</button>
    <span>incremento de contador1:{numero}</span>
        </Fragment>
    );
}
export default Contador;