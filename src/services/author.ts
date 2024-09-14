import { THE_GUARDIAN_API_KEY, THE_GUARDIAN_BASE_URL } from '@/lib/constants'
import { AuthorResponse } from '@/types/author'
import axios from 'axios'

export const getAuthors = async (): Promise<AuthorResponse> => {
  const response = await axios.get(
    `${THE_GUARDIAN_BASE_URL}&api-key=${THE_GUARDIAN_API_KEY}`
  )
  return response.data?.response
}
