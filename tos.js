export default function handler(req, res) {
  res.writeHead(302, { Location: 'https://docs.google.com/document/d/1JIYTozInWPClzAAvCCNCrW7L--61kITukCcLUFocIDQ/edit?usp=sharing' }); // cambia con il tuo link
  res.end();
}
