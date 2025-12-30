import React, { useEffect } from "react";

export const RsvpLanding: React.FC = () => {
    useEffect(() => {
        window.location.replace(
        "https://forms.gle/VCi8hBqgGxLbVcZC8"
        );
    }, []);

    return <p>Åpner skjemaet… Ta kontakt hvis dette ikke fungerer!</p>;
}