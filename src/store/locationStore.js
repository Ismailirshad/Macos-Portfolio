import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constants";

const DEFAULT_LOCATION = locations.work;
const useLocationStore = create(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    

     setActiveLocations: (location) =>
      set((state) => {
        state.activeLocation = location ?? DEFAULT_LOCATION;
      }),

    resetActiveLocations: () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION
    })
})))

export default useLocationStore;

// wihtout immuer 
// const useLocationStore = create((set) => ({
//   activeLocation: DEFAULT_LOCATION,

//   setActiveLocations: (location = null) =>
//     set((state) => ({...state, activeLocation: location,
//     })),

//   resetActiveLocations: () =>
//     set((state) => ({...state, activeLocation: DEFAULT_LOCATION,
//     })),
// }));