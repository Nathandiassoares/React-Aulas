import React, { useState } from "react";
import Item from './Item';
import style from './Lista.module.scss';

function Lista() {
    const [taferas,setTarefas] = useState([{
        tarefa:'React',
        tempo:'02:00:00'
    }, {
        tarefa:'javaScript',
        tempo:'01:00:00'
    }, {
        tarefa:'TypeScript',
        tempo:'03:00:00'   
    }]) 
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={()=>{
                setTarefas([...taferas,{tarefa:"Estuda estado", tempo: "05:00:00"}])
            }}>
                Estudos do dia
            </h2>
            <ul>
                {taferas.map((item, index)=>(
                    <Item
                    key={index}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;