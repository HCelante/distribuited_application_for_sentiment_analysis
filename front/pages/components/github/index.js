import { useState } from 'react';

async function getUser() {
    const url = "https://api.github.com/users/hcelante"
    const response = await fetch(url)
    const result = await response.json()
    return result
}

const githubStyle = {
    backgroundColor: 'white'
};

const avatarStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    position: 'relative',
    //animationName: K,
    animationDuration: '4s'
};





function GitHub() {
    const [charged, setCharged] = useState(0);
    const [myGit, setMyGit] = useState({});





    function getGit() {
        getUser().then(response => {
            setMyGit(response)
        })
    }

    if (charged === 0) {
        getGit()
        setCharged(1)
    }

    return (
        <div style={githubStyle}>
            <img className={'shape-2'} src={myGit.avatar_url ? myGit.avatar_url : ""} alt="Higor Celante" style={{ borderRadius: '300px', maxWidth: '10%' }} />
        </div>
    )

} export default GitHub;
