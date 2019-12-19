import React  from 'react';
import { useState, useEffect } from 'react';
import { Form, Card, Image, Icon} from 'semantic-ui-react';
import TitlePage from '../components/SearchProfileComponents/Title';

function SearchProfilePage() {
    let [name, setName] = useState('');
    let [userName, setUserName] = useState('');
    let [followers, setFollowers] = useState('');
    let [following, setFollowing] = useState('');
    let [repos, setRepos] = useState('');
    let [avatar, setAvatar] = useState('');
    let [userInput, setUserInput] = useState('');
    let [error, setError] = useState(null);
    
    /**
     * When the page load this effect going to show an example
     * only going to load one time and the information that contain
     * is from the example of the API github
     */
    useEffect(() => {
            fetch("https://api.github.com/users/example")
                .then(res => res.json())
                .then(data => {
                    // with this console.log we can see the information in our browsers console
                    console.log(data);
                    setData(data)
                });
    }, []);

    /**We get the information from the API github json 
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

    /**
     * If the username doesn't exists "error message"
     * if exists render the profile
     * and setError(null)
     */
    const handleSubmit = () => {
        fetch(`https://api.github.com/users/${userInput}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setError(data.message)
                } else {
                    setData(data);
                    setError(null);
                }                
            })
    }
    return (
        <div>
            <div >
                <TitlePage 
                    title="Search Profile"
                />  
            </div>
                <div className="search" >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Input
                                className="inputUser" 
                                placeholder='User Name' 
                                name='user' onChange={handleSearch}
                            />
                            <Form.Button 
                                className="buttonSearch"
                                content='Search'
                            />                        
                        </Form.Group>
                    </Form>
                </div>
            <div>
            {error ? (<h1>{error}</h1>) : (
                <div className='card'>
                    <Card className="avatarImage">
                        <Image src={avatar} wrapped ui={false} />                    
                        <Card.Content>
                        <Card.Header>Name: {name}</Card.Header> 
                        <Card.Header>User: {userName}</Card.Header>                   
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
         </div>
    )
}

 export default SearchProfilePage;