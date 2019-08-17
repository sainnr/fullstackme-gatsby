import { IAuthor } from './IAuthor'

export interface IArticle {
  id: string
  title: string
  summary: string
  keywords: string
  author: IAuthor
  image: any
  createdAt: string
  content: string
  slug: string
}