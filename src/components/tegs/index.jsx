import React from 'react';

const Tegs = ({ teg, children }) => {
    const TagName = teg;
    return (
        <TagName>{children}</TagName>
    );
}

export default Tegs;
