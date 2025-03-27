import express from "express";
const router = express.Router();

// Importing controllers for products
import{
  getAllUsers,
  addMember,
  getUserById,
  updateUser,
  deleteMemberById,
  getUsersByDate,
  getUsersByMembershipStatus,

} from "../controllers/userController.ts"

// Middleware to parse JSON request bodies
router.use(express.json());

// --------------------------------------------------------
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
