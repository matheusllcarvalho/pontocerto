import Mongoose from 'Mongoose';

class Database {
  constructor(){
    this.init();

  }

  init(){
    var db = Mongoose.connection;
    db.on('error', console.error);
    db.once('open', function() {
      console.log('Conectado ao MongoDB.')
      // Vamos adicionar nossos Esquemas, Modelos e consultas aqui
    });
    Mongoose.connect('mongodb+srv://pontocerto:pontocerto@pontocerto-eo8yh.mongodb.net/admin?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

module.exports = new Database();





