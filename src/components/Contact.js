import React from "react";
import ImgOne from "./img/works_01.png";

const contact = () => {
  return (
    <>
      <div className="card">
        <img
          src={ImgOne}
          alt="myphone"
          className="h-full rounded-md mb-16 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">サイト紹介</h2>
          <p className="mb-4">季茶は梅田にある喫茶店である。</p>
          <button className="text-1xl px-8 py-5 bg-slate-800 text-white hover:bg-slate-500 transition ease-in duration-200">
            サイトを見る
          </button>
        </div>
      </div>

      <div className="card">
        <img
          src={ImgOne}
          alt="myphone"
          className="h-full rounded-md mb-16 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">サイト紹介</h2>
          <p className="mb-4">季茶は梅田にある喫茶店である。</p>
          <button className="text-1xl px-8 py-5 bg-slate-800 text-white hover:bg-slate-500 transition ease-in duration-200">
            サイトを見る
          </button>
        </div>
      </div>
    </>
  );
};

export default contact;
