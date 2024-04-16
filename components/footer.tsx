import Social from "@/components/social";

const Footer = () => {
  return (
    <footer className="w-full p-2 border-t-2 flex flex-col items-center gap-2">
      <Social />
      <span className="text-xs md:text-sm">
        Copyright &copy; 2024 - All right reserved by Eugensson.
      </span>
    </footer>
  );
};

export default Footer;
