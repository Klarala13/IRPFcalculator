import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";

const Home = () => {
  return (
    <div className="flex flex-col p-12 lg:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Calcula tu IRPF</h1>
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
