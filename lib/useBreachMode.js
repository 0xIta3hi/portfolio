import { create } from 'zustand';

export const useBreachMode = create((set) => ({
  isBreached: false,
  toggleBreach: () => set((state) => ({ isBreached: !state.isBreached })),
  setBreach: (breached) => set({ isBreached: breached }),
}));
