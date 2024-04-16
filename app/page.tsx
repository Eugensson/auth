import { Poppins } from "next/font/google";
import { LockKeyholeOpen } from "lucide-react";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const HomePage = () => {
  return <h1>Home page</h1>;
};

export default HomePage;
