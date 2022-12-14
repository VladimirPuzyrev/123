import React from 'react'
import {Login} from '../../component/Component.js';
import './Welcome.scss'


function Welcome(){



    return(
        <div className='page'>
            <section className='about'>
                <div className='what-beup'>
                    <ul>
                        <li>BeUp - мессенджер для компаний и учебных заведений</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className='why-beup'>
                    <ul>
                        <li>Простой и понятный интерфейс</li>
                        <li>Сервера, которые позволяют настроить внутреннюю систему для общения</li>
                        <li>Отсутсвие не нужных функций замендляющих работу</li>
                    </ul>
                </div>
            </section>

            <section className='news'>
                <h1>News</h1>
                
            </section>

            <footer>
                <a href="#" ><img alt='tg' src='./Telegram_Logo.svg' width='3%'/>Telegram</a>
                <span>&copy; Best of the Best </span>
            </footer>

        </div>

    )
}

export default Welcome;