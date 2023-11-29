import { useState } from "react";
import Calendar from "../components/Calendar";
import Hint from "../components/Hint";
import background from "../images/background.png"

function App (){
  const [selected, setSelected] = useState(null);
  return(<div className="app">
    <img src={background} className="background"/>
    <Calendar selected={selected} setSelected={setSelected}/>
    <Hint selected={selected} setSelected={setSelected}/>
  </div>);
}

export default App;