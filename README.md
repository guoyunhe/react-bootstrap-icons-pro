# React Bootstrap Icons Pro

[![npm version](https://badgen.net/npm/v/react-bootstrap-icons-pro)](https://www.npmjs.com/package/react-bootstrap-icons-pro)
[![npm downloads](https://badgen.net/npm/dt/react-bootstrap-icons-pro)](https://www.npmjs.com/package/react-bootstrap-icons-pro)
[![GitHub stars](https://badgen.net/github/stars/guoyunhe/react-bootstrap-icons-pro)](https://github.com/guoyunhe/react-bootstrap-icons-pro)
[![License](https://badgen.net/github/license/guoyunhe/react-bootstrap-icons-pro)](./LICENSE)

Bootstrap Icons as customizable React components. Based on
[Bootstrap Icons 1.13.2](https://icons.getbootstrap.com/) and compatible with
React 16.8, 17, and 18.

## Install

```bash
npm install react-bootstrap-icons-pro
```

## Quick start

Import the icons you need and use them like any React component:

```jsx
import { BiArrowClockwise, BiCalendar, BiSearch } from 'react-bootstrap-icons-pro';

export default function App() {
  return (
    <div>
      <BiArrowClockwise />
      <BiCalendar />
      <BiSearch />
    </div>
  );
}
```

## Customize

Icons inherit the surrounding text color and font size by default. Set `color`
and `size` props to customize them; standard SVG props such as `className` and
`aria-label` are also supported.

```jsx
import { BiSearch } from 'react-bootstrap-icons-pro';

export default function SearchButton() {
  return <BiSearch size={24} color='royalblue' aria-label='Search' />;
}
```

| Prop    | Default        | Description                                                 |
| ------- | -------------- | ----------------------------------------------------------- |
| `size`  | `1em`          | Icon width and height; accepts a number or CSS size string. |
| `color` | `currentColor` | Icon fill color.                                            |

### Global styles and text alignment

Every icon includes the `.bi` class, so you can apply shared styles. Use
`vertical-align: middle` to align an inline icon with adjacent text:

```css
.bi {
  display: inline-block;
  font-size: 1.3em;
  vertical-align: middle;
}
```

```jsx
<p>
  <BiSearch /> Search
</p>
```

## Find an icon

Browse the [Bootstrap Icons catalog](https://icons.getbootstrap.com/). Components
are exported with a `Bi` prefix—for example, the `search` icon is `BiSearch`.

## FAQ

### Why use this package?

It provides Bootstrap Icons as individually importable React components, with
props for common customization such as size and color.

### Why are components prefixed with `Bi`?

The prefix identifies Bootstrap icons and avoids naming conflicts. It also
keeps component names valid for icons whose names start with a number, such as
`1-circle` (`Bi1Circle`).
