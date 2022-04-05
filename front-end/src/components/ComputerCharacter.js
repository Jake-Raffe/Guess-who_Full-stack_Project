const ComputerCharacter = ({}) => {
    
    const imgSource = '../images/colin.png'

    return(
        <div className="colin-container">
            <img className="colin_image" src={imgSource} alt="not found"/>
            <h4>Your opponent: Colin</h4> 
        </div>  

    )
}
export default ComputerCharacter;