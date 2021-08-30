import React, {useState} from 'react';
import AllPlayer from './content/AllPlayer';


function RandomPlayer() {
    const [player, setPlayer] = useState(AllPlayer[0]);
    const [isShown, setIsShown] = useState(false);
    const randomPlayer = () => {
        var index = Math.floor(Math.random() * (AllPlayer.length - 0) ) + 0 ;
        console.log(index);
        setPlayer(AllPlayer[index]);
        console.log(player);
    } 
    const Hello = () =>{
        console.log("hellworld");
    }

    return (
        <main>
           <section className="container">
           <div className="image">
                <img src={player['imageUrl']} alt={player['playerName']}/> 
            </div>
            <div className="name">
                <h4>{player['playerName']}</h4>
            </div>
            <div className="score">
                <h5>Highest Score</h5> 
                <h5>{player['highestScore']}</h5>
            </div>
            <div className="fifty">
                <h5>50</h5>
                <h5>{player['50']}</h5>
            </div>
            <div className="hundread">
                <h5>100</h5>
                <h5>{player['100']}</h5>
            </div>
            <div className="total">
                <h5>Total Runs</h5>
                <h5>{player['totalRun']}</h5>
            </div>
            <div className="wrap">
                <button className="buttonp six"
                title="ToolTip displayed using Title property"
                 onMouseEnter={() => setIsShown(true)} 
                 onMouseLeave={() => setIsShown(false)}
                 onClick={randomPlayer}>
                    Random Player
                    </button>
                    {/* {
                        isShown && (
                            <div>click here for random player</div>
                        )
                    } */}
            </div> 
           </section>
        </main>
    )
}

export default RandomPlayer
