import FeatureCard from "./FeatureCard";
import { Activity, Thermometer, Blocks, Heart } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Доступные калькуляторы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Набор современных инструментов для точной оценки активности ревматологических заболеваний
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Ревматоидный артрит"
            description="Калькуляторы DAS28, SDAI и CDAI для комплексной оценки активности ревматоидного артрита и планирования терапии"
            icon={<Activity className="h-6 w-6" />}
            href="/calculators/rheumatoid-arthritis"
          />
          
          <FeatureCard
            title="Системная красная волчанка"
            description="Индексы SLEDAI и BILAG для объективной оценки клинических проявлений и активности системной красной волчанки"
            icon={<Thermometer className="h-6 w-6" />}
            href="/calculators/lupus"
          />
          
          <FeatureCard
            title="Системная склеродермия"
            description="Шкалы mRSS и Valentini для оценки кожных проявлений и системной активности склеродермии"
            icon={<Blocks className="h-6 w-6" />}
            href="/calculators/scleroderma"
          />
          
          <FeatureCard
            title="Болезнь Бехтерева"
            description="Индексы BASDAI и ASDAS для количественной оценки воспалительной активности при анкилозирующем спондилите"
            icon={<Heart className="h-6 w-6" />}
            href="/calculators/ankylosing-spondylitis"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
