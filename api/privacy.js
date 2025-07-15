export default function handler(req, res) {
  res.writeHead(302, { Location: 'https://docs.google.com/document/d/12c6Dj4mXFBmoJP7K2-8-WgW4kRFCErP1hMBHMVLHe1g/edit?usp=sharing' }); // cambia con il tuo link
  res.end();
}
