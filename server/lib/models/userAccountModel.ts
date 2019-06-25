import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserAccountSchema = new Schema({
    recordtype: {
        type: String,
        required: 'Requires recordType'
    },
    email: {
        type: String,
        required: 'Requires email'
    },
    version: {
        type: String,
        required: 'Requires version'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
