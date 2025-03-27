interface PricingCardProps {
  img: string; // Image URL or path
  type: string; // The type/label for the pricing plan (e.g., "Basic Plan")
  price: number; // Price of the plan
  features: string[]; // Array of feature strings
}

const PricingCard: React.FC<PricingCardProps> = ({
  img,
  type,
  price,
  features,
}) => {
  return (
    <div className="pricingcard py-6 mt-6 flex flex-col justify-between items-center gap-5 bg-black border-2 border-red-600 rounded-lg shadow-lg p-5 w-full sm:w-[30%] lg:w-[25%]">
    {/* Image */}
    <img src={img} alt="pricing plan image"  />
    
    {/* Card Content */}
    <p className="text-2xl font-semibold text-white">{type}</p>
    <p className="font-bold text-3xl text-white">${price}</p>

    {/* Features List */}
    <ul className="flex flex-col gap-3 text-sm text-center text-white">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>

    {/* Add a button for action */}
    <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-full font-semibold hover:bg-red-800 hover:text-white transition-colors ransition-all duration-300 ease-in-out">
      Get Started
    </button>
  </div>
  );
};

export default PricingCard;
