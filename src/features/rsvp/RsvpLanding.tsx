import React, { useEffect } from "react";

export const RsvpLanding: React.FC = () => {
useEffect(() => {
    const redirected = sessionStorage.getItem("rsvpRedirected");

    if (!redirected) {
      sessionStorage.setItem("rsvpRedirected", "true");
      window.location.replace(
        "https://forms.gle/VCi8hBqgGxLbVcZC8"
      );
    }
    // Hvis allerede redirectet, gjør ingenting
  }, []);

  const resetRedirect = () => {
    sessionStorage.removeItem("rsvpRedirected");
    alert("Redirect er nå nullstilt. Last siden på nytt for å bli sendt til skjemaet igjen.");
  };

  return (
    <div>
      <p>Åpner skjemaet… Ta kontakt hvis dette ikke fungerer!</p>
      <button onClick={resetRedirect}>Nullstill redirect</button>
    </div>);
}