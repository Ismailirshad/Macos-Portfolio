import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Docker from './components/Docker'
import Terminal from './windows/Terminal'
import Modal from './modal/modal'
import Safari from './windows/Safari'
import Resume from './windows/resume'
import Finder from './windows/Finder'
import Text from './windows/Text'
import Image from './windows/Image'
import Contact from './windows/Contact'
import Home from './components/Home'
import Photos from './windows/Photos'

const App = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Docker />
      <Home />

        <Modal modalKey="terminal">
        <Terminal />
      </Modal>

      <Modal modalKey="safari">
        <Safari/>
      </Modal>

       <Modal modalKey="resume">
        <Resume/>
      </Modal>

        <Modal modalKey="finder">
        <Finder/>
      </Modal>

      <Modal modalKey="txtfile">
        <Text/>
      </Modal>

       <Modal modalKey="imgfile">
        <Image/>
      </Modal>

        <Modal modalKey="contact">
        <Contact/>
      </Modal>

      
        <Modal modalKey="photos">
        <Photos/>
      </Modal>

    </div>
  )
}

export default App
