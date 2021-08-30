import Gallery from './Gallery'
import data from './data';

import React , {useState}from 'react'

function Project() {
    // console.log(data[0]);
    const [team, setTeam] = useState(data[0]);
    // console.log(team.length);
    const randomTeam = () =>{
       var index = Math.floor(Math.random() * (data.length - 0) ) + 0; 
       setTeam(data[index]);
    }




    
    return (
        <div className="container"> 
           <Gallery team = {team}/>
           <div className="wrap">
              <button className="buttonp six" onClick ={randomTeam}>Random Team</button>
           </div>
        </div>
    )
}



export default Project

                 
                  
       
                        
           


    

           
   
            
                     
       
     
                    



