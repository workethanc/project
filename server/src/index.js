import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import compression from 'compression';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 3000;
const devPort= 4000;

app.use(bodyParser.json());
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 14 * 24 * 60 * 60 * 1000  // 14 DAYS
    }
}));
app.use(cors());
app.use(compression());
app.use('/', express.static(path.join(__dirname, './../../client/public')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../client/public/index.html'));
});

app.listen(port, () => {
	console.log('Server is listenning on port :: ' + port);
});
