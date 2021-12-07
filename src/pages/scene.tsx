// @ts-nocheck
import React from 'react'
import loadable from '@loadable/component'

const IAframe = loadable(() => import('../components/IAframe'))

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const ScenePage = () => {

  return (
    <main style={pageStyles}>
      <title>Hello</title>
      <IAframe/>
    </main>
  )
}

export default ScenePage
