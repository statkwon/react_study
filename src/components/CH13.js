import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// lazy(load): https://react.dev/reference/react/lazy#lazy
// <Suspense></Suspense>: lets you display a fallback until its children have finished loading
// cf. react-loader-spinner
import CH13Param from "./CH13Param";
import CH13QueryString from "./CH13QueryString";
import CH13Child from "./CH13Child";
import CH13Redirect from "./CH13Redirect";
import CH13History from "./CH13History";
import CH13NotFound from "./CH13NotFound";

function CH13() {
  return (
    <div>
      <h1 className="title">Chapter 13</h1>
      <Link to="./Param/1/Lionel Messi">Param</Link> | &nbsp;
      <Link to="./QueryString?id=1&name=Lionel Messi">QueryString</Link> | &nbsp;
      <Link to="./Child">Child</Link> | &nbsp;
      <Link to="./Redirect">Redirect</Link> | &nbsp;
      <Link to="./History">History</Link>
      <hr />
      <Routes>
        <Route index element={<CH13Param />} />
        <Route path="/Param/:id/:name" element={<CH13Param />} />
        <Route path="/QueryString" element={<CH13QueryString />} />
        <Route path="/Child" element={<CH13Child />}>
          {/* CH13Child 컴포넌트에서 <Outlet /> 태그가 사용된 자리에 중첩된 라우터가 출력된다. */}
          <Route path="/Child" element={<p>Component</p>} />
          <Route path="/Child/two" element={<p>2nd Component</p>} />
          <Route path="three" element={<p>3rd Component</p>} />
        </Route>
        <Route path="/Redirect" element={<CH13Redirect />} />
        <Route path="/History" element={<CH13History />} />
        <Route path="/*" element={<CH13NotFound />} />
      </Routes>
    </div>
  );
}

export default CH13;
