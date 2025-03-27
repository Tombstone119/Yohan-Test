
import Navbar from "../components/header-navigator";
import Footer from "../components/footer";
import MembershipForm from "../components/add-members-page";
import PricingSection from "../components/pricing-section";

export default function AddMembers() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Fixed to the top */}
      <div className="fixed top-0 left-0 w-full bg-white z-[999] shadow-md">
        <Navbar />
      </div>

      {/* Main content - Pushes footer to the bottom */}
      <div className="flex-1 text-center pt-16">
        {" "}
        {/* pt-16 is for top padding to prevent navbar overlap */}
        <div>
          <div>
            <PricingSection/>
            <MembershipForm/>
          </div>
        </div>
      </div>
      {/* Footer - Fixed to the bottom */}
      <div className="bg-red-600 text-white py-1">
        <Footer />
      </div>
    </div>

  );
}
