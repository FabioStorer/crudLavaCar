import express from 'express';
import 'dotenv/config'
import './config/db.js';
import client_router from './routes/client_route.js';
import employee_router from './routes/employee_route.js';
import vehicle_router from './routes/vehicle_route.js';
import washing_router from './routes/washing_route.js';

const app = express();

app.use(express.json());

app.use('/client', client_router);
app.use('/employee', employee_router);
app.use('/vehicle', vehicle_router);
app.use('/washing', washing_router);

app.listen(process.env.API_PORT, () => {
    console.log(`Server running at port ${process.env.API_PORT}`);
});