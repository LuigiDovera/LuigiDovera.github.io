import mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const url = `mongodb://mongo:mongo@db/ifood?authSource=admin`;

export default mongoose.connect(url, options);
