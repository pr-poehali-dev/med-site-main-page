import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medical-50 border-t border-medical-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-medical mb-4">МедиКальк</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Инструменты для оценки активности ревматологических заболеваний и мониторинга эффективности терапии
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Калькуляторы</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/calculators/rheumatoid-arthritis" className="hover:text-medical transition-colors">
                  Ревматоидный артрит
                </Link>
              </li>
              <li>
                <Link to="/calculators/lupus" className="hover:text-medical transition-colors">
                  Системная красная волчанка
                </Link>
              </li>
              <li>
                <Link to="/calculators/scleroderma" className="hover:text-medical transition-colors">
                  Системная склеродермия
                </Link>
              </li>
              <li>
                <Link to="/calculators/ankylosing-spondylitis" className="hover:text-medical transition-colors">
                  Болезнь Бехтерева
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Ссылки</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/" className="hover:text-medical transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-medical transition-colors">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-medical transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-medical-100">
          <p className="text-center text-gray-600 text-sm">
            © {currentYear} МедиКальк. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
