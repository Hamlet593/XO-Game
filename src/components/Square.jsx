import React from 'react';
import './Square.css';

const Square = ({boards, board, setBoards, index, handleClick, setIndex}) => {
    return (
        <div className='square'>
            <button onClick={() => {
                handleClick(index)
                setIndex(index)
            }}>{board}</button>
        </div>
    );
}

export default Square;