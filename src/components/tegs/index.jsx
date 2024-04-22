import React from 'react';

const Tegs = ({ teg, children }) => {
    const TagName = teg;
    return (
        <>
            <p className="text-2xl text-[#7b3bfcbf] text-shadow__second">&#60; {teg} &#62;</p>{children}<p className="text-2xl text-[#7b3bfcbf] text-shadow__second">&#60; / {teg} &#62;</p>
        </>
    );
}

export default Tegs;
