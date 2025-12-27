import { Outlet } from "react-router-dom";
import "./root.css";
import { Link, useLocation } from "react-router-dom";
import bilde1 from "../../assets/1.jpg";
import bilde2 from "../../assets/2.jpg";
import bilde3 from "../../assets/3.jpg";
import bilde4 from "../../assets/4.jpg";
import blomst from "../../assets/blomst.png";

export function Root() {
  const location = useLocation();

  const actualLocation = location.pathname.substring(1).toLowerCase();

  const links = [
    // { to: "/", label: "Hjem" },
    { to: "bryllupshelgen", label: "Bryllupshelgen" },
    { to: "lokasjon", label: "Lokasjon" },
    { to: "overnatting", label: "Overnatting" },
    { to: "praktisk", label: "Praktisk informasjon" },
    { to: "rsvp", label: "Svar på invitasjon (RSVP)"}
  ];

  return (
    <>
      <div className="header">
        <div className="blomst">
          <img src={blomst} alt="blomst" />
        </div>
        <div className="linkContainer">
          {links.map((link) => {
            const isActive =
              (link.to.toLowerCase() === "bryllupshelgen" && actualLocation === "") ||
              actualLocation === link.to.toLowerCase();
            return (
              <Link
                key={link.to}
                to={link.to}
                className={isActive ? "active" : ""}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="blomst">
          <img src={blomst} alt="blomst" />
        </div>
      </div>
      <div className="bilderad">
        <img src={bilde1} alt="Bryllupsbilde" />
        <img src={bilde2} alt="Bryllupsbilde" className="top-center" />
        <img src={bilde3} alt="Bryllupsbilde" />
        <img src={bilde4} alt="Bryllupsbilde" />
      </div>
      <div className="mobilbilde">
        <img src={bilde4} alt="Bryllupsbilde" />
      </div>
      <div className="ramme">
        <Outlet />
      </div>
    </>
  );
}
