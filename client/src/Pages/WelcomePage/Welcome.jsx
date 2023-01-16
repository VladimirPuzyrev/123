import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NewsGet } from '../../actions/news.js';
import AddNewsModal from '../../component/AddNewsModal/AddNewsModal.jsx';
import { NewsBlock } from '../../component/NewsBlock/NewsBlock.jsx';
import { Server } from '../../component/Servers/Server/Server.jsx';
import './Welcome.scss'


function Welcome(){
    const isAuth = useSelector(state => state.user.isAuth)
    const role = useSelector(state => state.user.currentUser.role)
    const [addOpen, setAddOpen] = useState(false);
    const dispatch = useDispatch()

    const news = useSelector(state => state.news.news).map(news => <NewsBlock title={news.title} text={news.text} autor={news.autor}/>)
    useEffect(() => {
        dispatch(NewsGet())
    }, [])


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
                <h1 className='nnn'>News</h1>
                <ul>
                    {news}
                </ul>

                {(isAuth && role == 'admin') && 
                    <a onClick={() => setAddOpen(true)} className='add'>Add News</a>
                }
                {addOpen && <AddNewsModal setAddOpen={setAddOpen} />}
            </section>

            <footer>
                <a href="https://t.me/Puzyrev2003" ><img alt='tg' src='svg/Telegram_Logo.svg' width='3%'/>Telegram</a>
                <span>&copy; Best of the Best </span>
            </footer>

        </div>

    )
}

export default Welcome;