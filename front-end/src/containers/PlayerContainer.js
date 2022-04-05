import ChosenCharacter from "../components/ChosenCharacter";
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
        <article className='player-container bubble' id='chosen-character'>
          <ChosenCharacter  chosenCharacter={chosenCharacter} />  
        </article>
        <article className='bubble miniBoardContainer'>
        <MiniBoard characterList={characterList} remainingComputerCharacters={remainingComputerCharacters}/>
        </article>
    </section>
    </>
    );

}
export default PlayerContainer;