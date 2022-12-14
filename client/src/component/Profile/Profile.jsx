import React from 'react'

export default function Profile() {

  return (
    <section className='main'>
        <div className='top-panel'>
            <h2></h2>
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
  )
}
