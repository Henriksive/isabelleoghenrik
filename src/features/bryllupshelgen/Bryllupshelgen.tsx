import React from "react";
import "./bryllupshelgen.css";

export const Bryllupshelgen: React.FC = () => {
  return (
    <div>
      <h1>Program for helgen</h1>
      <div className="subFrame">
        <h2>Fredag</h2>
        <p>
          Vi inviterer til bli-kjent-kveld på tunet og håper at mange vil komme
          på låvequiz med snacks og drikke slik at alle kan bli litt bedre kjent
          med hverandre. Vi har bestilt varmt vær, men ta med varme klær og
          ullgenser. Vi stiller med snacks og drikke.
        </p>
        <h2>Lørdag</h2>
        <p>
          Vielsen finner sted ved XXX klokken ZZ:YY. Parkering tilgjengelig ved:
          Google Maps
        </p>
        <p>
          Mottakelsen av brudeparet skjer på XXX klokken ZZ:YY. Parkering
          tilgjengelig ved: Google Maps
        </p>
        <h2>Søndag</h2>
        <p>
          Det blir en frivillig debrief etter dagen og natten ved XXX fra og med
          klokken ZZ:YY for de som ønsker.
        </p>
      </div>

      <div className="kart">KART</div>
    </div>
  );
};
