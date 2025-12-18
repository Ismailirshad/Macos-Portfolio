import useModalStore from "../store/useModalStore.js";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

let globalZ = 1000;

const Modal = ({ modalKey, children }) => {
  const { activeModal, closeModal } = useModalStore();
  const [zIndex, setZIndex] = useState(globalZ);

  if (activeModal !== modalKey) return null;

  return (
    <AnimatePresence>
      <motion.div
       className="fixed inset-0 hidden sm:block"
        style={{ zIndex }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 1}}
        onClick={closeModal}
      >
        <motion.div
         className="absolute bg-white rounded-xl shadow-xl cursor-grab"
          // for inside modal clicks 
          onClick={(e) => {
            e.stopPropagation();
            globalZ += 1;
            setZIndex(globalZ); 
          }}
          // to drag 
          drag
          dragMomentum={false}
          whileDrag={{ cursor: "grabbing" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;


