import Attendance from "../models/attendanceModel.ts";
import { IAttendance } from "../types/attendance.ts";

async function getAllAttendanceByUserId(userId: string) {
    const attendanceList = await Attendance.find({ userId })
    return attendanceList;
}

export default{
    getAllAttendanceByUserId
}