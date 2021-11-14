import React from 'react';
import profilImg from "./../../assets/images/prifilImg.png"
import {Link} from "react-router-dom";
import {
    ArrowSvg,
    BacketSvg,
    CardSvg,
    ContactSvg,
    FAQSvg, HomeSvg,
    LocationSvg, NotificationSvg,
    PenSvg,
    WarningSvg
} from "../../assets/svgImg/svgImg";
import Arrow from "./../../assets/images/arrow.png"
import "./Profile.css"

function Profile(props) {
    return (
        <div className={"flex max-w-xl mx-auto border h-auto border-black relative"}>
            <div className={"w-full pb-12"}>
                <div className={"pt-16 pb-8 px-6 w-full flex"}>
                    <div className={"pr-6"}>
                        <img src={profilImg} className={"w-16 h-16"} alt="Profil Rasmi"/>
                    </div>
                    <div className={"flex items-center"}>
                        <div>
                            <div className={"flex"}>
                                <p className={"font-semibold text-lg leading-none pr-3"}>Ilhomjon Boltaboyev</p>
                                <button className={"focus:outline-none"}><PenSvg/></button>
                            </div>
                            <p className={"opacity-70"}>NationalSoftLab@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className={"py-6 px-6 flex border-t-2 w-full focus:outline-none"}>
                        <div className={"pr-8"}>
                            <ContactSvg />
                        </div>
                        <div>
                            <p className={"leading-none text-lg"}>Mening Ma’lumotlarim</p>
                        </div>
                        <div className={"ml-auto"}>
                            <div>
                                <img src={Arrow} alt="" className={"w-2 h-3.5"}/>
                            </div>
                        </div>
                    </button>
                    <button className={"py-6 px-6 flex border-t-2 w-full focus:outline-none"}>
                        <div className={"pr-8"}>
                            <BacketSvg />
                        </div>
                        <div>
                            <p className={"leading-none text-lg"}>Buyurtmalarim</p>
                        </div>
                        <div className={"ml-auto"}>
                            <div>
                                <img src={Arrow} alt="" className={"w-2 h-3.5"}/>
                            </div>
                        </div>
                    </button>
                    <button className={"py-6 px-6 flex border-t-2 w-full focus:outline-none"}>
                        <div className={"pr-8"}>
                            <LocationSvg />
                        </div>
                        <div>
                            <p className={"leading-none text-lg"}>Yetkazib berish manzili</p>
                        </div>
                        <div className={"ml-auto"}>
                            <div>
                                <img src={Arrow} alt="" className={"w-2 h-3.5"}/>
                            </div>
                        </div>
                    </button>
                    <button className={"py-6 px-6 flex border-t-2 w-full focus:outline-none"}>
                        <div className={"pr-8"}>
                            <CardSvg />
                        </div>
                        <div>
                            <p className={"leading-none text-lg"}>To’lov usuli</p>
                        </div>
                        <div className={"ml-auto"}>
                            <div>
                                <img src={Arrow} alt="" className={"w-2 h-3.5"}/>
                            </div>
                        </div>
                    </button>
                    <button className={"py-6 px-6 flex border-t-2 w-full focus:outline-none"}>
                        <div className={"pr-8"}>
                            <FAQSvg />
                        </div>
                        <div>
                            <p className={"leading-none text-lg"}>FAQ</p>
                        </div>
                        <div className={"ml-auto"}>
                            <div>
                                <img src={Arrow} alt="" className={"w-2 h-3.5"}/>
                            </div>
                        </div>
                    </button>
                    <button className={"py-6 px-6 flex border-t-2 w-full focus:outline-none"}>
                        <div className={"pr-8"}>
                            <WarningSvg />
                        </div>
                        <div>
                            <p className={"leading-none text-lg"}>Dastur haqida</p>
                        </div>
                        <div className={"ml-auto"}>
                            <div>
                                <img src={Arrow} alt="" className={"w-2 h-3.5"}/>
                            </div>
                        </div>
                    </button>
                    <button className={"py-6 px-6 flex border-t-2 border-b-2 w-full focus:outline-none"}>
                        <div className={"pr-8"}>
                            <NotificationSvg />
                        </div>
                        <div>
                            <p className={"leading-none text-lg"}>Bildirishnoma</p>
                        </div>
                        <div className={"ml-auto"}>
                            <div
                                className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle"
                                       className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                                <label htmlFor="toggle"
                                       className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={"flex justify-center mt-12 mb-6"}>
                    <button type={"submit"} className={"w-11/12 py-4 border bg-gray-200 text-blue-800 text-xl rounded-2xl"}>Chiqish</button>
                </div>
                <section id="bottom-navigation" className="block max-w-xl mx-auto fixed inset-x-0 rounded-t-lg py-4 border bottom-0 z-10 bg-white shadow">
                    <div id="tabs" class="flex justify-center">
                        <div className={"text-center"}>
                            <div className={"mx-auto"}>
                                <HomeSvg class={"mx-1"} />
                            </div>
                            <p className={"text-xs text-center"}>Asosiy</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;