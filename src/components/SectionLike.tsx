import React from "react";

const SectionLike: React.FC = () => {
  return (
    <>
      <>
        <div className="mt-10">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-x-2">
              <p className="font-bold text-xl text-[#1E1A3B]">
                You MAY like tHIS
              </p>
            </div>
            <div>
              <p>see More</p>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-x-3 py-2">
            <div>
              <img src="/movie/hypnotic.png" alt="" className="h-64" />
              <p className="font-semibold text-lg">Hypnotic</p>
            </div>
            <div>
              <img src="/movie/MojaveDiamonds.png" alt="" className="h-64" />
              <p className="font-semibold text-lg">Mojave Diamonds</p>
            </div>
            <div>
              <img src="/movie/Mojave.png" alt="" className="h-64" />
              <p className="font-semibold text-lg">Mojave</p>
            </div>
            <div>
              <img src="/movie/Crossfire.png" alt="" className="h-64" />
              <p className="font-semibold text-lg">Crossfire</p>
            </div>
            <div>
              <img src="/movie/FastX.png" alt="" className="h-64" />
              <p className="font-semibold text-lg">Fast X</p>
            </div>
            <div>
              <img src="/movie/THEDAYS.png" alt="" className="h-64" />
              <p className="font-semibold text-lg">THE DAYS</p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SectionLike;
