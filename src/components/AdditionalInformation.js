import React from "react";

const AdditionalInformation = () => {
  return (
    <section
      className={"mt-5 p-5"}
      style={{ border: "black 1px solid", borderRadius: "10px" }}
    >
      <h1 style={{ color: "#007ba7" }}>Additional Information</h1>
      <p>
        Reach out to me via{" "}
        <a href="mailto:logan.miner@protonmail.com?subject=lrminer.github.io">
          email
        </a>
        .
      </p>
    </section>
  );
};

export default AdditionalInformation;
