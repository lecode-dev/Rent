import React from "react";

export default function CardButton({ background }) {
  return (
    <>
      <button style={{ backgroundImage: `url(/images/${background})` }} />
    </>
  );
}
