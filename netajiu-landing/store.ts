import { create } from "zustand";

export interface NetaState {
  fullname: string;
  photo: string;
  status: string;
  gender: string;
  dob: {
    date: string;
    age: string;
  };
  origin: {
    ward: number;
    municipality: string;
    district: string;
    province: string;
    country: string;
  };
  party: { logo: string; name: string };
  summary: string;
  activity: string[];
}

export interface StoreState {
  neta: NetaState;
  setNeta: (neta: NetaState) => void;
}

const useStore = create<StoreState>((set) => ({
  neta: {},
  setNeta: (neta: NetaState) => set({ neta: neta }),
}));

export default useStore;
