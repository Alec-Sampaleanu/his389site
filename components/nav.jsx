import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="nav navbar-expand-lg p-3 border-bottom ">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2">
                    <li className="nav-item">
                        <Link href="/" passHref>
                            <a className="pointer">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" passHref>
                            <a className="ms-3 pointer">About</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <style jsx>{`
              a {
                text-decoration: none;
              }

              a:link {
                text-decoration: none;
              }

              a:visited {
                text-decoration: none;
              }
            `}</style>
        </nav>
    )
}
export default Nav