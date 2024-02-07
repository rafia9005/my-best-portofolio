import React from "react";

export default function ProjectLayout() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1 className="mx-[22px] text-6xl font-bold">This my real projects!</h1>
          <div className="lg:flex lg:mx-[0] mx-[10%] block justify-evenly items-center gap-[20px]">
            <div className="lg:mt-5 mt-[60px]">
              <img
                src="j3.png"
                alt=""
                className="lg:w-[500px] w-[500px] border border-black border-2 rounded-lg"
              />
              <h1 className="text-3xl font-bold">Payment Api.</h1>
              <div className="mt-5 flex gap-[20px]">
                <img
                  src="profile.jpg"
                  alt=""
                  className="w-[50px] rounded-full"
                />
                <div>
                  <h1 className="font-bold">Ahmad Rafi.</h1>
                  <p className="text-sm">Full-Stack Developer</p>
                </div>
              </div>
            </div>
            <div className="lg:mt-5 mt-[60px]">
              <img
                src="j2.png"
                alt=""
                className="lg:w-[500px] w-[500px] border border-black border-2 rounded-lg"
              />
              <h1 className="text-3xl font-bold">Portofolio.</h1>
              <div className="mt-5 flex gap-[20px]">
                <img
                  src="profile.jpg"
                  alt=""
                  className="w-[50px] rounded-full"
                />
                <div>
                  <h1 className="font-bold">Ahmad Rafi.</h1>
                  <p className="text-sm">Full-Stack Developer</p>
                </div>
              </div>
            </div>
            <div className="lg:mt-5 mt-[60px]">
              <img
                src="j1.png"
                alt=""
                className="lg:w-[500px] w-[500px] border border-black border-2 rounded-lg"
              />
              <h1 className="text-3xl font-bold">Comunity web</h1>
              <div className="mt-5 flex gap-[20px]">
                <img
                  src="profile.jpg"
                  alt=""
                  className="w-[50px] rounded-full"
                />
                <div>
                  <h1 className="font-bold">Ahmad Rafi.</h1>
                  <p className="text-sm">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
