import useModalStore from '../store/useModalStore.js'
import WindowControls from '../components/WindowControls'
import { Mail, Search } from 'lucide-react'
import { gallery, photosLinks } from '../constants'

const Photos = () => {
    const {openModal} = useModalStore()
  return (
    <div id='photos'>

        <div id='window-header'>
            <WindowControls target='photos' /> 

            <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                <Mail className='icon' />
                <Search className='icon' />
            </div>
        </div>

        <div className="flex w-full">
            <div className="sidebar">
                <h2>Photos</h2>
                <ul>
                {photosLinks.map(({id, icon, title}) => (
                    <li key={id} >
                        <img src={icon} alt={title} />
                        <p>{title}</p>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <ul className='grid grid-cols-2 gap-3 space-y-3 p-5' >
                    {gallery.map(({id, img}) => (
                        <li className='size-56 overflow-hidden object-cover rounded-xl' key={id} onClick={() => openModal("imgfile", {
                            id,
                            name: "Gallery image",
                            icon: "/images/image.png",
                            kind: "file",
                            fileType: "img",
                            imageUrl: img
                        }) } >
                            <img src={img} alt={`Gallery image ${id}`}  />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Photos
