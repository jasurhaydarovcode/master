import React from 'react';
import { useColor } from '../../provider/color';

const Tegs = ({ teg, children, row }) => {
    const { textColor } = useColor();
    return (
        <>
            <p className={`text-2xl w-28 dynamic-style text-shadow__second`}>&#60; {teg} &#62;</p><p className={`${row ? "md:pl-10 pl-2" : ""}`}>{children}</p><p className={`text-2xl w-36 dynamic-style text-shadow__second`}>&#60; / {teg} &#62;</p>
        </>
    );
}

export default Tegs;
