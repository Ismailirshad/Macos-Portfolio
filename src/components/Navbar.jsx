import useModalStore from '../store/useModalStore.js'
import { navIcons, navLinks } from '../constants'
import dayjs from 'dayjs'

const Navbar = () => {
    const { openModal } = useModalStore()
    return (
        <nav >
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className='font-bold'>Irshad's Portfolio</p>
                <ul>
                    {navLinks.map(({ name, id, type }) => (
                        <li key={id} onClick={() => openModal(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id} >
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>

        </nav>
    )
}

export default Navbar
