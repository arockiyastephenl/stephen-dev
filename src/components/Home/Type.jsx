import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Effective Problem Solver",
              "Continuous Learner, Adaptable Professional",
              "Collaborative Team Player, Effective Communicator",
              "Detail-Oriented, Quality-Focused Developer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type