export default function Preview({ type, normalColor }) {

    return <div className='preview-container' style={{ backgroundColor: normalColor }}>
        {type == 'normal' && <div className='color bg-light'> background-color:{normalColor};  </div>}


    </div>
}