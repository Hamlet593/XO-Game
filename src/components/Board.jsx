import React from 'react';
import './Board.css'
import Square from './Square';

const Board = ({boards, setBoards, handleClick, setIndex}) => {
    return (
        <div className='board'>
            {boards.map((board, index) => {
                return <div key={index}>{<Square boards={boards} board={board} setBoards={setBoards} index={index} handleClick={handleClick} setIndex={setIndex}/>}</div>
            })}
        </div>
    );
}

export default Board;