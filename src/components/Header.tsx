import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-medical">МедиКальк</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* Исправлено: вместо вложенной ссылки используем NavigationMenuLink напрямую */}
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  asChild
                >
                  <Link to="/">Главная</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Калькуляторы</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem 
                      title="Ревматоидный артрит" 
                      href="/calculators/rheumatoid-arthritis"
                    >
                      Шкалы DAS28, SDAI, CDAI для оценки активности
                    </ListItem>
                    <ListItem 
                      title="Системная красная волчанка" 
                      href="/calculators/lupus"
                    >
                      Индексы SLEDAI, BILAG для оценки активности
                    </ListItem>
                    <ListItem 
                      title="Системная склеродермия" 
                      href="/calculators/scleroderma"
                    >
                      Шкалы mRSS, Valentini для оценки активности
                    </ListItem>
                    <ListItem 
                      title="Болезнь Бехтерева" 
                      href="/calculators/ankylosing-spondylitis"
                    >
                      Индексы BASDAI, ASDAS для оценки активности
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                {/* Исправлено: вместо вложенной ссылки используем NavigationMenuLink напрямую */}
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  asChild
                >
                  <Link to="/about">О проекте</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                {/* Исправлено: вместо вложенной ссылки используем NavigationMenuLink напрямую */}
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  asChild
                >
                  <Link to="/contact">Контакты</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-medical-dark p-2 rounded-md hover:bg-medical-50"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute w-full bg-white shadow-md border-b border-medical-100`}
      >
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-2">
            <li><Link to="/" className="block p-2 hover:bg-medical-50 rounded-md">Главная</Link></li>
            <li className="border-t border-medical-100 pt-2">
              <span className="block p-2 font-semibold">Калькуляторы:</span>
              <ul className="pl-4 space-y-1">
                <li>
                  <Link to="/calculators/rheumatoid-arthritis" className="block p-2 hover:bg-medical-50 rounded-md">
                    Ревматоидный артрит
                  </Link>
                </li>
                <li>
                  <Link to="/calculators/lupus" className="block p-2 hover:bg-medical-50 rounded-md">
                    Системная красная волчанка
                  </Link>
                </li>
                <li>
                  <Link to="/calculators/scleroderma" className="block p-2 hover:bg-medical-50 rounded-md">
                    Системная склеродермия
                  </Link>
                </li>
                <li>
                  <Link to="/calculators/ankylosing-spondylitis" className="block p-2 hover:bg-medical-50 rounded-md">
                    Болезнь Бехтерева
                  </Link>
                </li>
              </ul>
            </li>
            <li className="border-t border-medical-100 pt-2">
              <Link to="/about" className="block p-2 hover:bg-medical-50 rounded-md">О проекте</Link>
            </li>
            <li>
              <Link to="/contact" className="block p-2 hover:bg-medical-50 rounded-md">Контакты</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

interface ListItemProps {
  title: string;
  href: string;
  children?: React.ReactNode;
}

const ListItem = ({ title, href, children }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-dark focus:bg-medical-100"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>}
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;
