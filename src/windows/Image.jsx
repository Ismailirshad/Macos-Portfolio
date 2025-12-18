import useModalStore from '../store/useModalStore.js'
import WindowControls from '../components/WindowControls'

const Image = () => {
  const { modalData } = useModalStore()
  if (!modalData) return null

  const { name, imageUrl } = modalData;

  return (
    <div id='imgfile'>
      <div id='window-header'>
        <WindowControls target='imgfile' />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white ">
        {imageUrl ? (
          <div className="w-full h-[48vh] rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={imageUrl}
              alt={name}
              className="max-w-full max-h-full rounded-xl object-contain"
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Image
