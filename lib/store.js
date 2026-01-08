import { create } from 'zustand';

export const useHackerMode = create((set) => ({
  isHackerMode: false,
  toggleHackerMode: () => set((state) => ({ isHackerMode: !state.isHackerMode })),
  setHackerMode: (mode) => set({ isHackerMode: mode }),
}));
