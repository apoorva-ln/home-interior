export default function Header() {
    return (
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Interior Bliss</h1>
        <nav>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Designs</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }
  