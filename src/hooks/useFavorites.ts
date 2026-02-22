import { useAppStore } from '@/store/appStore.ts';

export function useFavorites() {
  const favorites = useAppStore((s) => s.favorites);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const isFavorite = (toolId: string) => favorites.includes(toolId);
  return { favorites, toggleFavorite, isFavorite };
}
