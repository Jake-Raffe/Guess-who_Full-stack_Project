
import ComputerCharacter from '../components/ComputerCharacter';
import PlayerSection from "../components/PlayerSection";
import QuestionForm from "../components/QuestionForm";
import CharacterCard from "../components/CharacterCard";
import MiniBoard from "../components/MiniBoard";


const PlayerContainer = ({characterList, character, resetGame, startGame, queryCharacters, choosePlayerCharacter, chosenCharacter, setQueryOption, remainingComputerCharacters}) => {
    
    
    
    
    // const handleStartClick = () => {
    //   if (chosenCharacter.name !== ""){
    //       startGame();
    //   }
    //   else {
    //       alert("Choose a character before you start!")
    //   }
    // }
   
    // const handleResetClick = () => {
    //   resetGame();
    // }
    

    return (
    <>
    <section className='player-section' >


        {/*
        <div className='output-card font'>
                <h4>Your chosen character:</h4>
                <img className="chosen-image" src={imgsrc} alt="not found"></img>
                <h3>{chosenCharacter.name}</h3>
            </div>
      */}
       
          <ComputerCharacter/>
        
        <article className='bubble '>
        <div className='miniBoardContainer '>
        <h2 className='opponent-font' >Opponent board:</h2>
        <div className='miniBoardGrid'>
        <MiniBoard characterList={characterList} remainingComputerCharacters={remainingComputerCharacters}/>
        </div>
        </div>
        </article>
    </section>
    </>
    );

}
export default PlayerContainer;

        {/* <article className="gameButtons">
          <button className= "buttons bubble" onClick={() => handleStartClick()}>Start game</button>
            <button className= "buttons bubble" onClick={() => handleResetClick()}>Reset Game</button>
        </article> */}