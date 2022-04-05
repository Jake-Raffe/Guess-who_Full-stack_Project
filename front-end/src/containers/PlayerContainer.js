
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
        {/* <article className="gameButtons">
          <button className= "buttons bubble" onClick={() => handleStartClick()}>Start game</button>
            <button className= "buttons bubble" onClick={() => handleResetClick()}>Reset Game</button>
        </article> */}
       
          <ComputerCharacter/>
        
        <article className='bubble '>
        <h3>Opponent board:</h3>
        <div className='miniBoardContainer'>
        <MiniBoard characterList={characterList} remainingComputerCharacters={remainingComputerCharacters}/>
        </div>
        </article>
    </section>
    </>
    );

}
export default PlayerContainer;