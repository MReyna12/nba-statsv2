import { useRouter } from 'next/router';
import Image from 'next/image';

function Nav() {
  const router = useRouter();

  const path = router.pathname;

  // This navbar is only displayed if the path is not the root. Reason: the page at the root route does not need a search bar in the navbar because it will be in the center of the page
  const fullNavbar = () => {
    return (
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <Image
              src="https://bulma.io/images/bulma-logo.png"
              width={112}
              height={28}
            />
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
              <input
                class="input is-medium"
                type="text"
                placeholder="Medium input"
              />
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
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>
        </div>
      </div>
    );
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      {path === '/' ? partialNavbar() : fullNavbar()}
    </nav>
  );
}

export default Nav;
