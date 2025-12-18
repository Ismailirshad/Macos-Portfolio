import useModalStore from '../store/useModalStore.js'

const WindowControls = () => {
    const { closeModal } = useModalStore()
    return (
        <div id='window-controls'>
            <div className="close" onClick={() => closeModal()} />
                <div className="minimize" />
                <div className="maximize" />
            </div>

    )
}

export default WindowControls
