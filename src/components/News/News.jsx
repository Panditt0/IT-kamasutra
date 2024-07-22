import React from 'react'
import style from './News.module.css'

function News (props) {
    return(
        <div class = 'content'>
            <h2 className={style.title}> 
                Новости:<br/>
            Уфолог обнаружил на Марсе черную кошку и секретное оружие
            </h2>
            <p className = {style.text}>Имя тайваньского исследователя в области паранормальных явлений Скотта Уоринга всегда гарантирует скандальную новость. Он не разочаровал поклонников, сообщив на своем сайте об обнаружении на снимках Красной планеты черной кошки.</p>
        </div>
    )
}

export default News