import type { NextPage } from "next";
import {useState} from 'react';
import Head from "next/head";
import styles from "./index.module.css";
import Navbar from "../navigation/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Wardrobes: NextPage = () => {
    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
    }
    return(
        <> 
        <Navbar/> 
        <b>This is the wardrobe page</b>
            <div>
                <button type="button">Create Wardrobe</button>
            </div>
        <input
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
        />

        </>
    )
};

export default Wardrobes;