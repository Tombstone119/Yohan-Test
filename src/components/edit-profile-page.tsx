import React, { useState } from "react";
import { z } from "zod";

// Zod Schema for form validation
const EditProfileSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
  email: z.string().email({ message: "Invalid email address" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
  gender: z.enum(["male", "female", "other"]),
  membershipPlan: z.enum(["Basic", "Premium", "Ultimate"]),
});

// Type inference from Zod schema
type EditProfileFormData = z.infer<typeof EditProfileSchema>;

const EditProfilePage: React.FC = () => {
  // Initial user data (this can be fetched from your API)
  const initialUserData: EditProfileFormData = {
    name: "John Doe",
    phone: "+1234567890",
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    gender: "male",
    membershipPlan: "Premium",
  };

  const [formData, setFormData] = useState<EditProfileFormData>(initialUserData);
  const [errors, setErrors] = useState<Partial<Record<keyof EditProfileFormData, string>>>({});

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data using Zod
    const validationResult = EditProfileSchema.safeParse(formData);

    if (!validationResult.success) {
      // Convert Zod errors to a more usable format
      const errorObj = validationResult.error.errors.reduce(
        (acc, curr) => {
          acc[curr.path[0] as keyof EditProfileFormData] = curr.message;
          return acc;
        },
        {} as Partial<Record<keyof EditProfileFormData, string>>
      );

      setErrors(errorObj);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Here, you can send the form data to your backend API
    console.log("Updated user data:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#171813] p-8 rounded-lg shadow-xl w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className={`w-full px-3 py-2 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-500" : "border-white focus:ring-white"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className={`w-full px-3 py-2 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 ${
              errors.phone ? "border-red-500 focus:ring-red-500" : "border-white focus:ring-white"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className={`w-full px-3 py-2 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-white focus:ring-white"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Address Input */}
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
            className={`w-full px-3 py-2 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 ${
              errors.address ? "border-red-500 focus:ring-red-500" : "border-white focus:ring-white"
            }`}
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        {/* Gender Select */}
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 ${
              errors.gender ? "border-red-500 focus:ring-red-500" : "border-white focus:ring-white"
            }`}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>

        {/* Membership Plan Select */}
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="membershipPlan">
            Membership Plan
          </label>
          <select
            id="membershipPlan"
            name="membershipPlan"
            value={formData.membershipPlan}
            onChange={handleChange}
            required
            className={`w-full px-3 py-2 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 ${
              errors.membershipPlan ? "border-red-500 focus:ring-red-500" : "border-white focus:ring-white"
            }`}
          >
            <option value="Basic">Basic Plan</option>
            <option value="Premium">Premium Plan</option>
            <option value="Ultimate">Ultimate Plan</option>
          </select>
          {errors.membershipPlan && <p className="text-red-500 text-sm mt-1">{errors.membershipPlan}</p>}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;
