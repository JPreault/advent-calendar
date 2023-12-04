import disable from '../images/Group 2.png';
import enable from '../images/Group 1.png';
import { useEffect, useState } from 'react';

function Card({ id, placement, selected, onClick, className = '', image, date, children }) {
    const [did, setDid] = useState(null);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('advancement'))) {
            if (Math.floor(Date.now() / 1000) + 3600 > date) {
                setDid(JSON.parse(localStorage.getItem('advancement'))[id - 1])
            }
        }
    }, [JSON.parse(localStorage.getItem('advancement'))])

    return (<div className={`card `} style={{ gridArea: placement, zIndex: 30 - id }} >
        <div className={`cardContent ${className} ${(selected ? ' isFlip' : '')}`} onMouseDown={did !== null ? onClick : null}>
            <div className={`card ${className}`}>
                <img src={image} />
                {did !== null && <img className="state" src={did ? enable : disable} />}
                {children}
            </div>
        </div>
    </div>
    );
}

export default Card;