import React from 'react';

const LandingPage = () => (
    <div className="containerLanding">
        <div>
            <h1 className="landingTitle">GITHUB<br/>PROF<span className="LandingTitle1">ILE</span></h1>
            <hr className="lineLanding"/>
            <p className="descriptionLanding">GitHub is a Git repository hosting service, but it adds many of its own features. <br />While Git is a command line tool, GitHub provides a Web-based graphical interface.</p>    
        </div>
        <div className="bottom">
            <p>Sponsors</p>
            <div className="buttoms">
                <div className="btn">
                    <button className="btnSocial"><a href="https://www.facebook.com/partnerherocorp">FB</a></button>
                    <p>Facebook</p>
                </div>  
                <div className="btn">
                    <button className="btnSocial"> <a href="https://www.instagram.com/partnerhero/">IG</a></button>
                    <p>Instagram</p>
                </div>   
            </div>
        </div>        
    </div>
    
    
)

export default LandingPage;
