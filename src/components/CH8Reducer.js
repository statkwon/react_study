import React, { useCallback, useEffect, useMemo, useReducer, useRef } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NUM":
      return { ...state, [action.payload.name]: Number(action.payload.value) };
    case "CHANGE_STR":
      return { ...state, [action.payload.name]: action.payload.value };
    case "CHANGE_TODAY":
      return { ...state, today: action.payload };
    case "ADD_ARRAY":
      return { ...state, arr: state.arr.concat(state.avg), avg: "" };
    default:
      return state;
  }
};

function CH8Reducer() {
  // 6. useReducer: lets you add a reducer to your component
  const [state, dispatch] = useReducer(reducer, {
    num: "",
    str: "Hello World",
    today: new Date(),
    avg: "",
    arr: [],
  });
  const avgInput = useRef(null);

  const changeNumber = useCallback((evt) => dispatch({ type: "CHANGE_NUM", payload: evt.target }), []);
  const changeString = useCallback((evt) => dispatch({ type: "CHANGE_STR", payload: evt.target }), []);
  const addArray = useCallback((evt) => {
    dispatch({ type: "ADD_ARRAY" });
    avgInput.current.focus();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "CHANGE_TODAY", payload: new Date() });
    }, 1000);
  }, []);
  const getAverage = (arr) => {
    let total = 0;
    if (arr.length === 0) return 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total / arr.length;
  };
  const getAverageMemo = useMemo(() => getAverage(state.arr), [state.arr]);

  return (
    <div>
      <h2>CH8Reducer</h2>
      <div>
        Num: {state.num}
        <input type="number" name="num" className="form-control" value={state.num} onChange={changeNumber}></input>
        Str: {state.str}
        <input type="text" name="str" className="form-control" value={state.str} onChange={changeString}></input>
        Today: {state.today.toLocaleString()} <br />
        Avg([{state.arr.join(" ")}]): {getAverageMemo}
        <div className="input-group">
          <input type="number" name="avg" ref={avgInput} className="form-control" value={state.avg} onChange={changeNumber}></input>
          <button className="btn btn-outline-primary btn-sm" onClick={addArray}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CH8Reducer;
