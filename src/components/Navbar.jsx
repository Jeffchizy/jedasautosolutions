import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-primary text-white">
      <h1 className="font-bold text-lg">Jedas Auto Solutions</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}