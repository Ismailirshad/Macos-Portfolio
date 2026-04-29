import React from 'react'
import { techStack } from '../constants'
import { Check, Flag } from 'lucide-react'
import useModalStore from '../store/useModalStore.js'
import WindowControls from '../components/WindowControls'

const Terminal = () => {
    const { closeModal } = useModalStore()
    return (

        <div className='max-w-3xl' id='terminal'  >
            <div id="window-header" >
                <WindowControls />
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack">
                <p>
                    <span className='font-bold'> @irshad  % </span>
                    show tech stack
                </p>

                <div className="label flex flex-col sm:flex-row">
                    <p className="w-52">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className='content'>
                    {techStack.map(({ category, items }) => (
                        <li key={category} className='flex'>
                            <Check className='check' size={20} />
                            <h3>{category}</h3>
                            <p className="flex-1">{items.join(", ")}</p>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check size={20} className="inline-block" /> 4 of 4 stacks loaded successfully(100%)
                    </p>
                    <p className='text-white'>
                        <Flag size={15} fill='black' />
                        Render time: 4ms
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Terminal


