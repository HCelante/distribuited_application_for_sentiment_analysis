import { useState } from 'react';


function NavBar() {
    const [toggled, setToggled] = useState(1);
    const [links, setLinks] = useState([]);
    const [charged, setCharged] = useState(0);

    function clickToggle() {
        setToggled(!toggled);
    }

    function constructorLinks() {

        let values = [
            { name: 'Github', link: 'https://github.com/hcelante' },
            { name: 'Linkedin', link: 'https://linkedin.com/in/hcelante' }
        ]

        setLinks(
            values.map(item => {
                return (
                    <a href={item.link}>{item.name}</a>
                )
            })
        )

    }
    if(charged === 0){
        constructorLinks();
        setCharged(1);
    }
    //<img src='https://avatars1.githubusercontent.com/u/14967963?s=400&u=0dd60c7ff394e3c9efc55c6b86a753760634b68e&v=4' alt="Higor Celante" style={{borderRadius:'300px', maxWidth:'10%'}}/>
    return (
        <div>
        
            {links}
        </div>
    )
} export default NavBar;