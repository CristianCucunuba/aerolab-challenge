import { useQuery } from "react-query";
import api from "../../api";

function Navbar() {
  const { data: user } = useQuery("user", () => api.getUser());

  return (
    <nav className="flex items-center justify-between max-w-6xl py-2 mx-auto">
      <img src="aerolab-logo.svg" alt="Logo Aerolab" />
      <div className="flex items-center">
        <h5 className="mr-2">{user?.data.name}</h5>
        <button className="flex items-center p-1 bg-gray-200 rounded-2xl">
          <span className="ml-2 mr-2">{user?.data.points}</span>
          <img src="coin.svg" alt="coin" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
