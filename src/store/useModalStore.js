import { create } from "zustand";

const useModalStore = create((set) => ({
  activeModal: null,
  modalData: null,

  openModal: (key, data = null) =>
    set(() => ({
      activeModal: key,
      modalData: data
    })),

  closeModal: () =>
    set(() => ({
      activeModal: null,
      modalData: null
    })),
}));

export default useModalStore