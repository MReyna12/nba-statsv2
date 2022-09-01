import Link from "next/link";
import Image from "next/image";
import startingFiveLogo from "../public/starting-five.png";

function Nav() {
  return (
    <nav
      className="navbar has-background-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a>
              <Image src={startingFiveLogo} width={200} height={80} />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
