import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  isDarkMode: boolean;
  updateTheme: () => void;
}

export const themeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? true
        : false,
      updateTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'isDarkMode',
    }
  )
);

export interface ModalType {
  title: string;
  content: React.ReactNode;
  callBack?: () => void;
}
export interface ModalState extends ModalType {
  isOpen: boolean;
  openModal: (modalData: ModalType) => void;
  closeModal: () => void;
}

export const modalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: '',
  content: '',
  callBack: undefined,
  openModal: (modalData: ModalType) =>
    set({
      isOpen: true,
      title: modalData.title,
      content: modalData.content,
      callBack: modalData.callBack,
    }),
  closeModal: () =>
    set({ isOpen: false, title: '', content: '', callBack: undefined }),
}));

interface TokenStoreType {
  token: string;
  setAccessToken: (newToken: string) => void;
}

export const accessTokenStore = create<TokenStoreType>((set) => ({
  token: '',
  setAccessToken: (newToken: string) => set({ token: newToken }),
}));
