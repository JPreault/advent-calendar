import draw1 from "../draw/3.jpg"
import draw3 from "../draw/dessin.png"

function ReturnDraw({id}) {
    function chooseDraw(day) {
        switch (day) {
            case 1:
                return <img src={draw1} className="draw"/>  
            case 3:
                return <img src={draw3} className="draw"/>  
            case 5:
                return <img src={draw1} className="draw"/>  
            case 7:
                return <img src={draw3} className="draw"/>  
            case 9:
                return <img src={draw1} className="draw"/>  
            case 11:
                return <img src={draw3} className="draw"/>  
            case 13:
                return <img src={draw1} className="draw"/>  
            case 15:
                return <img src={draw3} className="draw"/>  
            case 17:
                return <img src={draw1} className="draw"/>  
            case 19:
                return <img src={draw3} className="draw"/>  
            case 21:
                return <img src={draw1} className="draw"/>  
            case 23:
                return <img src={draw1} className="draw"/>  
            case 25:
                return <img src={draw1} className="draw"/>
        }
    }

    return <>
        {chooseDraw(id)}
    </>
}

export default ReturnDraw;