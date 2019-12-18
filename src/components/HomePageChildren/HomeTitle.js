import React from 'react';

const HomeTitle = ({ title, subTitle }) => (
    <div className="text-container">
        <h1 className="title-centered">{title}</h1>
        <hr className="lineLanding" />
        <h3 className="title-centered1">{subTitle}</h3>
    </div>
);

export default HomeTitle;