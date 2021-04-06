const mongoose = require("mongoose");

const documentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
    required: false,
  },
});

const Document = (module.exports = mongoose.model("Document", documentSchema));

module.exports.getDocumentById = function (id, callback) {
  Document.findById({ _id: id }, callback);
};

module.exports.getDocumentByNameAndEmail = function (document, callBack) {
  Document.findOne({ email: document.email, name: document.name }, callBack);
};

module.exports.getDocumentsByEmail = function (email, callBack) {
  Document.find({ email: email }, callBack);
};

module.exports.addDocument = function (obj, callback) {
  obj.save(callback);
};

module.exports.updateComments = function (obj, callback) {
  Document.updateOne(
    { email: obj.email, name: obj.name },
    { $set: { comments: obj.comments } },
    callback
  );
};

module.exports.deleteDocument = function (obj, callback) {
  Document.deleteOne({ email: obj.email, name: obj.name }, callback);
};
