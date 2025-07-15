export default function Tos() {
  return null; // Non viene mai renderizzato perché scatta il redirect
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://cataniaroleplay.it/tos.html', // 👉 sostituisci con il tuo link esterno
      permanent: false, // false = redirect temporaneo (302), true = permanente (301)
    },
  };
}
