import { Request, Response } from "express";
import staffService from "../services/staffService.ts";
import HttpStatusCodes from "../util/statusCodes.ts";
import { handleError } from "../util/errorHandler.ts";
import { IStaff } from "../types/staff.ts";

// Get all staff members
export const getAllStaff = async (req: Request, res: Response): Promise<void> => {
    try {
        const allStaff = await staffService.getAllStaff();
        res.status(HttpStatusCodes.OK).json({ success: true, allStaff });
    } catch (error) {
        handleError(res, error);
    }
};

// Add a new staff member
export const addStaffMember = async (req: Request, res: Response): Promise<void> => {
    try {
        const staffData: IStaff = req.body;
        const newStaff = await staffService.addStaffMember(staffData);
        res.status(HttpStatusCodes.CREATED).json({ success: true, newStaff });
    } catch (error) {
        handleError(res, error);
    }
};

// Get a staff member by ID
export const getStaffById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const staffMember = await staffService.getStaffById(id);
        if (!staffMember) {
            res.status(HttpStatusCodes.NOT_FOUND).json({ success: false, message: "Staff member not found" });
            return;
        }
        res.status(HttpStatusCodes.OK).json({ success: true, staffMember });
    } catch (error) {
        handleError(res, error);
    }
};

// Get staff members by role
export const getStaffByRole = async (req: Request, res: Response): Promise<void> => {
    try {
        const { role } = req.params;
        const staffByRole = await staffService.getStaffByRole(role);
        res.status(HttpStatusCodes.OK).json({ success: true, staffByRole });
    } catch (error) {
        handleError(res, error);
    }
};

// Update staff member details
export const updateStaff = async (req: Request, res: Response): Promise<void> => {
    try {
        const { staffId } = req.params;
        const staffData: IStaff = req.body;
        const updatedStaff = await staffService.updateStaff({ staffId, staff: staffData });

        if (!updatedStaff) {
            res.status(HttpStatusCodes.NOT_FOUND).json({ success: false, message: "Staff member not found" });
            return;
        }
        res.status(HttpStatusCodes.OK).json({ success: true, updatedStaff });
    } catch (error) {
        handleError(res, error);
    }
};

// Delete a staff member
export const deleteStaffById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { staffId } = req.params;
        const deletedStaff = await staffService.deleteStaffById(staffId);

        if (!deletedStaff) {
            res.status(HttpStatusCodes.NOT_FOUND).json({ success: false, message: "Staff member not found" });
            return;
        }
        res.status(HttpStatusCodes.OK).json({ success: true, message: "Staff member deleted successfully", deletedStaff });
    } catch (error) {
        handleError(res, error);
    }
};
