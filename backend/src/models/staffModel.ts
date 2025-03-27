import { Schema, model } from "mongoose"

const staffSchema = new Schema({
  staffId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["Admin", "Trainer", "Receptionist", "Cleaner"], required: true },
  salary: { type: Number, required: true }
}, { timestamps: true });

const Staff = model("Staff", staffSchema);

export default Staff;
