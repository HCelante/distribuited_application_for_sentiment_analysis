import { useState } from 'react';

async function getData() {
    const url = "http://127.0.0.1:5000/"
    const response = await fetch(url)
    console.log(response)
    const result = await response.json()
    return result
}


const graphStyle = {
    backgroundColor: 'white'
};

function Graph() {
    const [charged, setCharged] = useState(0);
    const [myData, setMyData] = useState({});

    function getGraph() {
        getData().then(response => {
            setMyData(response)
        })
    }

    if (charged === 0) {
        getGraph()
        setCharged(1)
    }

    return (
        <div style={graphStyle}>
            <div>
                aaaaaaaaaaaaaaaa
            </div>
        </div>
    )

} export default Graph;
