import React from 'react';
import {ArrowSvg, LogoSvgIm, TimeSvg, UzbSvg} from "../../assets/svgImg/svgImg";
import {Link} from "react-router-dom";
import Uzb from "./../../assets/images/uzb.png"
import loadingGif from "./../../assets/images/9131-loading-green.gif"
import {Button, Input} from "@material-tailwind/react";


function Accept(props) {
    return (
        <div className={"flex max-w-xl mx-auto border h-auto border-black px-6 relative"}>
            <div className={"absolute mt-12"}>
                <button className={"focus:outline-none"}>
                    <ArrowSvg />
                </button>
            </div>
            <div className={"flex w-full flex-col pb-6"}>
                <div className={"flex justify-center pt-24"}>
                    <TimeSvg/>
                </div>
                <div className={"pt-20"}>
                    <p className={"text-3xl font-light text-center"}>Sizning profilingiz tasdiqlanishi kutilmoqda</p>
                </div>
                <div className={"pt-8"}>
                    <form>
                        <label className={"font-semibold opacity-70"}>Telefon raqamingiz</label><br/>
                        <div className={"relative"}>
                            <div className={"absolute"}>
                                <img src={Uzb} className={"py-3"}  alt={"Uzb img"}/>
                            </div>
                            <input type="text" className={"border-b-2 w-full py-3 pr-1 pl-12 mb-6 opacity-70 focus:outline-none"} value={"+998 99 996 36 29"} disabled={true}/>
                        </div>
                        <div className={"flex justify-start"}>
                            <Link to={"/"} className={"text-sm font-semibold text-center text-blue-900"}>Raqamni almashtirish</Link>
                        </div>
                        {/*<div className={"flex justify-center py-16"}>*/}
                        {/*    <div className={"w-32 h-32 rounded-full animate-spin bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"} />*/}
                        {/*</div>*/}
                        <div className={"flex justify-center"}>
                            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_dXaGKl.json"  background="transparent"  speed="1"  style={{width: "150px", height: "150px"}}  loop autoplay/>
                        </div>
                        <div className={"flex justify-center"}>
                            <button type={"submit"}
                                    className={"w-11/12 py-4 border bg-blue-800 text-white text-xl rounded-2xl"}>Qo'llab quvvatlash
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Accept;