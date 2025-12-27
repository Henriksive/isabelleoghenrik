import React from "react";
import "./bryllupshelgen.css";
import kart from "../../assets/kart3.png";

export const Bryllupshelgen: React.FC = () => {
  return (
    <div>
      <h1>Velkommen til Romsdalen</h1>
      <p>Vi gleder oss til å dele helgen med dere!</p>
      <h1>Program</h1>
      <div className="subFrame">
        <h2>Fredag 3. juli</h2>
        <p>
          Vi starter feiringen fredag og håper så mange som mulig kommer på en bli-kjent-kveld på tunet på Grøtta fra klokken 17:00!
          Vi serverer enkel varmmat og det blir etter hvert låvequiz med snacks
          og noe godt i glasset. Låven er uisolert, kle deg etter været.
        </p>
        <h2>Lørdag 4. juli</h2>
        <p>
          Vielsen finner sted i Hen kirke klokken 13:00. Etter vielsen blir det servert
          forfriskninger på tunet på Grøtta mens brudeparet fotograferes og man venter på deres
          ankomst. Middagen serveres fra ca. 17:00. Etter maten åpner dansegulvet
          og baren på låven.
        </p>
        <h2>Søndag 5. juli</h2>
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