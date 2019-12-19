import React from 'react';
import LandingButton from './LandingButtons';

const LandingPage = () => (
    <div className="container-landing">
        <div>
            <h1 className="landing-title">GITHUB<br/>PROF<span className="landing-title-one">ILE</span></h1>
            <hr className="line-landing"/>
            <p className="description-landing">GitHub is a Git repository hosting service, but it adds many of its own features. <br />While Git is a command line tool, GitHub provides a Web-based graphical interface.</p>    
        </div>
        <div className="bottom">
            <p>Sponsors</p>
            <div className="buttoms">
                <div className="btn">
                    <LandingButton
                        title="FB"
                        url="https://www.facebook.com/partnerherocorp"
                    />
                    <p>Facebook</p>
                </div>  
                <div className="btn">
                    <LandingButton
                        title="IG"
                        url="https://www.instagram.com/partnerhero/"
                    />
                    <p>Instagram</p>
                </div>   
            </div>
        </div>        
    </div>     
)

export default LandingPage;
