import React from "react";
import "./bryllupshelgen.css";
import kart from "../../assets/kart3.png";

export const Bryllupshelgen: React.FC = () => {
  return (
    <div>
      <h1>Velkommen til Romsdalen</h1>
      <p>Vi gleder oss til å dele helgen med dere!</p>
      <p>
        <i>
          Vielsen finner sted i Hen Kirke,{" "}
          <a
            href="https://maps.app.goo.gl/N87BYuWaYYJCDPbdA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hensvegen 121, 6320 Isfjorden
          </a>
          .
        </i>
        <br />
        <i>
          Bryllupsfesten blir avholdt på Grøtta,{" "}
          <a
            href="https://maps.app.goo.gl/eWcAPnoXppujB11b6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dalsbygdveien 88, 6320 Isfjorden
          </a>
          .
        </i>
      </p>
      <h2>Program</h2>
      <div className="subFrame">
        <h3>Fredag 3. juli</h3>
        <p>
          Vi starter feiringen fredag og håper dere alle kommer på en
          bli-kjent-kveld på tunet på Grøtta! Vi ordner enkel varmmat og noe
          godt i glasset fra klokken 17:00, og ca. 19:00 starter vi en låvequiz.
          Låven er uisolert - kle deg etter været.
        </p>
        <h3>Lørdag 4. juli</h3>
        <p>
          Vielsen starter i Hen kirke klokken 13:00 og gjester bør være på plass
          rundt 12:30. Etter vielsen blir det servert mat og forfriskninger på
          tunet på Grøtta, mens brudeparet fotograferes og man venter på deres
          ankomst. Vi forventer å sette oss til bords for middag ca. 17:30.
          Etter maten åpner dansegulvet og baren på låven.
        </p>
        <h3>Søndag 5. juli</h3>
        <p>
          Alle som vil stikke innom dagen derpå er hjertelig velkomne til å
          komme til tunet for å spise rester, leke hagespill og debriefe festen
          sammen. De nygifte vil være her og etter hvert jobbe med å rigge ned
          etter festen.
        </p>
      </div>
      <div className="kartContainer">
        <div className="kart">
          <img src={kart} alt="kartbilde" />
        </div>
      </div>
      <a href={kart} target="_blank" rel="noopener noreferrer">
        <i>Se kartet i stort format</i>
      </a>
    </div>
  );
};
