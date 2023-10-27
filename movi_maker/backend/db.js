const mongoose = require('mongoose');
const conectar = () => {
  mongoose.connect('mongodb+srv://juangnssudamericano:ycntwg3bUtHrQikT@cluster0.2rah27u.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((data) => { console.log('MONGODB conectado.') })
    .catch((error) => { console.log(`[error] - ${error}`) })
}
module.exports = conectar