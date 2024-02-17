import 'dotenv/config';
import { app } from './config';

const port = process.env.PORT ?? 1789;

const server = app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});

export default server;
