import { numberToLetter } from "../function/function";
import Card from "./Card";
import pic0 from "../images/c1.png"
import pic1 from "../images/c2.png"
import pic2 from "../images/c3.png"
import pic3 from "../images/c4.png"
import pic4 from "../images/c5.png"
import pic25 from "../images/c6.png"

function Calendar ({selected, setSelected }){

  function renderPic(id) {
    if(id === 25) {
      return pic25;
    }
    switch(id%5){
      case 0:
        return pic0;
      case 1:
        return pic1;
      case 2:
        return pic2;
      case 3:
        return pic3;
      case 4:
        return pic4;
    }
  }

  const renderList = () => {
      const listItems = [];
      for (let i = 1; i <= 25; i++) {
        listItems.push(
          <Card
            key={i}
            id={i}
            className={(i === 25 ? 'last' : '')}
            placement={numberToLetter(i)}
            selected={i === selected}
            onClick={() => setSelected(i)}
            image={renderPic(i)}
            date={1701302400 + i * 86400}
          >
            <p>{i}</p>
          </Card>);
      }
      return listItems;
    };

  return(
      <div className="calendar">
          <>{renderList()}</>
      </div>
  );
}

export default Calendar;