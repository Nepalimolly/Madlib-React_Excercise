### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
- React is an open source Javascript library developed by facebook that is used to build user interfaces. You woukd use it to help you build dynamic user interfaces by using componants.

- What is Babel?
- Its a Javascript compiler that is used to transform ECMA code into backwards compatiable Javascript code that will work on older web browsers.

- What is JSX?
- Is Javascript XML, its an extension in Javascript that allows you to write HTML like ocde within Javascript

- How is a Component created in React?
- You can create a functional component that doesent rely off of any state. Or you can make a class component that can accept some kind of props and can change state.

- What are some difference between state and props?
- Well the main difference is with a prop youre able to pass data from a parent to its children. While a state will change based off the conditions you pass through it. State is internal to a component and allows to to keep track of data within that component over time while props are external and allow a compnent to recive data from its parent.

- What does "downward data flow" refer to in React?
- it basically describes the way data is passed from parent components to thir child components.

- What is a controlled component?
- a controlled component refers to a form element whose value is controlled by React's state.

- What is an uncontrolled component?
- An uncontrolled component in React is a form element that maintains its own internal state, separate from React's state.

- What is the purpose of the `key` prop when rendering a list of components?
- the key prop in react is a unique attribute that helps React identify which items have changed, been added, or removed form the list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? becuause if the elemnts orders change within the list then the indexes will not be accuracte to the key and can cause rendering issues.
- there not stable identifiers

- Describe useEffect. What use cases is it used for in React components?
- useEffects are hooks that allow side effects for applications. it will usually take 2 arguments, 1 a function and 2 an optional dependcy that will basically make the use effect run anytime the secondary reference is changed.

- What does useRef do? Does a change to a ref value cause a rerender of a component? The useRef hook in React is used to create a mutable reference that persists across renders of a functional component. and no it does not cause a re render of the component.

- When would you use a ref? When wouldn't you use one?
- You should use it when youre accessing DOM elements , storing mutable values & working with third parties. You shouldnt use it when youre trying to controll the state of a component, trying to avoid side effects and UI updates based on state changes.

- What is a custom hook in React? When would you want to write one?
- A custom reace in hook is just a hook you wrote seperatly and labeled it seperatly in a different file. It essentially is not needed but can be very helpful when youre performing functionality over and over again within youre code.
