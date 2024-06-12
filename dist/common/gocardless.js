"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import GoCardless from 'gocardless-nodejs';
const GoCardless = require("gocardless-nodejs");
const gocardless = GoCardless({
    access_token: process.env.GOCARDLESS_ACCESS_TOKEN || 'sandbox_YOUR_ACCESS_TOKEN',
    environment: 'sandbox', // Use 'live' for production
});
exports.default = gocardless;
//# sourceMappingURL=gocardless.js.map