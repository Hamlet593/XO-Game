import React from 'react';
import './History.css'
import Historybuttons from './HistoryButtons';

const History = ({history, setHistory, setBoards, setXIsNext, startAgain}) => {

    const arrayOfHistory = Object.entries(history);

    return (
        <>
            <h3>Խաղի ընթացք</h3>
            {arrayOfHistory.map((item, id) => {
                return (
                    <div key={id}>
                        {<Historybuttons item={item} arrayOfHistory={arrayOfHistory} setBoards={setBoards} setHistory={setHistory} setXIsNext={setXIsNext} history={history}/>}
                    </div>)
            })}
        </>
    );
}

export default History;