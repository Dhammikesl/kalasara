## React Hooks

#### What should we do if we want to add a state to our function component? How about if we wanted our app to respond to the changes in data?

- React Hooks, plainly put, are functions that let us manage the internal state of components and handle post-rendering side effects directly from our function components. Using Hooks, we can determine what we want to show the users by declaring how our user interface should look based on the state.

- Build a “stateful” function component.
- Use the State Hook.
- Initialize a state and set a state.
- Define event handlers.
- Use state setter callback functions.
- Use state with arrays and objects.


#### When we call the useState() function, it returns an array with two values:

- The current state: The current value of this state.
- The state setter: A function that we can use to update the value of this state.


#### We can use these two values to track the current state of a data value or property and change it when we need to. To extract the two values from the array, we can assign them to local variables by using array destructuring. For example:

- const [currentState, setCurrentState] = useState();






 - We can now build stateful function components using the useState React Hook
 - ##### const [currentState, stateSetter] = useState( initialState );
 - The currentState references the current value of the state and initialState initializes the value 
 of the state for the component’s first render.

 - State setters can be called in event handlers.
 - We can define simple event handlers inline in our JSX and complex event handlers outside of our JSX.

 - We use a state setter callback function when our next value depends on our previous value.

 - We use arrays and objects to organize and manage related data that tend to change together.

 - Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: setArrayState((prev) => [ ...prev ]) and setObjectState((prev) => ({ ...prev })).

 - It’s best practice to have multiple, simpler states instead of having one complex state object.


 [ const CTA = () => {

    const [toggle, setToggle] = useState();


    return (
        <>
            <h1>The toggle is {toggle}</h1>
            <div>
                <button className='primary' onClick={() => setToggle("Now On")}>On</button>
                <button className='primary' onClick={() => setToggle("Now Off")}>Off</button>
            </div>
        </>
    )
} ]


