# React Bootstrap Icons Pro

[![npm version](https://badgen.net/npm/v/react-bootstrap-icons-pro)](https://www.npmjs.com/package/react-bootstrap-icons-pro)
[![npm downloads](https://badgen.net/npm/dt/react-bootstrap-icons-pro)](https://www.npmjs.com/package/react-bootstrap-icons-pro)
[![GitHub stars](https://badgen.net/github/stars/guoyunhe/react-bootstrap-icons-pro)](https://github.com/guoyunhe/react-bootstrap-icons-pro)
[![License](https://badgen.net/github/license/guoyunhe/react-bootstrap-icons-pro)](./LICENSE)

Up-to-date Bootstrap icons (v1.13.2) as React components.

## How to use

```bash
npm i -S react-bootstrap-icons-pro
```

```jsx
import { BiArrowClockwise, BiCalendar, BiSearch, BiSend } from 'react-bootstrap-icons-pro';

function App() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <BiArrowClockwise />
      <BiCalendar />
      <BiSearch />
      <BiSend />
    </div>
  );
}

render(<App />);
```

## Customize

You can customize each icon's size, color and other styles.

```jsx
import { BiArrowClockwise, BiCalendar, BiSearch, BiSend } from 'react-bootstrap-icons-pro';

function App() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <BiArrowClockwise size='2em' />
      <BiCalendar size={12} />
      <BiSearch color='green' />
      <BiSend color='#66ccff' size={24} />
    </div>
  );
}

render(<App />);
```

If you want to define global icon styles, use `.bi` class name.

```css
.bi {
  display: block;
  font-size: 1.3em;
  vertical-align: middle;
}
```

## FAQ

### Why another package?

Existing `react-bootstrap-icons` doesn't update for quite a long time. So I started a new one.

### Why component name is `BiSearch` instead of `Search`?

Because here are many icon names starting with numbers, like icon `1-circle`. Without prefix, `1Circle` is invalid React component name. So I added `Bi` prefix to all component names.

Here is another advantage, when you type `<Bi` in VS Code, you can get hints for icon components when you are not quite sure about the exact names of icons.
