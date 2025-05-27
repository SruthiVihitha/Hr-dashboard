import { useStore } from '@/lib/store';

export const useBookmarks = () => {
  const { bookmarks, addBookmark, removeBookmark } = useStore();
  
  const toggleBookmark = (id: number) => {
    if (bookmarks.includes(id)) {
      removeBookmark(id);
    } else {
      addBookmark(id);
    }
  };
  
  return { bookmarks, toggleBookmark };
};