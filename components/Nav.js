import { useRouter } from 'next/router';
import Input from './Input';
import Link from 'next/link';
import Image from 'next/image';
import startingFiveLogo from '../public/starting-five.png';

function Nav() {
  const router = useRouter();

  const path = router.pathname;

  // This navbar is only displayed if the path is not the root. Reason: the page at the root route does not need a search bar in the navbar because it will be in the center of the page
  const fullNavbar = () => {
    return (
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <Image src={startingFiveLogo} width={200} height={80} />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <Input />
            </div>
          </div>
        </div>
      </div>
    );
  };
  // This navbar is displayed if the path is the root.
  const partialNavbar = () => {
    return (
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a>
              <Image src={startingFiveLogo} width={200} height={80} />
            </a>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <nav
      className="navbar has-background-primary"
      role="navigation"
      aria-label="main navigation"
    >
      {path === '/' ? partialNavbar() : fullNavbar()}
    </nav>
  );
}

export default Nav;
