# User directory

## Task 1 & 2

```js
cd user-directory
npm install
npm run dev
```

## Task 3

1. How would you manage state in a large-scale React app?
   Answer:
   1. Use global state management (Reduz, Zustand) to manage global state.
   2. If its lightweight state management (theming, authentication, global settings) use React Context API. Avoid overusing cause its the same as prop drilling. once the top rerenders, all the child rerenders, can lead to performance issues.
   3. Component level state use useState.
   4. If you want a reusable state logic, use custom hooks, this helps your component clean and reusable.
   5. Server state management use React Query, and Apollo Client for graphql. has a lot of features (fetching, caching, handling timeouts, and even polling) will lessen your code.
2. How would you optimize performance in React using **useEffect**, **useMemo**, and **useCallback**?
   Answer:
   1. for useEffect, use dependency array to controll when the effect runs to avoid unnecessary re-renders. To prevent memory leaks, especially subscription and timers, add a clean up side effects on useEffect.
   2. for useMemo, if you have an expensive calculation, and/or dont want to rerender if the value changed, use useMemo.
   3. for useCallback, if you want to memoize functions and will not recreate on every render, especially when passing them as props to child components.
3. How would you ensure accessibility in the User Directory component?
   Answer:
   1. Use appropriate HTML tags to convey structure and meaning. if its a button use `<button>`, if its a header use `<header>`, if its a sidebar use `<aside>`
   2. Use aria roles to describe elements when plain text isn’t enough. if its a `<div>` and you want to make it as a button, you need to add `aria-role="button"`. Use aria if theres no other way in answer no.1.
   3. Keyboard is useful in accesibility, it will focus the area of the current element. use tabIndex to manage focus when necessary.
   4. For forms, use `<label>` and `for` attribute.
   5. `alt` text for images. useful for screenreader (will read the `alt`) if the person focus on the image.
   6. You can also use tools in browser or you can install extension, or you can have it check online whether you met the WCAG standard or not.
