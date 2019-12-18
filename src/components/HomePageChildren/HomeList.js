import React from 'react';

const HomeList = ({ title, paragraph}) => (
    <div className="itemContainer">
        <h2 className="titleList">{title}</h2>
        <p className="paragraphContend">{paragraph}</p>    
    </div>
);

export default HomeList;