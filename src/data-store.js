import { create} from 'zustand';

const useAuthStore = create((set) => ({
  data: {
    token: ''
  },
  setData: (newdata) => set({ data: newdata}),
}));

export default useAuthStore;