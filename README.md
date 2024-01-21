# React Bootstrap Icons Pro

Up-to-date Bootstrap icons as React components.

## How to use

```bash
npm i -S react-bootstrap-icons-pro
```

```jsx live
import { BiSearch, BiSend } from 'react-bootstrap-icons-pro';

function App() {
  return (
    <div>
      <BiSearch />
      <BiSend />
    </div>
  );
}

render(<App />);
```

## FAQ

### Why another package?

Existing `react-bootstrap-icons` doesn't update for quite a long time. So I started a new one.

### Why component name is `BiSearch` instead of `Search`?

Because here are many icon names starting with numbers, like icon `1-circle`. Without prefix, `1Circle` is invalid React component name. So I added `Bi` prefix to all component names.

Here is another advantage, when you type `<Bi` in VS Code, you can get hints for icon components when you are not quite sure about the exact names of icons.
