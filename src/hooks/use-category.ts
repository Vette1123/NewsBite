import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ArticleCategoryStore {
  category: string
  setCategory: (category: string) => void
}

export const useArticleCategory = create<ArticleCategoryStore>()(
  persist(
    (set) => ({
      category: 'home',
      setCategory: (category) => set({ category }),
    }),
    {
      name: 'article-category',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
