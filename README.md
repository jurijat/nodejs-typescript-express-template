# Fast bootstrap template

What is the goal? Bootstrapping without headache. A simple NodeJS skeleton that is extendable easily.

> [!IMPORTANT]
> Works with NodeJS >= 14

## Install

1. Copy `.template.env` to `.env`
2. Adapt if needed the configuration in `.env`
3. Install packages with `npm ci`

For autoformatting in VSCode install the `prettier` extension.

## Start

```javascript
// for development mode
npm run dev

// for normal startup
npm run start
```

## Included

This is a simple repo for bootstrapping a NodeJS + TypeScript + Express server.
`nodemon` is used for developing.

## Structure

- `src/server` should contain all the web-server logic
  - `src/server/routes` should define all routers
  - `src/server/middlewares` contains all custom middlewares like exception handling, validation, etc.
- `src/handlers` should contain all the logic. Handlers act as a logical middleware between `router` and `repository` ( that's not a part of this repo )
