import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link className="link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" href="/Study">
            Study
          </Link>
        </li>
        <li>
          <Link className="link" href="/Game">
            Game
          </Link>
        </li>
      </ul>
      <hr />
    </>
  );
}
