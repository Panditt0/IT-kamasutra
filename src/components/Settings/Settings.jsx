import React from "react";
import style from './Settings.module.css'
import './Settings.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faVolumeUp, faMoon, faUser, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

function Settings (props) {
    return (
        <div className={`${style.settingsMenu}`}>
            <h1>Настройки</h1>
            <ul>
                <li><FontAwesomeIcon icon={faWifi} /> Wi-Fi</li>
                <li><FontAwesomeIcon icon={faVolumeUp} /> Звук</li>
                <li><FontAwesomeIcon icon={faMoon} /> Темный режим</li>
                <li><FontAwesomeIcon icon={faUser} /> Аккаунт</li>
                <li><FontAwesomeIcon icon={faShieldAlt} /> Конфиденциальность</li>
            </ul>
        </div>
    )
}

export default Settings