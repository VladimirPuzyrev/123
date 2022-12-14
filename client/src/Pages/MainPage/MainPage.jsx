import React from 'react'
import { Servers, Chats } from '../../component/Component';
import { ProfilePage } from '../Pages';
import './Main.scss'


function MainPage(){

    
    return(
        <div className='main-page'>

            <Servers />
            <Chats />

            <section className='main'>
                <div className='top-panel'>
                    <h2>Chats Name</h2>
                </div>

                <div className='messages-fill'>

                </div>

                <div className='messages-field'>
                    <input type='file' id='add-file'/>
                    <label class='add-label'for='add-file'>
                        <img alt='add file' src='./svg/Add.svg'></img>
                    </label>
                    <input type='text' id='messages-input' />
                    {/* Smile and stickers*/}
                </div>
            </section>

            <section className='people'>
                <h2>Text</h2>

                <div>
                    <ul>
                        
                    </ul>
                </div>
            </section>

            
        </div>

    )
}

export default MainPage;