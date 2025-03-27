import { Request, Response } from "express";
import userService from "../services/userService.ts";
import HttpStatusCodes from "../util/statusCodes.ts";
import { handleError } from "../util/errorHandler.ts";
import { IUser } from "../types/user.ts";

// Get all users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const allUsers = await userService.getAllUser();
        res.status(HttpStatusCodes.OK).json({ success: true, allUsers });
    } catch (error) {
        handleError(res, error);
    }
};

// Add a new user
export const addMember = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData: IUser = req.body;
        const newUser = await userService.addMember(userData);
        res.status(HttpStatusCodes.CREATED).json({ success: true, newUser });
    } catch (error) {
        handleError(res, error);
    }
};

// Get a user by ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        if (!user) {
            res.status(HttpStatusCodes.NOT_FOUND).json({ success: false, message: "User not found" });
            return;
        }
        res.status(HttpStatusCodes.OK).json({ success: true, user });
    } catch (error) {
        handleError(res, error);
    }
};

// Update user details
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;
        const userData: IUser = req.body;
        const updatedUser = await userService.updateUser({ userId, user: userData });

        if (!updatedUser) {
            res.status(HttpStatusCodes.NOT_FOUND).json({ success: false, message: "User not found" });
            return;
        }
        res.status(HttpStatusCodes.OK).json({ success: true, updatedUser });
    } catch (error) {
        handleError(res, error);
    }
};

// Delete a user
export const deleteMemberById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;
        const deletedUser = await userService.deleteMemberById(userId);

        if (!deletedUser) {
            res.status(HttpStatusCodes.NOT_FOUND).json({ success: false, message: "User not found" });
            return;
        }
        res.status(HttpStatusCodes.OK).json({ success: true, message: "User deleted successfully", deletedUser });
    } catch (error) {
        handleError(res, error);
    }
};

// Get users by date
export const getUsersByDate = async (req: Request, res: Response): Promise<void> => {
    try {
        const { date } = req.params;
        const users = await userService.getUsersByDate(date);
        res.status(HttpStatusCodes.OK).json({ success: true, users });
    } catch (error) {
        handleError(res, error);
    }
};

// Get users by membership status
export const getUsersByMembershipStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const { status } = req.params;
        const users = await userService.getUsersByMembershipStatus({ membershipStatus: status } as IUser);
        res.status(HttpStatusCodes.OK).json({ success: true, users });
    } catch (error) {
        handleError(res, error);
    }
};