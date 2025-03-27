import User from "../models/userModel.ts";
import { IUser } from "../types/user.ts";

async function getAllUser() {
    const allUser = await User.find();
    return allUser;

}


async function addMember(user: IUser) {
    const newMember = new User({
        staffId: user.staffId,
        name: user.name,
        phone: user.phone,
        email: user.email,
        address: user.address,
        height: user.height,
        weight: user.weight,
        membershipPlan: user.membershipPlan,
        dietPlan: user.dietPlan,
        schedulePlan: user.schedulePlan,
        membershipStatus: user.membershipStatus,
        startDate: user.startDate,
        endDate: user.endDate,
        membershipDuration: user.membershipDuration,
        attendedDates: user.attendedDates,
        role: user.role,
        accountStatus: user.accountStatus,
        payment: user.payment
    });

    await newMember.save();
    return newMember;
}

async function getUserById(id: string) {
    const Member = await User.findOne({ userId: id })
    return Member;
}


async function updateUser({
    userId,
    user,
}: {
    userId: string;
    user: IUser;
}) {
    const updateduserMember = await User.findOneAndUpdate({ userId }, {
        staffId: user.staffId,
        name: user.name,
        phone: user.phone,
        email: user.email,
        address: user.address,
        height: user.height,
        weight: user.weight,
        membershipPlan: user.membershipPlan,
        dietPlan: user.dietPlan,
        schedulePlan: user.schedulePlan,
        membershipStatus: user.membershipStatus,
        startDate: user.startDate,
        endDate: user.endDate,
        membershipDuration: user.membershipDuration,
        attendedDates: user.attendedDates,
        role: user.role,
        accountStatus: user.accountStatus,
        payment: user.payment
    },
        { new: true }
    );
    if (!updateduserMember) {
        throw new Error("user Member not found for update");
    }
    return updateduserMember;
}

async function deleteMemberById(userId: string) {
    const deletedMember = await User.find({ userId });
    return deletedMember;

}

async function getUsersByDate(date: string | Date) {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0); // Start of the day

    const end = new Date(date);
    end.setHours(23, 59, 59, 999); // End of the day

    return await User.find({
        endDate: { $gte: start, $lte: end },
    });
}


async function getUsersByMembershipStatus(status: IUser) {
    


    return await User.find({
        membershipStatus: status.membershipStatus,
    });
}

export default {
    getAllUser,
    addMember,
    getUserById,
    updateUser,
    deleteMemberById,
    getUsersByDate,
    getUsersByMembershipStatus,
};