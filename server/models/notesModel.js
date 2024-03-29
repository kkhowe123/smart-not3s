const mongoose = require('mongoose');
const { Schema } = mongoose;
const noteSchema = new Schema({
    title: String,
    content: String,
    photos: [String],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    sharedWith: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

const Note =mongoose.model('Note', noteSchema);

module.exports = Note;
