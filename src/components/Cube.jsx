function Cube ({id, placement, className, selected, onClick}) {

    return (
        <div
            className={"cube " + className + (selected ? ' selected': '')} 
            style={{gridArea: placement, zIndex: 30 - id}}
        >
            <div className="cube__face cube__face--front" onClick={() => onClick(id)} onTouchStart={() => onClick(id)}>{id}</div>
            <div className="cube__face cube__face--back" onClick={() => onClick(null)} onTouchStart={() => onClick(null)}></div>
            <div className="cube__face cube__face--right"></div>
            <div className="cube__face cube__face--left"></div>
            <div className="cube__face cube__face--top"></div>
            <div className="cube__face cube__face--bottom"></div>
        </div>
    );
}

export default Cube;