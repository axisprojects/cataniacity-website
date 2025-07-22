export default function handler(req, res) {
  res.writeHead(302, { Location: 'https://docs.google.com/document/d/1cRjeF8IMw-qmdChophEoqGgFxgi-B2CUh6uDVZCUpPM/edit?usp=sharing' }); // cambia con il tuo link
  res.end();
}
