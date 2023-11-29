import { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import background from "../images/background.png"
import Modal from "../components/Modal";
import DrawModal from "../components/DrawModal";
import ComplimentModal from "../components/ComplimentModal";

function App (){
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if(localStorage.getItem('advancement') === null){
      localStorage.setItem('advancement', JSON.stringify([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]));
    }
  }, [])
  
  return(<div className="app">
    <img src={background} className="background"/>
    <div className="content">
      <Calendar selected={selected} setSelected={setSelected}/>
      {selected && <Modal close={() => setSelected(null)}>
        {selected % 2 === 0
          ? <ComplimentModal id={selected}/>
          : <DrawModal id={selected}/>
        }
      </Modal>}
    </div>
  </div>);
}

export default App;