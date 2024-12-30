import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/console">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" height={28} width={28} alt="side-logo" />
        <p className="font-semibold text-white text-2xl ml-2.5">Finance</p>
      </div>
    </Link>
  );
};
