import draw1 from "../draw/albator.png"
import draw2 from "../draw/fairytail1.png"
import draw3 from "../draw/snk2.png"
import draw4 from "../draw/tokyorevenger1.png"
import draw5 from "../draw/seiya1.png"
import draw6 from "../draw/snk1.png"
import draw7 from "../draw/mha1.png"
import draw8 from "../draw/nana1.png"

function ReturnDraw({ id }) {
    function chooseDraw(day) {
        switch (day) {
            case 1:
                return <img src={draw1} className="draw" />
            case 3:
                return <img src={draw2} className="draw" />
            case 5:
                return <img src={draw3} className="draw" />
            case 7:
                return <img src={draw4} className="draw" />
            case 9:
                return <img src={draw5} className="draw" />
            case 11:
                return <img src={draw6} className="draw" />
            case 13:
                return <img src={draw7} className="draw" />
            case 15:
                return <img src={draw8} className="draw" />
            case 17:
                return <p className="commingSoon">Encore en cours mais tu le recevra dès qu'il sera finit...</p>
            case 19:
                return <p className="commingSoon">Encore en cours mais tu le recevra dès qu'il sera finit...</p>
            case 21:
                return <p className="commingSoon">Encore en cours mais tu le recevra dès qu'il sera finit...</p>
            case 23:
                return <p className="commingSoon">Encore en cours mais tu le recevra dès qu'il sera finit...</p>
            case 25:
                return <p className="commingSoon">Encore en cours mais tu le recevra dès qu'il sera finit...</p>
            default:
                return <p className="commingSoon">Encore en cours mais tu le recevra dès qu'il sera finit...</p>
        }
    }

    return <>
        {chooseDraw(id)}
    </>
}

export default ReturnDraw;