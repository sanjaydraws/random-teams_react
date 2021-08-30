import React from 'react'
import Exp from './Exp'

function Gallery({team}) {
    return (
     
           <div className="galleries">
           {
               team.map((player)=>{
                   return  <div key = {player.id} className="gallery">
                             <img src={player.imageUrl} alt={player.playerName} />
                             <h4>{player.playerName}</h4>
                             <h5>{player.type}</h5>
                             </div>
               })
           }
         </div> 
    )
}


export default Gallery

