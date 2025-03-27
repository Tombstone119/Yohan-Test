import { Router } from "express";

import{
    getAllUsers,
    addMember,
    getUserById,
    updateUser,
    deleteMemberById,
    getUsersByDate,
    getUsersByMembershipStatus,

}
from "../controllers/userController.ts"


const router = Router();

// User routes
router
    .route("/user")
    .get(getAllUsers)
    .post(addMember);

router
    .route("/user/:userId")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteMemberById);

// Specialized user routes
router.get("/user/:date", getUsersByDate);
router.get("/user/:membership-status", getUsersByMembershipStatus);


export default router;