import React from "react";
import "./onskeliste.css";

export const Onskeliste: React.FC = () => {
  return (
    <div>
      <h1>Ønskeliste</h1>
      <p>
        Vi ønsker oss aller mest at dere som er invitert har anledning til å
        komme, og vet at mange har lang (og kostbar) reisevei. <br /> Dersom
        dere
        <i> likevel </i> ønsker å gi en gave, setter vi alltid høyt
        <b> håndlagde/hjemmelagde ting</b> og <b>opplevelser</b> i Norge.
      </p>
      <p>
        Under har vi i tillegg samlet noen konkrete ting for dem som synes dette
        er enklest å forholde seg til. For at det ikke skal bli fem like maleri
        eller pledd har vi lagd et dokument dere kan endre på. Finner du noe du
        vil kjøpe, skriver du inn totalt antall kjøpt i kolonnen{" "}
        <i>Antall kjøpt</i>. Har noen allerede kjøpt noen, legger du til ditt
        antall og skriver inn den nye totalen — så vet de neste hvor mange som
        gjenstår.
      </p>
      <p className="onskeliste-rediger-tekst">
        Rediger direkte i vinduet under, eller{" "}
        <a
          href="https://docs.google.com/spreadsheets/d/1ykH2RiUDF1Pk37H5P2eQdcNjFjpebfh3bWMyAz82RvU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          åpne i ny fane
        </a>
        .
      </p>
      <iframe
        src="https://docs.google.com/spreadsheets/d/1ykH2RiUDF1Pk37H5P2eQdcNjFjpebfh3bWMyAz82RvU/edit?usp=sharing&embedded=true&rm=minimal"
        className="onskeliste-iframe"
        title="Ønskeliste"
      />
      <a
        href="https://docs.google.com/spreadsheets/d/1ykH2RiUDF1Pk37H5P2eQdcNjFjpebfh3bWMyAz82RvU/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="onskeliste-knapp"
      >
        Åpne ønskeliste
      </a>
    </div>
  );
};
