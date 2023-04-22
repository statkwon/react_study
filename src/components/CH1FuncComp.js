import CH1ChildComp from "./CH1ChildComp";

function CH1FuncComp() {
  const name = "Kwonsang";
  return (
    <div>
      <h2>CH1FuncComp</h2>
      <div>Hello {name}</div>
      <CH1ChildComp />
    </div>
  );
}

export default CH1FuncComp;
