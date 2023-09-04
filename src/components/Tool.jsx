import { useState } from "react"

export default function Tool({ type, normalColor, handleType, handleColor }) {

    return (
        <>
            <div className='tool-container'>
                <div className='shadower'>
                    <div className="content text-center">
                        <div className="intro">
                            <h1>Background Generator</h1>
                            <p>Generate a background based on your favourite colors in a simple way!</p>
                        </div>
                        <div className="tool">

                            <h4 className="text-start">Select background type:</h4>

                            <div className="d-flex radios justify-content-evenly">
                                <div className="m-2">
                                    <input className='me-3' type='radio' id='normal' name='type' value='normal' checked={type == 'normal'} onChange={handleType} />
                                    <label htmlFor='normal'>Normal</label>
                                </div>
                                <div className="m-2">
                                    <input className='me-3' type='radio' id='gradient' name='type' value='gradient' checked={type == 'gradient'} onChange={handleType} />
                                    <label htmlFor='gradient'>Gradient</label>
                                </div>
                            </div>

                            {type == 'normal' && (<>
                                <div className="d-flex align-items-center mt-4">
                                    <h4 className="me-3">Select Color:</h4>
                                    <input type='color' name='normal-color' value={normalColor} onChange={handleColor} />
                                </div>
                            </>
                            )}
                        </div>
                    </div>
                </div>

            </div></>
    )
}