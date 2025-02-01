import Footer from "@/app/components/Footer";
import IRPFForm from "@/app/components/IRPFForm";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      <IRPFForm />
      <Footer />
    </div>
  );
};

export default Home;
