import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: "increment" });

    //using redux toolkit
    dispatch(counterActions.increment(1));
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });

    //using redux toolkit
    dispatch(counterActions.decrement());
  };

  const incrementByFiveHandler = () => {
    // dispatch({ type: "increment", amount: 5 });

    //using redux toolkit
    dispatch(counterActions.increment(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });

    //using redux toolkit
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementByFiveHandler}>Increment by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
