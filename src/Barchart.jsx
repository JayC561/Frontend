import React,{useEffect, useRef, useState} from 'react'
import Chart from 'chart.js'
import 'chartjs-plugin-colorschemes';
import Table from './Table'
const Barchart = () =>{
  const canvas = useRef();
  const canvasContainer = useRef();
  const tableButton = useRef();
  const tableContainer = useRef();
  const [fetchedData, setFetchedData] = useState([1,1,2,1,1,1]);
  const [fetchedDataLabels, setLabels] = useState([2009, 2010, 2013, 2014, 2015]);
  const [chart, setChart] = useState('');
  const [text, setText] = useState('');
  const [jsonData, setJsonData] = useState({});
  const [selection, setSelection] = useState(false);
  const [chartType, setChartType] = useState('bar');
  const data = [
    {
      text: 'Matches that were tie',
      path: 'tie'
    },
    {
      text: 'Total matches per year',
      path: 'years'
    },
    {
      text: 'Total matches played in a stadium',
      path: 'venue'
    },
    {
      text: 'Players who were awarded Man of The Match',
      path: 'manofmatch'
    },
    {
      text: 'Matches which were interrupted due to bad weather (DL Applied)',
      path: 'interruption'
    },
    {
      text: 'Total wins per team',
      path: 'winners'
    },
    {
      text: 'Total matches per city',
      path: 'cities'
    }
  ]
const endPoint = '/api/';
const handleClick = ({text,path}) => {
  const elem = document.getElementsByClassName('graph-options')[0];
  if(path === 'interruption'){
    elem.setAttribute('disabled', 'true');
    canvasContainer.current.style.display = 'none';
    fetch(`${endPoint}${path}`)
      .then(res => res.json())
      .then(json =>{
        setJsonData(json);
        setSelection(true);
      })
  }
  else{
    elem.removeAttribute('disabled');
    canvasContainer.current.style.display = 'block';
    setSelection(false);
    fetch(`${endPoint}${path}`)
      .then(res => res.json())
      .then(json =>{
        setText(text);
        setFetchedData(Object.values(json));
        setLabels(Object.keys(json));
      })
  }
}

// const disableOptions = (disable) =>{
//   const elem = document.getElementsByClassName('graph-options')[0];
//   if(disable){
//     elem.setAttribute('disabled', 'true');
//     canvasContainer.current.style.display = 'none';
//   }
//   else{
//     elem.removeAttribute('disabled');
//     canvasContainer.current.style.display = 'block';
//     setSelection(false);
//   }
// }

const changeView = (event) =>{
  const value = event.target.value;
  setChartType(value);
  const chartConfig = {...chart.config};
  chartConfig.type = value;
  chart.destroy();
  setChart(new Chart(canvas.current.getContext('2d'), chartConfig));
}

useEffect(() =>{
  if(chart !== ''){
    chart.destroy();
  }
  setChart(new Chart(canvas.current, {
    type: chartType,
    data: {
      labels: fetchedDataLabels,
      datasets: [
        {
          data: fetchedData
        }
      ]
    },
    options: {
      plugins: {
           colorschemes: {
               scheme: 'brewer.RdYlGn10'
           }
       },
      legend: { display: false },
      title: {
        display: true,
        text: text
      },
      responsive: true
    }
}));
},[fetchedData, fetchedDataLabels])
  return(
    <>
    <div className = "menu">
      <div className = "dropdown menu__child">
        <label>Choose from the options to see the stats: </label>
        <select>
          {
            data.map( dataset =>{
              return <option value = {dataset.text} onClick = {() => {handleClick(dataset)}}>{dataset.text}</option>
            })
          }
        </select>
      </div>

      {
      // <div className = "visual-options menu__child">
      //   <label>Table</label><input ref = {tableButton} type = "radio" value = "table" name = "selection" onClick = {() => {disableOptions(true)}}/>&nbsp;&nbsp;
      //   <label>Graph</label><input type = "radio" value = "graph" name = "selection" onClick = {() => {disableOptions(false)}}/>
      // </div>
      }

      <div className = "menu__child">
        <label>Graph Type: </label>
        <select className = "graph-options">
          <option value = "bar" onClick = {changeView}>Bar</option>
          <option value = "line" onClick = {changeView}>Line</option>
        </select>
      </div>
    </div>
    <div ref = {canvasContainer} style={{width: '600px', height: '800px', position: 'relative', top: '60%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <canvas ref = {canvas} id = "canvas"></canvas>
    </div>
    {
      selection
      ?
      <div id = "table-container" ref = {tableContainer}>
        <Table data = {jsonData} />
      </div>
      :
      null
    }
    </>
  )
}

export default Barchart;
