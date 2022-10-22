import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";
import Navbar from "../navigation/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Wardrobes: NextPage = () => {
    return(
        <>
        <Navbar/> 
        <b>This is the wardrobe page</b>
            <div>
                <button type="button">Create Wardrobe</button>
            </div>
        </>
    )
};

export default Wardrobes;