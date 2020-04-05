const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.contentful_space_id,
  accessToken: process.env.contentful_access_token
});

export default client;
