import Image from "next/image";
import Link from "next/link";

const ScioLogo = require("./../../public/scio-logo.png");

const Navbar = () => {
  return (
    <header className="bg-[#00447C] p-4 flex justify-between sticky top-0 left-0">
      <Image src={ScioLogo} alt="Scio Consulting" width={114} height={40} />
      <Link
        href={"/"}
        className="px-4 py-2 bg-white rounded-2xl text-black text-base font-medium"
      >
        Schedule a Call
      </Link>
    </header>
  );
};
export default Navbar;
