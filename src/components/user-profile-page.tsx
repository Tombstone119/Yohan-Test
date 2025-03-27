import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

// Sample user data (This can be dynamic in a real-world scenario)
interface UserData {
  name: string;
  phone: string;
  email: string;
  address: string;
  gender: string;
  membershipPlan: string;
}

// Mock user data
const userData: UserData = {
  name: "John Doe",
  phone: "+1234567890",
  email: "john.doe@example.com",
  address: "123 Main St, Springfield, IL",
  gender: "male",
  membershipPlan: "Premium",
};

// Assuming you're handling deletion via an API call or state
const handleEndMembership = async () => {
  // Example: Call an API to delete membership
  const response = await fetch("/api/end-membership", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: "user-id" }), // Replace with actual user data
  });

  if (response.ok) {
    alert("Membership ended successfully!");
    // Handle state update or redirect after deletion if necessary
  } else {
    alert("Failed to end membership");
  }
};

const UserProfile: React.FC = () => {
  const navigate = useNavigate();

  // Function to navigate to edit profile page
  const handleEditProfile = () => {
    navigate("/edit-user-profile"); 
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="bg-[#171813] p-8 rounded-lg shadow-xl w-full max-w-md text-white">
        <div className="flex justify-center mb-6">
          <FaRegUser className="text-red-600 text-5xl" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">User Profile</h2>

        <div className="space-y-4">
          {/* Display Name */}
          <div className="flex justify-between">
            <span className="font-semibold">Name:</span>
            <span>{userData.name}</span>
          </div>

          {/* Display Phone */}
          <div className="flex justify-between">
            <span className="font-semibold">Phone:</span>
            <span>{userData.phone}</span>
          </div>

          {/* Display Email */}
          <div className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span>{userData.email}</span>
          </div>

          {/* Display Address */}
          <div className="flex justify-between">
            <span className="font-semibold">Address:</span>
            <span>{userData.address}</span>
          </div>

          {/* Display Gender */}
          <div className="flex justify-between">
            <span className="font-semibold">Gender:</span>
            <span>{userData.gender}</span>
          </div>

          {/* Display Membership Plan */}
          <div className="flex justify-between">
            <span className="font-semibold">Membership Plan:</span>
            <span>{userData.membershipPlan}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-between space-x-4">
          {/* Edit Profile Button */}
          <button
            onClick={handleEditProfile}
            className="py-2 px-4 bg-red-600 text-white rounded-full transition-all duration-300 hover:bg-red-700"
          >
            Edit Profile
          </button>

          {/* End Membership Button */}
          <button
            onClick={handleEndMembership}
            className="py-2 px-4 bg-gray-700 text-white rounded-full transition-all duration-300 hover:bg-gray-800"
          >
            End Membership
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
