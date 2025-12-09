import React from 'react'
import WindowControls from '../components/WindowControls'
import useModalStore from '../store/useModalStore.js'
import useWindowStore from '../store/window.js'

const Text = () => {
    const { modalData} = useModalStore()
    console.log("ACTIVE MODAL:", modalData );
    // const data = windows.txtfile?.data
    if(!modalData) return null

    const {name, image, subtitle, description} = modalData;
  return (
    <div id="txtfile" >
        <div id='window-header'>
            <WindowControls target='txtfile' />
            <h2>{name}</h2>
        </div>

        <div className="p-5 space-y-6 bg-white">
            {image ? (
                <img src={image} alt={name} className='pl-28 h-44 object-fit rounded-xl' />
            ): null }

            {subtitle ? 
            <h3 className='text-lg font-semibold'>{subtitle}</h3> 
            : null }

            {Array.isArray(description) && description.length > 0 ? (
                <div className="space-y-3 leading-relaxed text-base text-gray-800">
                    {description.map((para, idx) => (
                        <p key={idx} >{para}</p>
                    ))}
                </div>
            ) : null }
        </div>
      
    </div>
  )
}

export default Text
