import {useState} from 'react'
import './char.css'

const Char = () =>{
    const [imageUrl, setimageUrl] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png")
    const [shadowUrl, setshadowUrl] = useState("https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png")
    
    return (
    <div className="charContainer">
        <img className='charShadow pixelated' src={shadowUrl} alt="Default Shadow"  />
        <img className='charSpriteSheet pixelated ' alt='Default Sprite' src={imageUrl} />
    </div>
    )
}

export default Char;