import React from "react";
import { Navigate } from "react-router-dom";

function CH13Redirect() {
  // ex. 로그인이 필요한 페이지인데 로그인을 안 한 경우 로그인 페이지로 리다이렉트
  const isChecked = false;
  if (!isChecked) return <Navigate to="/" replace={true} />;

  return (
    <div>
      <h2>CH13Redirect</h2>
    </div>
  );
}

export default CH13Redirect;
