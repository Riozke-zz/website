import React from 'react';
import HomeTitle from './HomePageComponents/HomeTitle';
import HomeList from './HomePageComponents/HomeList';

const HomePage = () => (
    <div>
        <div>
            <HomeTitle 
                title="GitHub Profile Search" 
                subTitle="More than just another profile finder."
            />            
        </div>
        <div>
            <div className="list-item-div">
                <HomeList
                    title="What is Git?"
                    paragraph="Git is an open-source version control system that was started by Linus Torvalds—the same person who created Linux."
                />
            </div>
            <div className="list-item-div">
                <HomeList
                    title="What is GitHub?"
                    paragraph="GitHub is a for-profit company that offers a cloud-based Git repository hosting service. Essentially, it makes it a lot easier for individuals and teams to use Git for version control and collaboration."
                />
            </div>
            <div className="list-item-div">
                <HomeList
                    title="What are the benefits of GitHub?"
                    paragraph="GitHub, can be divided into the Git, and the Hub. The service includes access controls as well as a number of collaboration features like tools for basic task management and for all projects you handle. "
                />
            </div>
        </div>        
    </div>    
);

export default HomePage;