# Minimal React Hooks

## 📦 Installation

---

```bash
yarn add @ashalfarhan/hooks

#or

npm install @ashalfarhan/hooks --save
```

## 🔧 Guide

---

### 💻 useScroll

```tsx
const { scrolling, scrollBottom, scrollTop } = useScroll();
```

- scrolling

  > Type `boolean`
  >
  > Detect scrolling to bottom event

- scrollBottom

  > Type `boolean`
  >
  > Same as `scrolling`

- scrollTop

  > Type `boolean`
  >
  > Detect scrolling to top event

### 🍳 useFetch

```tsx
const { result, status, error, loading, success } = useFetch('https://jsonplaceholder.typicode.com/posts');
```

- result

  > `any`
  >
  > Result of the fetch
  >
  > Note: Cast with generic parameter if you want to infer the type

- status

  > `loading` | `success` | `error` | `idle`
  >
  > Fetching status

- error

  > `null` | `Error` | `any`

- success and loading

  > `boolean`
  >
  > `true` If it is

### 🧲 useToggle

```tsx
const { open, onToggle, onOpen, onClose, onSwitch } = useToggle();
```

- open

  > `boolean`
  >
  > Current state of toggle
  >
  > Note: Initially false, to change the initial state pass `true` to the `useToggle` parameter

- onToggle

  > `function`
  >
  > Function to toggle the state

- onClose

  > `function`
  >
  > Function to set the state to `false`

- onOpen

  > `function`
  >
  > Function to set the state to `true`

- onSwitch

  > `function`
  >
  > Function to set the state to the param that passed in
