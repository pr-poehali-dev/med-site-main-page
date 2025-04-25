import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-white">
      <div className="absolute inset-0 bg-medical-50 opacity-30" />
      <div
        className="absolute top-0 right-0 -translate-y-12 translate-x-56 transform"
        aria-hidden="true"
      >
        <svg
          width="800"
          height="800"
          viewBox="0 0 800 800"
          className="text-medical opacity-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="currentColor" />
        </svg>
      </div>
      <div
        className="absolute bottom-0 left-0 translate-y-12 -translate-x-56 transform"
        aria-hidden="true"
      >
        <svg
          width="800"
          height="800"
          viewBox="0 0 800 800"
          className="text-medical-secondary opacity-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="currentColor" />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Калькуляторы активности</span>
            <span className="block text-medical">ревматологических заболеваний</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
            Современные инструменты для оценки активности заболеваний и
            мониторинга эффективности терапии в ревматологической практике
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild className="bg-medical hover:bg-medical-dark text-white">
              <Link to="/calculators/rheumatoid-arthritis">
                Начать работу <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
