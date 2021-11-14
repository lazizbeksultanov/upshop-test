import React, {useState} from 'react';
import {LogoSvgIm} from "../../assets/svgImg/svgImg";
import {Link} from "react-router-dom";
import {Button, Input} from "@material-tailwind/react";

function Register(props) {
    const [activeForm, setActiveForm] = useState(true)
    console.log(activeForm)
    return (
        <div className={"flex max-w-xl mx-auto border h-auto border-black px-6"}>
            <div className={"flex w-full flex-col pb-6"}>
                <div className={"flex justify-center pt-20"}>
                    <LogoSvgIm width={"160"} />
                </div>
                <div className={"pt-20"}>
                    <p className={"text-3xl font-semibold"}>Ro'yxatdan o'tkazish</p>
                    <p className={"pt-2 opacity-80"}>Davom etish uchun hisob ma'lumotlarini kiriting</p>
                </div>
                <div className={"pt-8"}>
                    {activeForm ?
                        <form>
                            <label className={"font-semibold opacity-70"}>F.I.O</label><br/>
                            <input type="text" className={"border-b-2 w-full py-3 px-1 mb-8 focus:outline-none"}/>
                            <label className={"font-semibold opacity-70"}>Telefon raqam</label><br/>
                            <input type="text" className={"border-b-2 w-full py-3 px-1 mb-8 focus:outline-none"}/>
                            <label className={"font-semibold opacity-70"}>Parol</label><br/>
                            <input type="text" className={"border-b-2 w-full py-3 text-xl px-1 focus:outline-none"}/>
                            <div className={"flex justify-start py-3"}>
                                <p className={"text-sm mb-6"}><span className={"opacity-70"}>Davom etish orqali siz </span><Link to={"/"} className={"text-blue-800"}>Xizmat shartlariga</Link><span className={"opacity-70"}> va </span><Link to={"/"} className={"text-blue-800"}>Maxfiylik siyosatiga</Link><span className={"opacity-70"}> rozilik bildirasiz</span></p>
                            </div>
                            <div className={"flex justify-center"}>
                                <button type={"submit"} className={"w-full py-4 border bg-blue-800 text-white text-xl rounded-2xl"}>Keyingi</button>
                            </div>
                        </form> :
                        <form>
                            <Input
                                type="text"
                                color="blue"
                                size="lg"
                                outline={false}
                                className={"w-full mb-8"}
                                placeholder="F.I.O"
                            />
                            <div className={"my-6"} />
                            <Input
                                type="text"
                                color="blue"
                                size="lg"
                                outline={false}
                                className={"w-full mb-8"}
                                placeholder="Telefon raqam"
                            />
                            <div className={"my-6"} />
                            <Input
                                type="text"
                                color="blue"
                                size="lg"
                                outline={false}
                                className={"w-full mt-8"}
                                placeholder="Parol"
                            />
                            <div className={"flex justify-start py-3"}>
                                <p className={"text-sm mb-6"}><span className={"opacity-70"}>Davom etish orqali siz </span><Link to={"/"} className={"text-blue-800"}>Xizmat shartlariga</Link><span className={"opacity-70"}> va </span><Link to={"/"} className={"text-blue-800"}>Maxfiylik siyosatiga</Link><span className={"opacity-70"}> rozilik bildirasiz</span></p>
                            </div>
                            <div className={"flex justify-center"}>
                                <Button
                                    color="blue"
                                    buttonType="submit"
                                    size="regular"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    className={"w-full py-4"}
                                    ripple="light"
                                >
                                    Keyingi
                                </Button>
                            </div>
                        </form>
                    }

                    <div className={"pt-6"}>
                        <p className={"text-sm font-semibold text-center"}>Hisobingiz bormi? <Link to={"/login"} className={"text-blue-900"}>Tizimga kirish</Link></p>
                        <Button
                            color="lightBlue"
                            buttonType="filled"
                            size="regular"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="light"
                            onClick={() => setActiveForm(!activeForm)}
                        >

                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;