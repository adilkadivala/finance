import { create } from "zustand";

type NewCategoryState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewcategory = create<NewCategoryState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
