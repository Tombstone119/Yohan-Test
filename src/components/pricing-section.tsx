import PricingCard from "./pricing-card";

interface PricingPlan {
  img: string;
  type: string;
  price: number;
  features: string[];
}

const PricingSection: React.FC = () => {
  const pricingData: PricingPlan[] = [
    {
      img: "/images/BodyBuilder1.png",
      type: "Basic Plan",
      price: 19.99,
      features: ["Free Hand", "Gym Fitness", "Weight Loss", "Personal Trainer", "Cycling"]
    },
    {
      img: "/images/BodyBuilder1.png",
      type: "Premium Plan",
      price: 39.99,
      features: ["Free Hand", "Gym Fitness", "Weight Loss", "Personal Trainer", "Cycling", "Yoga", "Nutrition Plan"]
    },
    {
      img: "/images/BodyBuilder1.png",
      type: "Ultimate Plan",
      price: 59.99,
      features: ["Free Hand", "Gym Fitness", "Weight Loss", "Personal Trainer", "Cycling", "Yoga", "Nutrition Plan", "24/7 Support"]
    }
  ];

  return (
    <div className="flex gap-4 justify-around bg-black">
      {pricingData.map((plan, index) => (
        <PricingCard
          key={index}
          img={plan.img}
          type={plan.type}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
  );
}

export default PricingSection;
