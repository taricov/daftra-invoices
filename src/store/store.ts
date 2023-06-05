import {create} from "zustand"

type StoreType = {
    currentView: string;
    invoices: any;
    toggleView: ()=> void;
}

export const useStore = create<StoreType>()((set)=>({
currentView: 'g',
invoices: [],
toggleView: () => set(state=>({currentView: state.currentView === "g" ? "t" : "g"}))

}))
