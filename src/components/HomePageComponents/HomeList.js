import React from 'react';

const HomeList = ({ title, paragraph }) => (
    <div className="item-container">
        <h2 className="title-list">{title}</h2>
        <p className="paragraph-contend">{paragraph}</p>    
    </div>
);

export default HomeList;