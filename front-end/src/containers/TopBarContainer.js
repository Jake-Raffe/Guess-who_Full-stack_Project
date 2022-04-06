import { useState, useEffect } from "react";
import QuestionForm from "../components/QuestionForm";

const TopBarContainer = ({compareQueryToBoard, displayMessage, resetGame, startGame, playerTurn, chosenCharacter, setQueryOption, setDisplayMessage, makeGuess, setPlayerTurn, runComputerTurn, displayQuestionMessage, setDisplayQuestionMessage, setIsGuessing}) => {


    const[questionColour, setQuestionColour] = useState("grey")

    
    const handleGuessClick = () => {
        setDisplayMessage('Click on a character then make a guess')
        setIsGuessing(true);
    }

    const handleStartClick = () => {
        console.log('starting');
        if (chosenCharacter.name !== ""){
            startGame();
        }
        else {
            alert("Choose a character before you start!")
        }
  
      }
     
      const handleResetClick = () => {
        resetGame();
      }


    // const handleCardClick = () => {
    //     if (computerCharacter.name !== ""){
    //         makeGuess(character);
    //     } else {
    //         choosePlayerCharacter(character);
            
    //     }
    // }

    /*
    const checkEliminated = () => {
        setEliminatedClass('eliminated')
        for (const char of remainingCharacters){
            if (char.name === character.name){
                setEliminatedClass('')
            }
        }
    }
    */ 

    const fontQuestionColour = () => {
        if(playerTurn === "player") {
            setQuestionColour("grey")
        }
        else if (playerTurn === "computer"){
            setQuestionColour("red")
        }
    }

    useEffect(() => fontQuestionColour(), [playerTurn])

    return (
        <div id='questionForm'>
            <section className="questionButtons">
                <QuestionForm compareQueryToBoard={compareQueryToBoard} playerTurn={playerTurn} handleGuessClick={handleGuessClick} setQueryOption={setQueryOption} setDisplayMessage={setDisplayMessage} setPlayerTurn={setPlayerTurn} runComputerTurn={runComputerTurn} setDisplayQuestionMessage={setDisplayQuestionMessage} chosenCharacter={chosenCharacter}/>
                
            </section>
            <section className="displayMessage bubble">
                <h2 >{displayMessage}</h2>
                <h3 className={`questionMessage ${questionColour}`}>{displayQuestionMessage}</h3>
            </section> 
            <section className="gameButtons">
                <button className= "buttons bubble" onClick={handleStartClick}>Start game</button>
                <button className= "buttons bubble" onClick={() => handleResetClick()}>Reset Game</button>
            </section> 
        </div>
        
    )
}

export default TopBarContainer;