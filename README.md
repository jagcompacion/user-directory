# User directory

## Task 1 & 2

```js
cd user-directory
npm install
npm run dev
```

## Task 3

1. How would you manage state in a large-scale React app?
   Answer: Zustand/Redux
2. How would you optimize performance in React using **useEffect**, **useMemo**, and **useCallback**?
   Answer:
   useEffect - Fetching data, Subscribing, directly interacting with the DOM.
   useMemo - Only use if the calculation is expensive or causes re-renders.
   useCallback - Only use when you want to tell the parent that the value is the same from the child component through props.
3. How would you ensure accessibility in the User Directory component?
   Asnwer: Use appropriate HTML tags to convey structure and meaning. Use aria-labels to describe elements when plain text isn’t enough.
