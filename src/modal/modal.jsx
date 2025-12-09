import { motion, AnimatePresence } from "framer-motion";
import useModalStore from "../store/useModalStore";
import { useState } from "react";

let globalZ = 1000;

const Modal = ({ modalKey, children }) => {
  const { activeModal,modalData, closeModal } = useModalStore();
  const [zIndex, setZIndex] = useState(globalZ);

  if (activeModal !== modalKey) return null; // show only if active

  return (
    <AnimatePresence>
      <motion.div
       className="fixed inset-0"
        style={{ zIndex }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 1}}
        onClick={closeModal}
      >
        <motion.div
         className="absolute  left-40 bg-white rounded-xl shadow-xl cursor-grab"
          // initial={{ scale: 0.9, opacity: 0 }}
          // animate={{ scale: 1, opacity: 1 }}
          // exit={{ scale: 0.9, opacity: 0 }}
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


