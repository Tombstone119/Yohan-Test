import React, { useState } from "react";
import { z } from "zod";

// Zod Schema for Form Validation
const MembershipSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number" }),
  email: z.string().email({ message: "Invalid email address" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
  membershipPlan: z.enum(["Basic", "Premium"], {
    errorMap: () => ({ message: "Please select a valid membership plan" }),
  }),
  gender: z.enum(["male", "female"]).optional(),
});

// Type inference from Zod schema
type MembershipFormData = z.infer<typeof MembershipSchema>;

const MembershipForm: React.FC = () => {
  const [formData, setFormData] = useState<MembershipFormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    membershipPlan: undefined!, // Use non-null assertion or provide an initial value
    gender: undefined, // Optional field can be undefined
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof MembershipFormData, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value === "" ? undefined : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Validate the entire form data
      const validationResult = MembershipSchema.safeParse(formData);

      if (!validationResult.success) {
        // Convert Zod errors to a more usable format
        const errorObj = validationResult.error.errors.reduce((acc, curr) => {
          acc[curr.path[0] as keyof MembershipFormData] = curr.message;
          return acc;
        }, {} as Partial<Record<keyof MembershipFormData, string>>);

        setErrors(errorObj);
        return;
      }

      // Clear previous errors if validation passes
      setErrors({});

      const response = await fetch("/apis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Membership registered successfully!");
        // Reset form after successful submission
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          membershipPlan: undefined!,
          gender: undefined,
        });
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#171813] p-8 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Membership Registration
        </h2>

        {/* ... (previous input fields remain the same) */}

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
            className={`w-full px-3 py-2 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 
      ${
        errors.name
          ? "border-red-500 focus:ring-red-500"
          : "border-white focus:ring-white"
      }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
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
            className={`w-full px-3 py-2 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 
      ${
        errors.phone
          ? "border-red-500 focus:ring-red-500"
          : "border-white focus:ring-white"
      }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
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
            className={`w-full px-3 py-2 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 
      ${
        errors.email
          ? "border-red-500 focus:ring-red-500"
          : "border-white focus:ring-white"
      }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Gender Select */}
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender ?? ""}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 
      ${
        errors.gender
          ? "border-red-500 focus:ring-red-500"
          : "border-white focus:ring-white"
      }`}
          >
            <option value="">Prefer To Not State</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
          )}
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
            className={`w-full px-3 py-2 bg-gray-800 text-white border rounded focus:outline-none focus:ring-2 
      ${
        errors.membershipPlan
          ? "border-red-500 focus:ring-red-500"
          : "border-white focus:ring-white"
      }`}
          >
            <option value="Basic">Basic Plan</option>
            <option value="Premium">Premium Plan</option>
            <option value="Ultimate">Ultimate Plan</option>
          </select>
          {errors.membershipPlan && (
            <p className="text-red-500 text-sm mt-1">{errors.membershipPlan}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 bg-white text-gray-600 rounded hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipForm;
