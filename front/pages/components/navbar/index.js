import { useState } from 'react';


function NavBar() {
    const [charged, setCharged] = useState(0);
    const [toggled, setToggled] = useState(1);
    const [links, setLinks] = useState([]);

    function clickToggle() {
        setToggled(!toggled);
    }



    function constructorLinks() {

        let values = [
            { name: 'Github', link: 'https://github.com/hcelante' },
            { name: 'Linkedin', link: 'https://linkedin.com/in/hcelante' },
            { name: 'Github', link: 'https://github.com/wesff' },
            { name: 'Linkedin', link: 'https://www.linkedin.com/in/wesley-franco-ferreira-28105214a/' }
        ]

        setLinks(
            values.map(item => {
                return (
                    <a href={item.link}>{item.name}</a>
                )
            })
        )

    }

    if (charged === 0) {
        constructorLinks()
        setCharged(1)
    }

    return (
        <div>
            {links}
        </div>
    )
} export default NavBar;