// import  './assets/react.svg'
 import reactLogo from '../assets/react.svg'

export function Header() {
  return (
    <header className="siteHeader">
      <img src={reactLogo} />
      <nav>
        <a href="_blank" title="Chat">
          Chat
        </a>
        <a href="_blank" title="Favorites">
          Favorites
        </a>
        <a href="_blank" title="Alerts">
          Alerts
        </a>
        <a href="_blank" title="Account">
          Accoount
        </a>
      </nav>
      <button onClick={() => console.log("ADD SALE!")}>+ NEW</button>
    </header>
  );
}
