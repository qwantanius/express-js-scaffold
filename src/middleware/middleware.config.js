import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

export const middleware = [
    cors(),
    morgan('combined'),
    cookieParser(),
    helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            'script-src': ["'self'"],
            'style-src': null,
        },
    }),
];
