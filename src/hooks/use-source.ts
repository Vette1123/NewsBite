import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ArticleSourceStore {
  source: string
  setSource: (source: string) => void
}

export const useArticleSource = create<ArticleSourceStore>()(
  persist(
    (set) => ({
      source: '',
      setSource: (source) => set({ source }),
    }),
    {
      name: 'article-source',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
