import "./style.css"

function Btnfirst({ text = "btn", }) {
    return (
        <>
            <button class="btn rel">
                <span class="text">Text</span>
                <span class="flip-front">Front</span>
                <span class="flip-back"><svg fill="#000000" height="50px" width="50px" viewBox="0 0 206.089 206.089" xmlns="http://www.w3.org/2000/svg">
                    <path d="M142.236,166.897l-10.607-10.606l53.247-53.247l-53.247-53.247l10.607-10.606l63.853,63.853L142.236,166.897z
    M163.663,103.044L123.32,62.702H0v80.686h123.32L163.663,103.044z"/>
                </svg></span>
            </button>
        </>
    );
}

export default Btnfirst;