import React from "react";
import { Ranking, Navbar } from "../components";

export function RangkingPage(props) {
  return (
    <>
      <div className="custom-bg d-flex justify-content-center align-items-center">
        <section className="topthreewinner text-center container-sm">
          <Navbar />
          <h2 className="text-primary m-5">Rank The Stories</h2>
          <Ranking props={props}/>
        </section>
      </div>
    </>
  );
}
