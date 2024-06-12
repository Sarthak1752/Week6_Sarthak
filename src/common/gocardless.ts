// import GoCardless from 'gocardless-nodejs';
const GoCardless = require("gocardless-nodejs");


const gocardless = GoCardless({
  access_token: process.env.GOCARDLESS_ACCESS_TOKEN || 'sandbox_YOUR_ACCESS_TOKEN',
  environment: 'sandbox', 
});

export default gocardless;
