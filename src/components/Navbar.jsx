import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="px-10 pt-4 relative">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <img
          className="cursor-pointer"
          src="./images/logo.png"
          alt="logo"
        />



        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 font-semibold cursor-pointer">

          <ul>Home</ul>
          <ul>About</ul>
          <ul>Contact</ul>

        </div>



        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>



      {/* Mobile Menu */}
      {
        menuOpen && (

          <div className="md:hidden flex flex-col gap-6 bg-white shadow-lg rounded-lg p-6 mt-4 font-semibold">

            <ul>Home</ul>
            <ul>About</ul>
            <ul>Contact</ul>

          </div>

        )
      }

    </nav>
  )
}

export default Navbar