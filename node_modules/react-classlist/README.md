# react-classlist

A simple class list to use in React projects.

Compatible with TailwindCSS

# Usage

```JS
import { ClassList } from 'react-classlist'

export default function Component() {

  const classes = new ClassList('container whitebg')

  classes.add('redtext')

  classes.add('highscore', score > 100)

  return (
    <div className={classes}>

    </div>
  )
}
```

# Installation

`npm i react-classlist`

# Testing

`npm run test`

Coverage: 100%
