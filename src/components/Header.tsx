import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-5">
            <div className="flex items-center gap-x-3">
              <img src="/logo.png" alt="logo" />
              <p className="text-3xl font-bold">Movie App</p>
            </div>
            <div>
              <nav>
                <ul className="flex items-center font-semibold gap-x-5">
                  <li className="text-[#C40F62]">Home</li>
                  <li>Explore</li>
                  <li>Genre</li>
                  <li>News</li>
                  <li>Movies</li>
                  <li>TV Show</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
