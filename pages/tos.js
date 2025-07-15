import { useEffect } from 'react';

export default function Tos() {
  useEffect(() => {
    window.location.href = 'https://cataniaroleplay.it/tos.html'; // sostituisci con il link desiderato
  }, []);

  return (
    <div>
      <h1>Reindirizzamento in corso...</h1>
      <p>Se non vieni reindirizzato automaticamente, clicca <a href="https://cataniaroleplay.it/tos.html">qui</a>.</p>
    </div>
  );
}
