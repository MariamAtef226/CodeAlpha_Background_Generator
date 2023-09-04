import Normal from "./Normal"
import Gradient from "./Gradient"


export default function Tool({ type, normalColor, handleType, handleColor, grad, handleGradient, direction, handleDirection }) {

    return (
        <>
            <div className='tool-container'>
                <div className='shadower'>
                    <div className="content text-center">

                        <div className="intro">
                            <h1>Background Generator</h1>
                            <p>Generate a your fav colors as backgrounds in a simple way!</p>
                        </div>

                        <div className="tool">
                            
                            {/*type change*/}
                            <h5 className="text-start">Select background type:</h5>
                            <div className="d-flex type-radios justify-content-evenly">
                                <div className="m-2">
                                    <input className='me-3' type='radio' id='normal' name='type' value='normal' checked={type == 'normal'} onChange={handleType} />
                                    <label htmlFor='normal'>Normal</label>
                                </div>
                                <div className="m-2">
                                    <input className='me-3' type='radio' id='gradient' name='type' value='gradient' checked={type == 'gradient'} onChange={handleType} />
                                    <label htmlFor='gradient'>Gradient</label>
                                </div>
                            </div>

                            {/*Normal mode*/}
                            {type == 'normal' && <Normal normalColor={normalColor} handleColor={handleColor} />}

                            {/*Gradient mode*/}
                            {type == 'gradient' && <Gradient direction={direction} grad={grad} handleDirection={handleDirection} handleGradient={handleGradient} />}

                        </div>
                    </div>
                </div>

            </div></>
    )
}