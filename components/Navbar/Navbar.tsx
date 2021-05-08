import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-6xl py-2 mx-auto">
      <img src="aerolab-logo.svg" alt="Logo Aerolab" />
      <div className="flex items-center">
        <h5 className="mr-2">Cristian Cucunuba</h5>
        <button className="flex items-center p-1 bg-gray-200 rounded-2xl">
          <span className="ml-2 mr-2">6000</span>
          <img src="coin.svg" alt="coin" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
