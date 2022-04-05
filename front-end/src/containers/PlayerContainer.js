import ChosenCharacter from "../components/ChosenCharacter";
import PlayerSection from "../components/PlayerSection";
import QuestionForm from "../components/QuestionForm";
import CharacterCard from "../components/CharacterCard";
import MiniBoard from "../components/MiniBoard";


const PlayerContainer = ({characterList, character, queryCharacters, choosePlayerCharacter, chosenCharacter, setQueryOption, remainingComputerCharacters}) => {
    
    
    
    // const chosenCharacterMap = () => characterList.map(char => {
    //     if (char.id === chosenCharacter.id){
    //     return <CharacterCard className="containerItems" character={character} key={character.id}/>
    //     }
    // })

    // const characterMap = characterList.map((character, index) => {
    //     return <CharacterCard id={index} className="containerItems" character={character} key={character.id} choosePlayerCharacter={choosePlayerCharacter} computerCharacter={computerCharacter}/>
    // })
    
   

    

    return (
    <>
    <section className='player-section' >
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