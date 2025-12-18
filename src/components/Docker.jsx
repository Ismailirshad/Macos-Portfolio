import useModalStore from "../store/useModalStore.js";
import { dockApps } from '../constants'
import { Tooltip } from 'react-tooltip'
import { motion } from "framer-motion";


const Docker = () => {
    const { openModal } = useModalStore();

    return (
        <section id='dock'>
            <div className="dock-container">
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        key={id} className='relative flex justify-center' >
                        <motion.button
                            whileHover={{ scale: 1.3, y: -8 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            type='button'
                            className='dock-icon'
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => openModal(id)}
                        >
                            <img src={`/images/${icon}`}
                                alt={name}
                                loading='lazy'
                                className={canOpen ? " " : "opacity-60"} />
                        </motion.button>
                    </motion.div>
                ))}
                <Tooltip id='dock-tooltip' place='top' className='tooltip' />
            </div>

        </section>
    )
}

export default Docker
