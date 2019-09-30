import React, { FC } from 'react'

export const WpContent: FC<{ htmlString: string }> = ({ htmlString }) =>
  <div
    className="wp-content-wrapper"
    dangerouslySetInnerHTML={ { __html: htmlString } }
  />