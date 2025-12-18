import useModalStore from '../store/useModalStore.js'
import useLocationStore from '../store/locationStore.js'
import WindowControls from '../components/WindowControls'
import { Search } from 'lucide-react'
import { locations } from '../constants'
import clsx from 'clsx'

const Finder = () => {
    const { activeLocation, setActiveLocations } = useLocationStore()
    const { openModal } = useModalStore()

    const renderList = (items) => items.map((item) => (
        <li key={item.id}
            onClick={() => setActiveLocations(item)}
            className={clsx(
                item.id == activeLocation.id ? "active" : "not-active"
            )} >
            <img src={item.icon} alt={item.name} className='w-4' />
            <p className='text-sm font-medium truncate'>{item.name}</p>
        </li>
    ))

    const openItem = (item) => {
        if (item.fileType == 'pdf') return openModal("resume", { file: item.href })
        if (item.fileType === "img") return openModal("imgfile", item);
        if (item.kind == 'folder') return setActiveLocations(item)
        if (item.fileType === "txt") return openModal("txtfile", item);
        if (['fig', 'url'].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank")
    }
    return (
        <div id='finder'>

            <div id='window-header'>
                <WindowControls target='finder' />
                <Search className='icon' />
            </div>

            <div className="bg-white flex h-full">
                <div className="sidebar">
                    <div>
                        <h3>Favourite</h3>
                        <ul>
                            {renderList(Object.values(locations))}
                        </ul>
                    </div>

                    <div>
                        <h3>Work</h3>
                        <ul>
                            {renderList(locations.work.children)}
                        </ul>
                    </div>
                </div>
                <ul className='content'>
                    {activeLocation?.children.map((item) => (
                        <li key={item.id}
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Finder

// this code is shortened above
//     <ul >
// {
//     locations.work.children.map((item) => (
//         <li key={item.id}
//             onClick={() => setActiveLocations(item)}
//             className={clsx(
//                 item.id == activeLocation.id ? "active" : "not-active"
//             )} >
//             <img src={item.icon} alt={item.name} className='w-4' />
//             <p className='text-sm font-medium truncate'>{item.name}</p>
//         </li>
//     ))
// }
//      </ul >
