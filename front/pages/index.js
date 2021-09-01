import { useState } from 'react';
import NavBar from './components/navbar/index';
import Graph from './components/graph/index';
const homeStyle = {
    backgroundColor: 'white'
};

function Home(){

    return (
        <div style={homeStyle}>
            <Graph/>
        </div>
    )
}

export default Home;