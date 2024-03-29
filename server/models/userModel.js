const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }]
});

const User = mongoose.model('User', userSchema);
exports.modules = User;