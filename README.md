# Installation

    npm install

If you don't have `babel` installed globally already, you should also install it:

    npm install babel

# Running development

    npm run develop

After console message `Start: 3000`, project should be running on http://localhost:3000

You can optionally change host and/or port by setting those two environment variables:

- `DEV_IP` - host (default `localhost`)
- `APP_SERVER_PORT` - port (default `3000`)


# Production build

Set environment variable:

- `NODE_ENV=production`

Execute command:

    npm run compile:prod