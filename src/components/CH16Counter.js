import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAction, increaseAction } from '../modules/counterR';

function CH16Counter() {
  const dispatch = useDispatch(); // action 호출을 위한 Hook
  const { reducerName, cnt } = useSelector((state) => state.counterR); // state 값을 가져오기 위한 Hook

  return (
    <div>
      <h2>CH16Counter</h2>
      <div>
        {reducerName}: {cnt}
      </div>
      <button onClick={() => dispatch(increaseAction(2))}>+</button>
      <button onClick={() => dispatch(decreaseAction(1))}>-</button>
    </div>
  );
}

export default CH16Counter;
