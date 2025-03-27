import { Schema, model } from "mongoose"

const userSchema = new Schema({
    staffId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    membershipPlan: { type: String, required: true }, // e.g., "Basic", "Premium"
    dietPlan: { type: String },
    gender: { type: String, required: false, enum: ["male", "female"] },
    schedulePlan: { type: String },
    membershipStatus: { type: String, enum: ["Active", "Expired", "Pending"], required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    membershipDuration: { type: Number, required: true }, // in months
    attendedDates: [{ type: Date }], // List of attendance dates
    role: { type: String, enum: ["Admin", "Staff", "Member"], required: true },
    accountStatus: { type: String, enum: ["Active", "Inactive"], required: true },
    payment: {
        amount: { type: Number, required: true },
        status: { type: String, enum: ["Paid", "Pending", "Overdue"], required: true },
        method: { type: String, enum: ["Cash", "Card", "Online"] }
    }
}, { timestamps: true });

const User = model("user", userSchema);

export default User;
