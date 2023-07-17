import Link from "next/link";

const Menu = () => {
  return (
    <nav>
      <Link href="/solceller">Solceller</Link>
      <Link href="/producter">Produkter</Link>
      <Link href="/referenser">Referenser</Link>
      <Link href="/om-oss">Om oss</Link>
      <Link href="/karriär">Karriär</Link>
    </nav>
  );
};

export default Menu;
