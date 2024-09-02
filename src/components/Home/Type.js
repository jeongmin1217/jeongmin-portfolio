import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "꼼꼼함과 책임감을 무기로,",
          "도전을 즐기며 성장하고픈",
          "신입 데이터 엔지니어",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
