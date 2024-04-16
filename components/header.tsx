import { MenuIcon, UserCog } from "lucide-react";

import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { LoginButton } from "@/components/auth/login-button";

const Header = () => {
  return (
    <header className="w-full p-2 border-b-2 flex items-center justify-between gap-2">
      <Button variant="outline" size="icon" className="md:hidden">
        <MenuIcon />
      </Button>

      <Navigation />
      <div className="flex items-center gap-2">
        <LoginButton mode="redirect">
          <Button variant="outline" size="icon">
            <UserCog />
          </Button>
        </LoginButton>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
