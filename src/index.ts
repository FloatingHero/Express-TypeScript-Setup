import express from 'express';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.routes';

const app: express.Application = express();
dotenv.config();

app.set('port', process.env.APP_PORT || 3000);

//routes
app.use(apiRoutes);

app.listen(app.get('port'), () => {
  console.log(`${process.env.APP_NAME} on port ${app.get('port')}`);
});
