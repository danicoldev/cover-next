import Link from "next/link";
import Image from "next/image";

function Navigation() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-custom p-4">
      <div className="">
        <Link href="/">
          <Image
            src="/logo.png"
            width={5184 / 30}
            height={3888 / 30}
            alt="logo"
          />
        </Link>
      </div>
      <div className="">
        <button className="bg-yellow-400 hover:bg-yellow-600 text-black hover:text-white font-bold py-2 px-4 rounded">
          <Link href="/contactanos">contactanos</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
