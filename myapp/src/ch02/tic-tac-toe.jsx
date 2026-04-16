//https://ja.react.dev/learn/tutorial-tic-tac-toe

import { useState } from "react";

export default function Game() {
    const [his, setHis] = useState([Array(9).fill(null)]);
    const [xIsNext, setXisNext] = useState(true);
    const [nowNo, setNowNo] = useState(0);
    const nowBord = his[nowNo];

    function hPlay(nextSeq) {
        const nextHis = [...his.slice(0, nowNo + 1), nextSeq]
        setHis([...his, nextHis]);
        setNowNo(nextHis.length -1);
        setXisNext(!xIsNext);
    }

    function jumpTO(m) {
        setNowNo(m);
        setXisNext(m % 2 === 0);
    }

    const moves = his.map((s, m) => {
        let description;
        if (m > 0 ) {
            description = "Go to #" + m;
        } else {
            description = "Game Start"
        }

        return(
            <li key={m}>
                <button onClick={() => jumpTO(m)}>{description}</button>
            </li>
        );
    });
    return(
        <div className="game">
            <div className="bord">
                <Bord xIsNext={xIsNext} arrS={nowBord} onPlay={hPlay}/>
            </div>
            <div className="info">
                <ol>{moves}</ol>
            </div>
        </div>

    );
}

function Bord( {xIsNext, arrS, onPlay}){
    //const [arrS, setSqure] = useState(Array(9).fill(null));
    
    let status;
    const winner = calculateWinner(arrS);
    if(winner) {
        status = "Winner : " + winner;
    } else {
        status = "Next : " + (xIsNext ? "X" : "O");
    }

    const handleClick = (i) => {
        if (arrS[i] || calculateWinner(arrS)) {
            return;
        }

        const nextSeq = arrS.slice();
        if (xIsNext) {
            nextSeq[i] = "X";
        } else {
            nextSeq[i] = "O";
        }
        
        console.log("clicked! " + i);
//        setSqure(nextSeq);
//        setXisNext(!xIsNext);
        onPlay(nextSeq);
    };

    return(
        <>
        <div className="status">{status}</div>
        <div className="bord-row">
            <Seq i="1" v={arrS[1]} sqClick={() => handleClick(1)}/>
            <Seq i="2" v={arrS[2]} sqClick={() => handleClick(2)}/>
            <Seq i="3" v={arrS[3]} sqClick={() => handleClick(3)}/>
        </div>
        </>
    );

}
export function Seq({i, v, sqClick}) {
//    console.log("render " + i);
    return (
        <button className="square" onClick={sqClick}>{v}</button>
    );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for( let i=0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}