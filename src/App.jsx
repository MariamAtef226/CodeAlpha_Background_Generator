import Tool from "./components/Tool"
import Preview from "./components/Preview"
import { useState } from "react";

function App() {
  let [type, setType] = useState('normal');
  let [normalColor, setNormalColor] = useState('#ffffff');
  let [grad, setGrad] = useState({ c1: '#ffffff', c2: '#ffffff' });
  let [direction, setDirection] = useState('left')


  // event handler functions
  function handleType(event) {
    let value = event.target.value;
    setType(value);
  }

  function handleColor(event) {
    let value = event.target.value;
    setNormalColor(value);
  }

  function handleDirection(event) {
    let value = event.target.value;
    setDirection(value);
  }

  function handleGradient(event) {
    let value = event.target.value;
    let name = event.target.name;
    if (name == 'color1') {
      setGrad((prev) => ({ ...prev, c1: value }));
    }
    else {
      setGrad((prev) => ({ ...prev, c2: value }));

    }
  }

  return (
    <>
      <div className="d-flex flex-column flex-md-row" style={type == 'normal' ? { backgroundColor: normalColor } : { backgroundImage: `linear-gradient(to ${direction},${grad.c1},${grad.c2})` }}>
        <Tool type={type} normalColor={normalColor} handleType={handleType} handleColor={handleColor} handleDirection={handleDirection} direction={direction} grad={grad} handleGradient={handleGradient} />
        <Preview type={type} normalColor={normalColor} grad={grad} dir={direction} />
      </div>
    </>
  )
}

export default App
