import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  buttonText?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  href, 
  buttonText = "Перейти" 
}: FeatureCardProps) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-medical-50 text-medical">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-4">
        <CardDescription className="text-foreground/80">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild variant="ghost" className="text-medical hover:text-medical-dark hover:bg-medical-50 p-0">
          <Link to={href} className="flex items-center">
            {buttonText} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
