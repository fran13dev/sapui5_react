import React from 'react'
import { Title } from '@ui5/webcomponents-react/lib/Title'
import { spacing } from '@ui5/webcomponents-react-base'

import { Custom } from './Custom'

export const Detail = () => {
  return (
    <Title style={spacing.sapUiContentPadding}>
      <Custom />
    </Title>
  )
}
