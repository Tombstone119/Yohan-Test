import { Schema, model } from "mongoose"

const attendanceSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    attendDate: { type: Date, required: true }
}, { timestamps: true });

const Attendance = model("Attendance", attendanceSchema);

export default Attendance;
