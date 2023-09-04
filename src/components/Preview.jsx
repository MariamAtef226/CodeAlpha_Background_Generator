export default function Preview({ type, normalColor, dir, grad }) {

    let style = type == 'normal' ? { backgroundColor: normalColor } : { backgroundImage: `linear-gradient(to ${dir},${grad.c1},${grad.c2})` };

    // a function to copy the resulted rule
    function copier() {
        var copyRule = document.querySelector(".color");
        navigator.clipboard
            .writeText(copyRule.innerText)
            .then(() => {
                alert("Copied the rule successfully!");
            })
            .catch(() => {
                alert("something went wrong");
            });
    }


    return <div className='preview-container text-center' style={style}>

        <div className='color bg-light'>
            {type == 'normal' && " background-color:"+{normalColor}+";"}
            {type == 'gradient' && `background-image:linear-gradient(to ${dir},${grad.c1},${grad.c2});`}
        </div>
        <button className='copy' onClick={copier}>Copy Rule</button>

    </div>
}