import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

function CH8Hooks() {
  // useEffect, useReducer, useMemo, useRef
  // 1. useState: lets you add a state variable to your component
  const [data, setData] = useState({
    num: "",
    str: "Hello World",
    avg: "",
    arr: [],
  });
  const [today, setToday] = useState(new Date());

  // 2. useRef: lets you reference a value that's not needed for rendering
  // a) Referencing a value with a ref (ex. const cnt = useRef(0);)
  // b) Manipulating the DOM with a
  const avgInput = useRef(null);

  // 3. useCallback: lets you cache a function definition between re-renders
  // const changeNumber = (evt) => setData({ ...data, [evt.target.name]: evt.target.value });
  // 위와 같이 useCallback을 사용하지 않으면 컴포넌트가 리렌더링 될 때마다 함수가 새로 만들어진다.

  // useCallback(callback: 생성하고 싶은 함수, deps: 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시)
  // const changeNumber = useCallback((evt) => setData({ ...data, [evt.target.name]: evt.target.value }), [data]);
  // 위의 코드에서 data의 값이 바뀔 때마다 changeNumber가 새로 생성되므로 사실상 useCallback을 사용하는 의미가 없다.

  // setter의 인자로 콜백 함수를 전달함으로써 의존관계를 없앨 수 있다.
  const changeNumber = useCallback((evt) => setData((data) => ({ ...data, [evt.target.name]: Number(evt.target.value) })), []);
  const changeString = useCallback((evt) => setData((data) => ({ ...data, [evt.target.name]: evt.target.value })), []);
  const addArray = useCallback((evt) => {
    setData((data) => {
      return { ...data, arr: data.arr.concat(data.avg), avg: "" };
    });
    avgInput.current.focus();
  }, []);

  // 4. useEffect: lets you synchronize a component with an external system
  // useEffect(effect): 화면이 리렌더링 될 때마다 실행
  // useEffect(effect, []): 마운트 될 때만 실행
  // useEffect(effect, [deps]): 특정 값이 업데이트 될 때만 실행
  useEffect(() => {
    setTimeout(() => {
      setToday(new Date());
    }, 1000);
  }, [data]);
  useEffect(() => {
    avgInput.current.style.background = "beige";
  }, []);

  // 5. useMemo: lets you cache the result of a calculation between re-renders
  const getAverage = (arr) => {
    console.log("계산중..."); // useMemo를 사용하지 않으면 화면이 리렌더링 될 때마다 로그가 기록된다.
    let total = 0;
    if (arr.length === 0) return 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total / arr.length;
  };
  const getAverageMemo = useMemo(() => getAverage(data.arr), [data.arr]);

  return (
    <div>
      <h2>CH8Hooks</h2>
      <div>
        Num: {data.num}
        <input type="number" name="num" className="form-control" value={data.num} onChange={changeNumber}></input>
        Str: {data.str}
        <input type="text" name="str" className="form-control" value={data.str} onChange={changeString}></input>
        Today: {today.toLocaleString()} <br />
        Avg([{data.arr.join(" ")}]): {getAverageMemo}
        <div className="input-group">
          <input type="number" name="avg" ref={avgInput} className="form-control" value={data.avg} onChange={changeNumber}></input>
          <button className="btn btn-outline-primary btn-sm" onClick={addArray}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CH8Hooks;
