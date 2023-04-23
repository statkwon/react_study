import CH2ChildComp from "./CH2ChildComp";

function CH2FuncComp() {
  const name = "Kwonsang";
  return (
    <div>
      <h2>CH2FuncComp</h2>
      <div>Hello {name}</div>
      <CH2ChildComp />
    </div>
  );
}

export default CH2FuncComp;
