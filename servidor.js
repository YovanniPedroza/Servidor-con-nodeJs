const http = require('http');
const chalk = require('chalk'); // Importa chalk
const host = "localhost";
const port = "8080";

const server = http.createServer((req, res) => {
  if (req.url === '/info') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = {
      nombre: 'Yovanni Pedroza',
      mensaje: 'Hola, la vida es una sola. Por eso hay que vivirla al máximo.'
    };
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

// Imprime el mensaje de inicio en la consola con formato en verde
server.listen(port, () => {
  const url = `http://${host}:${port}`;
  const coloredMessage = chalk.green(`Servidor corriendo en ${url}`);
  console.log(coloredMessage);
});

