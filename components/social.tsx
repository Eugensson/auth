import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Social = () => {
  return (
    <ul className="flex gap-2">
      <li>
        <Button variant="outline" size="icon">
          <Facebook />
        </Button>
      </li>

      <li>
        <Button variant="outline" size="icon">
          <Instagram />
        </Button>
      </li>
      <li>
        <Button variant="outline" size="icon">
          <Linkedin />
        </Button>
      </li>
    </ul>
  );
};

export default Social;
