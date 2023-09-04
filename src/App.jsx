import Tool from "./components/Tool"
import Preview from "./components/Preview"
import { useState } from "react";

function App() {
  let [type, setType] = useState('normal');
  let [normalColor, setNormalColor] = useState('#ffffff');

  function handleType(event) {
    let value = event.target.value;
    setType(value);
  }
  function handleColor(event) {
    let value = event.target.value;
    setNormalColor(value);
  }
  return (
    <>
      <div className="d-flex">
        <Tool type={type} normalColor={normalColor} handleType={handleType} handleColor={handleColor} />
        <Preview type={type} normalColor={normalColor} />
      </div>
    </>
  )
}

export default App
