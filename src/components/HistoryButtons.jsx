import React from 'react';
import './History.css'

const Historybuttons = ({item, arrayOfHistory, setBoards, setHistory, setXIsNext, history}) => {

    const key = item[0];
    const value = item[1];

    let newHistory = {};


    for(let i = 0; i < arrayOfHistory.length; i++){
        if(arrayOfHistory[i][0] !== key){
            newHistory[arrayOfHistory[i][0]] = arrayOfHistory[i][1]
        }
        else{
            newHistory[arrayOfHistory[i][0]] = arrayOfHistory[i][1];
            break;
        }
    }

    return (
        <div className='history'>
            <button onClick={() => {
                setBoards(value)
                setHistory(newHistory)
            }}>Քայլ դեպի {key}</button>
        </div>
    );
}

export default Historybuttons;