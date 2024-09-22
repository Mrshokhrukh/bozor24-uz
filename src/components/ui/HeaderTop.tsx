import React from "react";

type Props = {};

const HeaderTop = ({}: Props) => {
  return (
    <div className="flex justify-between text-sm">
      <p className="flex gap-3">Aloqaga chiqing
        <a href="" className="underline">+99891 523 60 03</a>
      </p>
      <div className="flex gap-5">
        <a href="">telegram</a>
        <a href="">instagram</a>
        <a href="">facebook</a>
        <div>EUR </div>
        <div>RU </div>
        <div>Light mode </div>
      </div>
    </div>
  );
};

export default HeaderTop;
