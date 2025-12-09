import React from 'react'
import useModalStore from '../store/useModalStore'
import WindowControls from '../components/WindowControls'

const Image = () => {
    const {modalData} = useModalStore()
console.log("Modal data is", modalData)
    if(!modalData) return null

    const {name, imageUrl } = modalData;

  return (
    <div id='imgfile'>
      <div id='window-header'>
        <WindowControls target='imgfile' />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
            <div className="w-full">
                <img src={imageUrl} alt={name} className='w-full h-auto max-w-[70vh] object-contain rounded' />
            </div>
        ): null }
      </div>
    </div>
  )
}

export default Image
