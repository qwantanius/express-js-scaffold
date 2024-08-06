import { scopePerRequest } from 'awilix-express';
import dotenv from 'dotenv';
import express from 'express';

import { container } from './src/global-container.js';
import { middleware } from './src/middleware/middleware.config.js';
import { registerAllRoutes } from './src/routes.js';
import { getStats } from './src/sys/get-stats.sys.js';

const app = express();

app.use(middleware);
app.use(scopePerRequest(container));

registerAllRoutes(app);

const config = dotenv.config({ path: '.env' }).parsed;

const PORT = config.APP_PORT || 3_000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    setInterval(getStats, 10_000);
});
