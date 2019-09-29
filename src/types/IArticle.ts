import { IAuthor } from './IAuthor'
import { ITag } from './ITag'

export interface IArticle {
  id: string
  title: string
  excerpt: string
  keywords: string
  author: IAuthor
  featured_media: any
  date: string
  content: string
  slug: string
  tags: ITag[]
}