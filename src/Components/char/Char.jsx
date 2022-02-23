import {useState} from 'react'
import './char.css'

const Char = () =>{
    const [imageUrl, setimageUrl] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png")
    
    return (
    <div className="charContainer">
        <img className='charSpriteSheet pixelated' src={imageUrl} />
    </div>
    )
}

export default Char;