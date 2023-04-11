import React from "react";
import Image from "./Image";
const Actors = ({ data }) => {
  return (
    <div className="flex">
      <Image image={"ssrk"} />
      <div>
        <div>{data && data.name} shishir adhikari</div>
        <div>
          {data && data.smallBrief} my name is shishr and I start my carrier now
        </div>
        <div>{data && data.DOB}</div>
      </div>
    </div>
  );
};

export default Actors;
