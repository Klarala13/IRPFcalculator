import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      <main className="flex flex-col items-center sm:items-start gap-6 p-8 sm:p-12 md:p-16 lg:p-20 max-w-3xl mx-auto">
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
