const ComputerCharacter = ({}) => {
    
    const imgSource = '../images/colin.png'

    return(
        <div className="colin-container">
            <h4 className="font">Your opponent: Colin</h4> 
            <img className="colin_image" src={imgSource} alt="not found"/>
            
        </div>  

    )
}
export default ComputerCharacter;