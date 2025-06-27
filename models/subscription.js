const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    plan: { type: String, required: true },
    mealTypes: { type: [String], required: true },
    deliveryDays: { type: [String], required: true },
    allergies: { type: String },
    totalPrice: { type: Number, required: true }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);