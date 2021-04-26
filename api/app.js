let express = require('express');
const app = express();

app.listen(3000, () => {
  console.info('Server is running on 3000')
})
app.use(express.static('public'));
