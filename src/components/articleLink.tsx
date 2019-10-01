import { Link } from 'gatsby'
import React, { FC } from 'react'

import { IArticle } from '../types'

export const ArticleLink: FC<{ article: IArticle }> = ({ article }) =>
  <Link to={ `/${ article.categories[0].name }/${ article.slug }` }>
    { article.title }
  </Link>