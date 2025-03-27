import { Router } from "express";

import{
    getAllStaff,
    addStaffMember,
    getStaffById,
    getStaffByRole,
    updateStaff,
    deleteStaffById,
}
from "../controllers/staffController.ts"

const router = Router();

// User routes
router
    .route("/staff")
    .get(getAllStaff)
    .post(addStaffMember);

router
    .route("/staff/:staffId")
    .get(getStaffById)
    .put(updateStaff)
    .delete(deleteStaffById);

// Specialized user routes

    router.get("/staff/:role", getStaffByRole);


export default router;