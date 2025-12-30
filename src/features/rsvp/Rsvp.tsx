import React from "react";
import { Link } from "react-router-dom";

export const Rsvp: React.FC = () => {
    return ( 
        <div>
            <h1>Vi gleder oss til å feire med deg!</h1>
            <p>For å registrere at du kommer, vennligst bruk skjemaet her: <Link to="/rsvp-form-a876d" target="_blank" rel="noreferrer noopener">Lenke til skjema</Link></p>
            <p>Dersom du ønsker det, kan du også ta direkte kontakt med oss for å svare.</p>
            <p>Takk for at du svarer innen 31. mars. Vi gleder oss til å se deg!</p>
        </div>
    )
}