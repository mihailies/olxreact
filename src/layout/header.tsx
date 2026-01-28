// import  './assets/react.svg'
import reactLogo from "../assets/react.svg";

export function Header() {
  return (
    <header className="siteHeader">
      <img src={reactLogo} />
      <nav>
        <ul>
          <li>
            <a href="_blank" title="Chat">
              Chat
            </a>
          </li>
          <li>
            <a href="_blank" title="Favorites">
              Favorites
            </a>
          </li>
          <li>
            <a href="_blank" title="Alerts">
              Alerts
            </a>
          </li>
          <li>
            <a href="_blank" title="Account">
              Accoount
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={() => console.log("ADD SALE!")}>+ NEW</button>
    </header>
  );
}
