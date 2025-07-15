export default function handler(req, res) {
  res.writeHead(302, { Location: 'https://docs.google.com/document/d/1fdb8bnLd0lLsuXYBrKhC4jz6nmBoqRmEvX_zK3723TI/edit?usp=sharing' }); // cambia con il tuo link
  res.end();
}
