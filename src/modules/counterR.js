const COUNTER_INCREASE = 'COUNTER_INCREASE';
const COUNTER_DECREASE = 'COUNTER_DECREASE';

export const increaseAction = (num) => ({ type: COUNTER_INCREASE, payload: num });
export const decreaseAction = (num) => ({ type: COUNTER_DECREASE, payload: num });

const init = { reducerName: 'Counter', cnt: 0 };

const counterReducer = (state = init, action) => {
  switch (action.type) {
    case COUNTER_INCREASE:
      return { ...state, cnt: state.cnt + action.payload };
    case COUNTER_DECREASE:
      return { ...state, cnt: state.cnt - action.payload };
    default:
      return state;
  }
};

export default counterReducer;
