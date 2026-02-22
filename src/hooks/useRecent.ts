import { useAppStore } from '@/store/appStore.ts';

export function useRecent() {
  const recentTools = useAppStore((s) => s.recentTools);
  const addRecent = useAppStore((s) => s.addRecent);
  return { recentTools, addRecent };
}
