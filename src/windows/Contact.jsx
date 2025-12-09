import React from 'react'
import { socials } from '../constants'
import WindowControls from '../components/WindowControls'

const Contact = () => {
    return (
        <div id='contact'>

            <div id='window-header'>
                <WindowControls target='contact' />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img src='/images/adrian.jpg' alt="irshad"
                    className='w-20 rounded-full' />

                <h3>Let's Conenct</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk? I'm in.</p>
                <p className='font-semibold '>irshadsha164@gmail.com</p>

                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link}
                                target='_blank'
                                rel='noopener noreferrer'
                                title={text}>
                                <img src={icon} alt={text} className='size-5' />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Contact
