import React from "react";
import audio from '../../assets/music/example.mp3'

function Music(props) {
    return (
        <div class='content'>
            <h2>Моя музыка:</h2>

            <audio controls> 
                <source src={audio} type = 'audio/mp3' />
            </audio>
        </div>
    )
}

export default Music