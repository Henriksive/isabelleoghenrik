import { Outlet } from "react-router-dom";
import "./root.css";
import { Link } from "react-router-dom";
export function Root() {
  return (
    <>
      <div className="header">
        <div>Blomst</div>
        <div>
          <Link to="/">Hjem</Link>
          <Link to="bryllupshelgen">Bryllupshelgen</Link>
          <Link to="lokasjon">Lokasjon</Link>
          <Link to="overnatting">Overnatting</Link>
          <Link to="praktisk">Praktisk informasjon</Link>
        </div>
        <div>Blomst</div>
      </div>
      <div className="bilderad">BILDERAD</div>
      <div className="ramme">
        <Outlet />
      </div>
    </>
  );
}
