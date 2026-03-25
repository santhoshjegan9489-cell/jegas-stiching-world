import { useRef } from "react";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import OrderForm, { OrderFormRef } from "@/components/OrderForm";

const services = [
  { title: "Blouse Stitching", description: "Perfect fitting and trendy designs", emoji: "👗" },
  { title: "Salwar Stitching", description: "Comfortable and stylish wear", emoji: "🪡" },
  { title: "Kids Wear", description: "Cute and comfortable designs", emoji: "👶" },
];

const Index = () => {
  const formRef = useRef<OrderFormRef>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const handleOrder = (service: string) => {
    formRef.current?.setService(service);
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-12 space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} onOrder={() => handleOrder(s.title)} />
          ))}
        </section>
        <div ref={formSectionRef}>
          <OrderForm ref={formRef} />
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground text-center py-5">
        <p>© 2026 Jega's Stitching World</p>
      </footer>
    </div>
  );
};

export default Index;
