# mdx-deck basic template

This was generated with [mdx-deck][]'s `npm init deck` command.

## Development

To run the presentation deck in development mode:

```sh
npm start
```

Edit the [`deck.mdx`](deck.mdx) file to get started.

## Exporting

To build the presentation deck as static HTML:

```sh
npm run build
```

## Styling

MDX Deck uses Emotion for styling under the hood, so you can use it in your own components. [Check out the docs here](https://emotion.sh/docs/introduction).

```js
/** @jsx jsx */
import React from 'react'
import { css, jsx } from "@emotion/core";


export default function EmotionTest() {
    return (
        <div css={css`color:red;`}>
            Emotion test
        </div>
    )
}
```

## Components

### Custom Components

You can import any custom React components locally. Make sure to restart dev server each time to clear MDX cache or you'll get import errors!

```mdx
import Test from './components/Test'

<Test>Hello</Test>
```

### Theme UI

You can import any Theme UI components:

```mdx
import { Box } from 'theme-ui'

<Box color="tomato">Hello</Box>
```

### Head

Use the `Head` component to set content in the document head.

```mdx
// example for twitter cards

<Head>
  <title>My Presentation</title>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@jxnblk" />
  <meta name="twitter:title" content="My Presentation" />
  <meta name="twitter:description" content="A really great presentation" />
  <meta name="twitter:image" content="https://example.com/card.png" />
</Head>
```

### [](https://github.com/jxnblk/mdx-deck/blob/master/docs/components.md#notes)Notes

Speaker notes that only show in presenter mode can be added to any slide with the `Notes` component.

```mdx
#  Slide Content

<Notes>

- Only visible in presenter mode
- Markdown syntax can be used with empty lines around the content

</Notes>
```

### [](https://github.com/jxnblk/mdx-deck/blob/master/docs/components.md#header)Header

Use the `Header` component to render a persistent header (at the top of the screen) across the entire presentation.

```mdx
<Header>

Put a logo, handle, or something else here...

</Header>

#  My Presentation
```

### [](https://github.com/jxnblk/mdx-deck/blob/master/docs/components.md#footer)Footer

The `Footer` component renders a persistent footer (at the bottom of the screen) across the entire presentation.

```mdx
<Footer>

Put a logo, handle, or something else here...

</Footer>

#  My Presentation
```

### [](https://github.com/jxnblk/mdx-deck/blob/master/docs/components.md#steps)Steps

Use the `Steps` (formerly `Appear`) component to make child elements appear one at a time within a single slide. Use the left and right arrow keys to step through each element.

```mdx
<Steps>

- One
- Two
- Three
- Four

</Steps>
```

Internally, the `Steps` component uses the `useSteps` hook, which can be used to build custom components with similar behavior.

***

For more documentation see the [mdx-deck][] repo.

[mdx-deck]: https://github.com/jxnblk/mdx-deck
