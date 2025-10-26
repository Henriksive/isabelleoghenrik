import { Outlet } from "react-router-dom";
import "./root.css";
export function Root() {
  return (
    <>
      <div className="header">~LAG EN NAVIGERINGSMENY HER~</div>
      <div className="bilderad">BILDERAD</div>
      <div className="ramme">
        <Outlet />
      </div>
    </>
  );
}
