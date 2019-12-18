import React from 'react';

const ButtonSocial = ({ textButton, url }) => (    
        <button className="social-networks-button">
            <a href={url}>{textButton}</a>
        </button>    
);

export default ButtonSocial;