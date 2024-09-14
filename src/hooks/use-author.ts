import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ArticleAuthorStore {
  author: string
  setAuthor: (author: string) => void
}

export const useArticleAuthor = create<ArticleAuthorStore>()(
  persist(
    (set) => ({
      author: '',
      setAuthor: (author) => set({ author }),
    }),
    {
      name: 'article-author',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
