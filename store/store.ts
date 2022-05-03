import create from "zustand";

// NOTE: window loaded state will be used to
// distinguish a missing token from one that
// simply hasn't been loaded from storage yet
// when the page is first opened
// due to SSR not having access to sessionStorage
// which will be used to hold off on rendering react-query hooks
type Store = {
  // token state
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;

  // window loaded state
  windowLoaded: boolean;
  setWindowLoaded: () => void;
};

export const useStore = create<Store>((set) => ({
  // token state
  token: "",
  setToken: (token: string) => set((state) => ({ ...state, token })),
  clearToken: () => set((state) => ({ ...state, token: "" })),

  // window loaded state
  windowLoaded: false,
  setWindowLoaded: () => set((state) => ({ ...state, windowLoaded: true })),
}));
