import React from "react";
import { useNavigate } from "react-router-dom";

function CH13History() {
  // Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는 상황에 사용하는 Hook
  const navigate = useNavigate();
  const home = () => navigate("/CH13", { replace: true }); // { replace: true} -> 페이지를 이동할 때 현재 페이지를 페이지 기록에 남기지 않음
  const back = () => navigate(-1);
  const forward = () => navigate(1);
  const goUrl = (url) => navigate(url);

  return (
    <div>
      <h2>CH13History</h2>
      <div>
        <button className="btn btn-primary" onClick={home}>
          Home
        </button>{" "}
        <button className="btn btn-primary" onClick={back}>
          Back
        </button>{" "}
        <button className="btn btn-primary" onClick={forward}>
          Forward
        </button>{" "}
        <button className="btn btn-primary" onClick={() => goUrl("/CH13/QueryString?id=1&name=Lionel Messi")}>
          QueryString
        </button>
      </div>
    </div>
  );
}

export default CH13History;
