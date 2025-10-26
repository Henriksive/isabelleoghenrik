import React from "react";

export const Lokasjon: React.FC = () => {
  return (
    <div>
      <h1>Lokasjon</h1>
      <p>Her står det noe om hvor i verden dette foregår.</p>
      <h1>Ankomst</h1>
      <p>
        Det er flere gode reisemuligheter til Isfjorden/Åndalsnes. Det er
        imidlertid lite kollektivtilbud innad i kommunen, så dersom man ikke
        kommer i egen bil kan det være lurt å sjekke opp om det er mulighet for
        intern transport ved å sitte på i andre biler. Ta kontakt med oss dersom
        du er usikker!
      </p>
      <h2>Bil</h2>
      <p>Det tar ca 5,5 timer å kjøre til Isfjorden fra Oslo</p>
      <h2>Tog</h2>
      <p>
        Det går tog fra Dombås til Åndalsnes som korresponderer med
        Trondheimsbanen.
      </p>
      <h2>Fly</h2>
      <p>
        Nærmeste flyplass er Molde (1 time unna). Ankommer man hit kan det være
        lurt å avklare med oss på forhånd, så ordner vi med henting. Det er også
        mulig å fly til Ålesund og ta buss fra Ålesund-Isfjorden
      </p>
    </div>
  );
};
