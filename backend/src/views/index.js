const express = require('express');
const app = express();
const Routes = require('../Routes/linktree.route');
app.use(express.json());

// Middleware untuk mengurai data url-encoded
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/api', Routes);

app.listen(4000, () => {
  console.log(`server running on http://localhost:4000`);
});