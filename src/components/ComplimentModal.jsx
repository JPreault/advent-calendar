import { useState } from "react";
import check from "../images/check.svg";
import answers from '../answer.json';
import questions from '../question.json';
import compliments from '../compliment.json';

function ComplimentModal ({id}) {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [win, setWin] = useState(JSON.parse(localStorage.getItem('advancement'))[id - 1]);

    const onChange = (event) => {
        setValue(event.target.value);
    };

    function submit() {
        const answer = value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const goodAnswer =  (answers[id]).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if(answer === goodAnswer){
            setError(false);
            const advancement = JSON.parse(localStorage.getItem('advancement'));
            advancement[id - 1] = true;
            localStorage.setItem('advancement', JSON.stringify(advancement));
            setWin(true);
        } else {
            setError(true);
        }
    }

    return (win
        ? <p>{compliments[id]}</p>
        : <>
            <p className="title">Compliment du jour</p>
            <p className="description">Trouve la réponse pour découvrir ce que je pense de toi :</p>
            <p className="sentence">{questions[id]}</p>
            <div className={"inputField" + (error ? ' error' : '')}>
                <input className="answer" placeholder="Réponse " value={value} onChange={onChange}></input>
                <img src={check} className="submit" onClick={submit}/>
            </div>
        </>
    );
}

export default ComplimentModal;