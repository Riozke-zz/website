import React  from 'react';
import { useState, useEffect } from 'react';
import { Card, Image, Icon, Form } from 'semantic-ui-react';
// Components Imports
import TitlePage from '../components/SerchProfileChildren/title';

function SearchProfilePage() {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(null);
    
    /**
     * When the page load this effect going to show an example
     * from the information that we see in the interfaz
     * only going to load one time and the information that contain
     * is from the example of the API github
     */
    useEffect(() => {
            fetch("https://api.github.com/users/example")
                .then(res => res.json())
                .then(data => {
                    // with this console we can see the information in our browsers console
                    console.log(data);
                    setData(data)
                });
    }, []);

    /**We Obtain the information from API github json 
     * const setData =( { null, example, 12, 0, 1, ProfilePhoto }) => {
     *  setName(null);
     *  setUserName(example);
     *  setFollowers(12);
     *  setFollowing(0);
     *  setRepos(1);
     *  setAvatar(ProfilePhoto);
     * }
     */
    const setData = ({ name, login, followers, following, public_repos, avatar_url }) => {
        setName(name);
        setUserName(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
    };

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setError(data.message)
                } else {
                    setData(data);
                }                
            })
    }

    return (
        <div>
            <div >
                <TitlePage />  
            </div>
            
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Input 
                            placeholder='User' 
                            name='user' onChange={handleSearch}
                        />
                        <Form.Button content='Search'/>
                    </Form.Group>
                </Form>
            </div>
                {error ? (<h1>{error}</h1>) : (
            <div className='card'>
                <Card>
                <Image src={avatar} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{name}</Card.Header> 
                    <Card.Header>{userName}</Card.Header>                   
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {followers} Followers
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {repos} Repos
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {following} Following
                    </a>
                </Card.Content>
                </Card>
            </div>
            )}     
        </div>
    )
}

 export default SearchProfilePage;