import express from 'express';
import morgan from 'morgan';
import servieces from './services';
import { EnvAppConfig } from './common/config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(
    session({
        secret: 'abcdasdasddsa',
        saveUninitialized: true,
        resave: true,
        cookie: { maxAge: 1000 * 60 * 60 }, //1 hour
    }),
);
app.use('/', servieces);

app.listen(EnvAppConfig.PORT, () => {
    console.log('Server started on port ' + EnvAppConfig.PORT);
    const connectDB = async () => {
        try {
            await mongoose.connect(`${EnvAppConfig.MONGO_URL}`);
            console.log('DB connected');
        } catch (error) {
            console.log(error);
        }
    };
    connectDB();
});
