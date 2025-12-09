import React from 'react'
import { techStack } from '../constants'
import { Check, Flag } from 'lucide-react'
import useModalStore from '../store/useModalStore'
import WindowControls from '../components/WindowControls'

const Terminal = () => {
    const { closeModal } = useModalStore()
    return (

        <div id='terminal' >
            <div id="window-header" >
                <WindowControls />
                <h2>Teach Stack</h2>
            </div>

            <div className="techstack">
                <p>
                    <span className='font-bold'> @irshad  % </span>
                    show tech stack
                </p>

                <div className="label">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className='content'>
                    {techStack.map(({ category, items }) => (
                        <li key={category} className='flex'>
                            <Check className='check' size={20} />
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}> {item}
                                        {index < items.length - 1 ? "," : ""}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <check size={20} className="inline-block" /> 5 of 5 stacks loaded successfully(100%)
                    </p>
                    <p className='text-white'>
                        <Flag size={15} fill='black' />
                        Render time: 6ms
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Terminal


