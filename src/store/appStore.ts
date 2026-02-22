import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ModuleId } from '@/types/tool.ts';

interface AppState {
  theme: 'dark' | 'light';
  sidebarOpen: boolean;
  activeModule: ModuleId | null;
  favorites: string[];
  recentTools: string[];
  searchOpen: boolean;
  setTheme: (theme: 'dark' | 'light') => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setActiveModule: (module: ModuleId | null) => void;
  toggleFavorite: (toolId: string) => void;
  addRecent: (toolId: string) => void;
  setSearchOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      sidebarOpen: false,
      activeModule: null,
      favorites: [],
      recentTools: [],
      searchOpen: false,
      setTheme: (theme) => set({ theme }),
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setActiveModule: (module) => set({ activeModule: module }),
      toggleFavorite: (toolId) =>
        set((s) => {
          const isFav = s.favorites.includes(toolId);
          if (isFav) return { favorites: s.favorites.filter((f) => f !== toolId) };
          return { favorites: [...s.favorites, toolId].slice(-20) };
        }),
      addRecent: (toolId) =>
        set((s) => ({
          recentTools: [toolId, ...s.recentTools.filter((t) => t !== toolId)].slice(0, 10),
        })),
      setSearchOpen: (open) => set({ searchOpen: open }),
    }),
    { name: 'apex-ortho-store' }
  )
);
