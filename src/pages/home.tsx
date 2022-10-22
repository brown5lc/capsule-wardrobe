import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import styles from "./index.module.css";
import Navbar from "../navigation/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Home: NextPage = () => {
  return ( 
   <> 
   <Head>
        <title>Capsule Wardrobe</title>
        <meta name="description" content="A wardrobe generation application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   <Navbar/> 
   <b>This is the home page</b> 
   </>
  );
};

const cardStyle = {
    backgroundColor: "#32a852"
}

export default Home;
;
