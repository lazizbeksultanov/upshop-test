import React, {Fragment} from 'react';
import {AcceptedSvg, ArrowSvg, MapSvg} from "../../assets/svgImg/svgImg";
import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, SelectorIcon} from "@heroicons/react/solid";
import {Link} from "react-router-dom";

function Accepted(props) {
    return (
        <div className={"flex max-w-xl mx-auto border h-auto border-black px-6 relative"}>
            <div className={"flex w-full flex-col pb-6"}>
                <div className={"flex justify-center pt-20 pb-10"}>
                    <AcceptedSvg/>
                </div>
                <div className={"text-center pt-8"}>
                    <p className={"text-2xl pb-3"}>Sizning profilingiz muvaffiqiyatli tasdiqlandi</p>
                    <p className={"opacity-70 pt-4"}>Bizning tizimdan ro’yhatdan o’tganingiz uchun minnatdorchilik bildiramiz.</p>
                    <p className={"opacity-80"}>Siz bilan ishlash maroqli !!! </p>
                    <div className={"flex justify-center mt-16"}>
                        <button type={"button"}
                                className={"w-11/12 py-4 border bg-blue-800 text-white text-xl rounded-2xl focus:outline-none"}>Tizimga kirish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accepted;