import { useState } from 'react';
import Chart from "react-google-charts";

async function getData() {
    const url = "http://127.0.0.1:5000/"
    const response = await fetch(url)
    const result = await response.json()
    return result
}


const graphStyle = {
    backgroundColor: 'white'
};

function Graph() {
    const [charged, setCharged] = useState(0);
    const [myData, setMyData] = useState({});
    const [sentiments, setSentiments] = useState([]);
    const [value, setValue] = useState(0);

    async function collect(){
        const url = "http://127.0.0.1:5000/collect/" + value
        fetch(url).then(() =>{
            console.log('response')
        })

    }

    
    function getGraph() {
        getData().then(response => {
            setMyData(response)
            countSentiments(response)
        })

    }

    function countSentiments(myData) {
        let sentiment = [0, 0, 0]
        myData.forEach(element => {
            sentiment[element[0]] += 1
        });
        setSentiments(sentiment)
    }

    if (charged === 0) {
        getGraph()
        setCharged(1)
    }

    console.log(sentiments)
    return (
        <div>
            <div>
                <label>
                    <h2>Número de Tweets que deseja buscar:</h2>
                    <input type="text" value={value} onChange={e =>  setValue(e.target.value)} />
                </label>
                <button onClick={() => collect()}>
                    Update
                </button>
            </div>
            <div style={graphStyle}>
                <div>
                    <div className="">
                        <Chart
                            width={'1000px'}
                            height={'1000px'}
                            chartType="PieChart"
                            loader={<div>Carregando Gráfico</div>}
                            data={[
                                ['Sentimento', 'Tweets'],
                                ['Positivo', sentiments[1]],
                                ['Negativo', sentiments[0]],
                                ['Neutro', sentiments[2]],
                            ]}
                            options={{
                                title: 'Análise Sentimental de tweets sobre o personagem Luffy de One Piece',
                                is3D: true
                            }}
                            rootProps={{ 'data-testid': '2' }}
                        ></Chart>
                    </div>
                </div>
            </div>
        </div>
    )

} export default Graph;
