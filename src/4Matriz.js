import React, {useState, Fragment} from 'react';

const Matriz = () => {
    const [lista, setLista]= useState([1,2,3,4,5])
    return (
        <Fragment>
            <h1>lectura sin index y sin html</h1>
            { lista.map((item)=> item)}
            <hr />
            <h1>lectura sin index y con html</h1>
    { lista.map((item)=> <span>{item}</span>)}
    <hr />
    <h1>lista con index y sin key</h1>
    {
        lista.map((item,index) =>
    <p> {item} - {index}</p>
    )
    }
    <hr />
    <h1>listas con index y con keys</h1>
    {
        lista.map((item, index) =>
    <p key = {index}>{item} - {index}</p>
        )
    }
        </Fragment>
    )

}
export default Matriz;