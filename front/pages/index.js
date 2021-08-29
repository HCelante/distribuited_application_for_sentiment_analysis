import { useState } from 'react';
import GitHub from './components/github/index';
import Navbar from './components/navbar/index';
import Graph from './components/graph/index';
const homeStyle = {
    backgroundColor: 'grey'
};

function Home(){

    return (
        <div style={homeStyle}>
            <Graph/>
        </div>
    )
}

export default Home;