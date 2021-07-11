# React hooks useScroll

## Description

This package is to detect scroll event

## Installation

```bash
yarn add @ashalfarhan/use-scroll

#or

npm install @ashalfarhan/use-scroll --save
```

## Docs

```tsx
const { scrolling, scrollBottom, scrollTop } = useScroll();
```

- scrolling

  Return `boolean`

  Detect scrolling to bottom event

- scrollBottom

  Return `boolean`

  Same as `scrolling`

- scrollTop

  Return `boolean`

  Detect scrolling to top event

## Usage

```tsx
import useScroll from '@ashalfarhan/use-scroll';

const MyComponent = () => {
  const { scrolling, scrollBottom, scrollTop } = useScroll();
  return (
    <div style={{ minHeight: '200vh' }}>
      <header style={{ display: scrolling ? 'none' : 'block' }}>
        My Header
      </header>
    </div>
  );
};

export default MyComponent;
```

## Compatibility

- SSG
- CSR
- SSR
