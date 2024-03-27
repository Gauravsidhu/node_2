const path = require('path');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030;
console.log(path.join(__dirname, '../express'));
const sttcPthl = path.join(__dirname, '../paths');
app.use(express.static(sttcPthl))
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

