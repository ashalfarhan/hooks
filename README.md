# Minimal React Hooks

> Just a simple React Hooks

## 📦 Installation

---

```bash
yarn add @ashalfarhan/hooks

#or

npm install @ashalfarhan/hooks --save
```

## 🔧 Guide

---
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

### 🦺 useSafeUpdate

```tsx
const [count, setCount] = useState(0)
const safeSetCount = useSafeUpdate(setCount)
```
#### Returns
 - safeCallback
    > `function`
    > 
    > Function/callback that is safe when you call if your component accidently unmounted.


### 🦥 useDebouncedValue

```tsx
const [searchQuery, setSearchQuery] = useState("")
const debouncedSearchQuery = useDebouncedValue(searchQuery)
```

#### Returns
 - debouncedValue
    > `T`
    >
    > Value that lazily update based on delay argument, default to `200` (in ms)

### 👈 usePreviousValue
```tsx
const prevCount = usePrevious(count)
```

### Returns
 - previousValue
   > `T`
   >
   > The prevous value of every render, possibly undefined at first