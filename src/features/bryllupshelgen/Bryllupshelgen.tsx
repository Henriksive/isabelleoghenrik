import React from "react";
import "./bryllupshelgen.css";
import kart from "../../assets/kart2.png";

export const Bryllupshelgen: React.FC = () => {
  return (
    <div>
      <h1>Program for helgen</h1>
      <div className="subFrame">
        <h2>Fredag</h2>
        <p>
          Vi starter feiringen allerede fredag, og håper så mange som mulig får
          vært med på en bli-kjent-kveld på tunet på Grøtta fra klokken 17:00!
          Vi serverer enkel varmmat og det blir etter hvert låvequiz med snacks
          og noe godt i glasset. Låven er uisolert, kle deg etter været.
        </p>
        <h2>Lørdag</h2>
        <p>
          Vielsen finner sted i Hen kirke klokken 13.00. Etter vielsen finner
          gjestene tilbake til tunet på Grøtta. Her blir det servert
          forfriskninger mens brudeparet fotograferes og man venter på deres
          ankomst. Middagen serveres fra 17:30 og etter maten åpner dansegulvet
          og baren på låven.
        </p>
        <h2>Søndag</h2>
        <p>
          Alle som vil stikke innom dagen derpå er hjertelig velkomne til å
          komme til tunet for å spise rester, spille hagespill, ta badstu på
          låven eller bare henge og debriefe festen. De nygifte vil være her
          hele dagen og etter hvert jobbe med å rigge ned etter festen.
        </p>
      </div>
      <div className="kartContainer">
        <div className="kart">
          <img src={kart} alt="kartbilde" />
        </div>
      </div>
      <a href={kart} target="_blank" rel="noopener noreferrer"><i>Se kartet i stort format</i></a>
    </div>
  );
};
