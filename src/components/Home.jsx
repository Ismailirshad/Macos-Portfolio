import useModalStore from '../store/useModalStore.js';
import useLocationStore from '../store/locationStore.js';
import { locations } from '../constants'
import clsx from 'clsx';
import { motion } from 'framer-motion'

const projects = locations.work?.children ?? [];

const Home = () => {
    const {setActiveLocations} = useLocationStore()
    const {openModal} = useModalStore()

    const handleFolder = (project) => {
        setActiveLocations(project)
        openModal("finder", project)
    }

    return (
        <section id='home' >
            <ul>
                {projects.map((project) => (
                    <motion.li
                        drag
                        dragMomentum={false}
                        whileDrag={{ cursor: "grabbing" }}
                        onClick={() => handleFolder(project)}
                        key={project.id}
                        className={clsx("group folder", project.windowPosition)}
                    >
                        <img src='/images/folder.png' alt={project.name} />
                        <p>{project.name}</p>
                    </motion.li>
                ))}
            </ul>

        </section>
    )
}

export default Home
