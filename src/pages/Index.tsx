import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Stethoscope, Calculator, ClipboardCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <Features />
        
        {/* Информационный раздел */}
        <section className="py-16 bg-medical-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Почему стоит использовать наши калькуляторы?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Современные подходы к оценке активности ревматологических заболеваний
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-medical-100 text-medical">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Клинически валидированы</h3>
                <p className="text-gray-600">
                  Все калькуляторы основаны на клинически валидированных индексах и шкалах, рекомендованных международными ассоциациями ревматологов.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-medical-100 text-medical">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Точность расчетов</h3>
                <p className="text-gray-600">
                  Мгновенный расчет индексов и автоматическая интерпретация результатов согласно актуальным клиническим рекомендациям.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-medical-100 text-medical">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Мониторинг динамики</h3>
                <p className="text-gray-600">
                  Возможность отслеживать динамику показателей в процессе лечения для оценки эффективности терапии.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
