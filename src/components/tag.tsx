import { Link } from 'gatsby'
import React, { FC } from 'react'

import { ITag } from '../types'

export const TagView: FC<{ tag: ITag }> = ({ tag }) =>
  <span className="tag-element">
    <Link to={`/tags/${ tag.name }`}>#{ tag.name }</Link>
  </span>