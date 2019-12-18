import React from 'react';
import SocialComponent from './HelPageComponents/SocialMedia';
import HomeTitle from './HomePageChildren/HomeTitle';

const HelpPage = () => (
    <div >
        <HomeTitle 
            title="Our Social Networks" 
            subTitle="More than just another profile finder."
        />
        <SocialComponent className="social-network-title"/>
    </div>
);

export default HelpPage;