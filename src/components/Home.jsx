import React from 'react'
import { locations } from '../constants'
import clsx from 'clsx';
import { motion } from 'framer-motion'
import useModalStore from '../store/useModalStore';
import useLocationStore from '../store/locationStore';

const projects = locations.work?.children ?? [];

const Home = () => {
    const {setActiveLocations} = useLocationStore()
    const {openModal} = useModalStore()

    const handleFolder = (project) => {
        setActiveLocations(project)
        openModal("finder", project)
    }

    return (
        <section id='home'
            drag
            dragMomentum={false}
            whileDrag={{ cursor: "grabbing" }}>
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
