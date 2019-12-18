import React from 'react';
import ButtonMedia from './ButtonSocial';

const SocialComponent = () => (
    <div>
        <h2>Social Networks</h2>
        
        <div className="container-buttons">
            <ButtonMedia 
                textButton="FB"
                url="https://www.facebook.com/partnerherocorp"
            />

            <ButtonMedia 
                textButton="IG"
                url="https://www.instagram.com/partnerhero/"
            />

            <ButtonMedia 
                textButton="TW"
                url="https://twitter.com/partnerhero"
            />
        </div>
              
    </div>
);

export default SocialComponent;