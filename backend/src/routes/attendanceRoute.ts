import { Router } from "express";
const router = Router();


import{
    getAllAttendanceByUserId,
}from "../controllers/attendanceController.ts"

router.route("/attendance").get(getAllAttendanceByUserId)


export default router;