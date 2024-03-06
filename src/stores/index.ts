import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { MemberTag, SnsList } from '@/types';

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

interface UserDataStoreType {
  id: number | null;
  nickName: string;
  profileImage: string;
  snsList: SnsList[];
  memberTags: MemberTag[];
  accessToken: string;
  isLogin: boolean;
  setAccessToken: (newAccessToken: string) => void;
  setIsLogin: (newIsLogin: boolean) => void;
  setUserData: (userData: UserDataSetType) => void;
}

interface UserDataSetType {
  id: number | null;
  nickName: string;
  profileImage: string;
  snsList: SnsList[];
  memberTags: MemberTag[];
}

export const userDataStore = create<UserDataStoreType>((set) => ({
  id: null,
  nickName: '',
  profileImage: '',
  snsList: [],
  memberTags: [],
  accessToken: '',
  isLogin: false,
  setAccessToken: (newAccessToken: string) =>
    set({ accessToken: newAccessToken }),
  setIsLogin: (newIsLogin: boolean) => {
    set({ isLogin: newIsLogin });
  },
  setUserData: (userData: UserDataSetType) =>
    set({
      id: userData.id,
      nickName: userData.nickName,
      profileImage: userData.profileImage,
      snsList: userData.snsList,
      memberTags: userData.memberTags,
    }),
}));
