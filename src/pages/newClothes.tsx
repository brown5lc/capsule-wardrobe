import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";
import Navbar from "../navigation/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

const NewClothes: NextPage = () => {
    return(
        <>
        <Navbar/> 
        <b>This is the new clothes page</b>
        </>
    )
};

export default NewClothes;