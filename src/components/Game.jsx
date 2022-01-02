import React, {useState, useEffect} from 'react';
import Board from './Board';
import './Game.css'
import History from './History';
import Calculatewinner from '../helpers/CalculateWinner';
import Positions from '../constants/Positions';

const Game = () => {

    const [boards, setBoards] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState({});
    const [index, setIndex] = useState('')

    const winner = Calculatewinner(boards)
    
    const handleClick = index => {
        if(winner || nobodyWins() || boards[index]) return
        const boardsCopy = [...boards];
        boardsCopy[index] = xIsNext ? 'X' : 'O';
        setBoards(boardsCopy)
        setXIsNext(!xIsNext)
    }

    const nobodyWins = () => {
        if(!winner && boards.every(item => item)) return true;
    }

    const startAgain = () => {
        setBoards(Array(9).fill(null));
        setHistory({})
    }

    const createHistory = index => {
        if (winner || nobodyWins() || history[Positions(index)]) return;
        const historyCopy = {...history};
        historyCopy[Positions(index)] = boards;
        if(!historyCopy.hasOwnProperty('undefined')){
            setHistory(historyCopy)
        }
    }

    useEffect(() => {
        const currentArrayOfCurrentHistory = Object.entries(history);

        if(currentArrayOfCurrentHistory.length % 2 === 0){
            setXIsNext(true)
        }
        else{
            setXIsNext(false)
        }
    }, [history])


    useEffect(() => {
        createHistory(index)
    }, [index])
 
    return (
        <>
            <div className='container'>
                <div className='wrapper'>
                    {
                        !nobodyWins() && winner && <span className='winner'>{winner}-ը հաղթեց !!!</span>
                    }
                    {
                        !nobodyWins() && !winner && <span className='winner'>{xIsNext ? 'X' : 'O'}-ի հերթն է</span>
                    }
                    {
                        nobodyWins() && <span className='nobodyWins'>«Խաղն ավարտվեց ոչ ոքի...»</span>
                    }
                    <Board boards={boards} setBoards={setBoards} handleClick={handleClick} setIndex={setIndex}/>
                    {
                        <button className='startAgain' onClick={() => {
                            startAgain()
                            setXIsNext(true)
                        }}>{winner || nobodyWins() ? 'Սկսել նորից' : 'Մաքրել տախտակը'}</button>
                    }
                </div>
                <div>
                    <History history={history} setHistory={setHistory} setBoards={setBoards} setXIsNext={setXIsNext} startAgain={startAgain}/>
                </div>
            </div>
        </>        
    );
}

export default Game;