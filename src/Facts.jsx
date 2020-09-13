import React,{useEffect, useState} from 'react';

const Facts = () =>{
  const [facts, setFacts] = useState([]);
  useEffect(() =>{
    fetch('/api/facts')
      .then(res => res.json())
      .then(({facts}) => {setFacts(facts)});
  },[])
  return(
    <div style = {{width: '80%', padding: '5em 2%', margin: '0 auto'}}>
      {
      facts.map((fact, index) => <em><h3 key = {fact}>{index + 1}. {fact}</h3></em>)
      }
    </div>
  )
}

export default Facts;
