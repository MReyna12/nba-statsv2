import Link from "next/link";

function Nav(props) {
  return (
    <nav
      style={{ backgroundColor: props.primaryColor }}
      role="navigation"
      aria-label="main navigation"
    >
      <section className="section">
        <div className="container">
          <Link href="/">
            <a>
              <h1 className="title has-text-bold has-text-white">
                Starting Five
              </h1>
            </a>
          </Link>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
