
import attendanceService from "../services/attendanceService.ts";
import { handleError } from "../util/errorHandler.ts";
import HttpStatusCodes from "../util/statusCodes.ts";

import { Response, Request } from "express";


export const getAllAttendanceByUserId = async (req: Request, res: Response) :Promise<void> => {
    try{
        const { userId } = req.params;
        const allAttendance = await attendanceService.getAllAttendanceByUserId(userId)

        res.status(HttpStatusCodes.OK).json({
            success: true,allAttendance,
        });
        
    }catch(error){
        handleError(res,error);
    }
}