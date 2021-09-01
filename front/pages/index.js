import { useState } from 'react';
import NavBar from './components/navbar/index';
import Graph from './components/graph/index';
const homeStyle = {
    backgroundColor: 'grey'
};

function Home(){

    return (
        <div style={homeStyle}>
            <Graph/>
            <NavBar/>
        </div>
    )
}

export default Home;