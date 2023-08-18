var mongoose = require('mongoose');
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@commentboardhackathon-vgqqg.mongodb.net/test?retryWrites=true&w=majority`
);
