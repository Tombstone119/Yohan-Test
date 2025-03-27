import { IStaff } from "../types/staff.ts";
import Staff from "../models/staffModel.ts";

async function getAllStaff(){
    const allStaff = await Staff.find();
    return allStaff;
    
}

async function addStaffMember(staff: IStaff){
    const newStaffMember = new Staff({
        name: staff.name,
        address: staff.address,
        phone: staff.phone,
        email: staff.email,
        role: staff.role,
        salary: staff.salary,
    });
    await newStaffMember.save()
    return newStaffMember;
}

async function getStaffById(id: string){
    const staffMember = await Staff.findOne({ staffId: id })
    return staffMember;
}

async function getStaffByRole(role: string){
    const allStaff = await Staff.find({role});
    return allStaff;
    
}


async function updateStaff({
    staffId,
    staff,
}:{
    staffId: string;
    staff: IStaff;
}){
    const updatedStaffMember = await Staff.findOneAndUpdate({staffId}, {
        name: staff.name,
        address: staff.address,
        phone: staff.phone,
        email: staff.email,
        role: staff.role,
        salary: staff.salary,
    },
    {new : true}
);
    if (!updatedStaffMember) {
        throw new Error("Staff Member not found for update");
    }
    return updatedStaffMember;
}

async function deleteStaffById(staffId: string){
    const deletedStaffMember = await Staff.find({staffId});
    return deletedStaffMember;
    
}

export default{
    getAllStaff,
    addStaffMember,
    getStaffById,
    getStaffByRole,
    updateStaff,
    deleteStaffById,
}