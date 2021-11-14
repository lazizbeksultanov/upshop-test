import React, {Component, useState} from 'react'
import {LogoSvgIm} from "../assets/svgImg/svgImg";
import {Link} from "react-router-dom";
import {Button, Input} from "@material-tailwind/react";

function Home(props) {

    return (
        <div className={"flex max-w-xl mx-auto border h-auto border-black px-6"}>
            <div>
                <div>
                    Bu Home Page
                </div>
                <div>
                    <Link to={"/login"}>Login -></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
