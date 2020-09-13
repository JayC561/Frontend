import React,{useState, useEffect} from 'react';
import './pure.css'
const Table = ({data}) =>{
  return(
      <table className="pure-table">
      <thead>
          <tr>
              <th>Team 1</th>
              <th>Team 2</th>
              <th>Winner</th>
              <th>Venue</th>
              <th>IPL Season</th>
          </tr>
      </thead>
      <tbody>
      {
        data.map((match) =>{
          return(
            <tr>
              <td>{match.team1}</td>
              <td>{match.team2}</td>
              <td>{match.winner}</td>
              <td>{match.venue}</td>
              <td>{match.season}</td>
            </tr>
            )
          })
        }
      </tbody>
  </table>
  )
}

export default Table;
