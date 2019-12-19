import React from 'react'

const LandingButton = ( { title, url }) => (
    <button className="btn-social"><a href={url}>{title}</a></button>
);

export default LandingButton;