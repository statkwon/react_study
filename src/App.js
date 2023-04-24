import "./components/css/Style.css";
import CH2 from "./components/CH2";
import CH3 from "./components/CH3";
import CH4Event from "./components/CH4Event";
import CH6CreateDOM from "./components/CH6CreateDOM";
import CH8 from "./components/CH8";
import CH9 from "./components/CH9";
import CH10 from "./components/CH10";

function App() {
  return (
    <div className="m-3">
      <CH10 /> <hr />
      <CH9 /> <hr />
      <CH8 /> <hr />
      <h1 className="title">Chapter 6</h1>
      <CH6CreateDOM /> <hr />
      <h1 className="title">Chapter 4</h1>
      <CH4Event /> <hr />
      <CH3 />
      <CH2 />
    </div>
  );
}

export default App;
