import React from 'react';

const Tegs = ({ teg, children, row }) => {
    const TagName = teg;
    return (
        <>
            <p className="text-2xl w-28 text-[#7b3bfcbf] text-shadow__second">&#60; {teg} &#62;</p><p className={`${row ? "pl-10" : ""}`}>{children}</p><p className="text-2xl w-36 text-[#7b3bfcbf] text-shadow__second">&#60; / {teg} &#62;</p>
        </>
    );
}

export default Tegs;
