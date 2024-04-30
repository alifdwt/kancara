import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            width={128}
            height={38}
            alt="kancara logo"
          />
        </Link>
        <p>© 2022 Kancara. All rights reserved</p>
      </div>
    </footer>
  );
}
