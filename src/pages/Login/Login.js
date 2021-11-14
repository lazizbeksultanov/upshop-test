import React, {useState} from 'react';
import {LogoSvgIm} from "../../assets/svgImg/svgImg";
import {Link} from "react-router-dom";
import {Button, Input} from "@material-tailwind/react";

function Login(props) {
    const [activeForm, setActiveForm] = useState(true)
    console.log(activeForm)
    return (
        <div className={"flex max-w-xl mx-auto border h-auto border-black px-6"}>
            <div className={"flex w-full flex-col pb-6"}>
                <div className={"flex justify-center pt-28"}>
                    <LogoSvgIm width={"189"} />
                </div>
                <div className={"pt-20"}>
                    <p className={"text-3xl font-semibold"}>Kirish</p>
                    <p className={"pt-2 opacity-80"}>Pochtangiz va parolingizni kiriting</p>
                </div>
                <div className={"pt-8"}>
                    {activeForm ?
                        <form>
                            <label className={"font-semibold opacity-70"}>Telefon raqam</label><br/>
                            <input type="text" className={"border-b-2 w-full py-3 px-1 mb-8 focus:outline-none"}/>
                            <label className={"font-semibold opacity-70"}>Parol</label><br/>
                            <input type="text" className={"border-b-2 w-full py-3 text-xl px-1 focus:outline-none"}/>
                            <div className={"flex justify-end py-3"}>
                                <Link to={"/"} className={"text-sm"}>Parolni unutdingizmi?</Link>
                            </div>
                            <div className={"flex justify-center"}>
                                <button type={"submit"} className={"w-11/12 py-4 border bg-blue-800 text-white text-xl rounded-2xl"}>Kirish</button>
                            </div>
                        </form> :
                        <form>
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
                            <div className={"flex justify-end py-3"}>
                                <Link to={"/"} className={"text-sm"}>Parolni unutdingizmi?</Link>
                            </div>
                            <div className={"flex justify-center"}>
                                <Button
                                    color="blue"
                                    buttonType="filled"
                                    size="regular"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    className={"w-11/12 py-4 text-lg font-normal lowercase "}
                                    ripple="light"
                                >
                                    <p>Kirish</p>
                                </Button>
                            </div>
                        </form>
                    }

                    <div className={"pt-6"}>
                        <p className={"text-sm font-semibold text-center"}>Akkauntingiz mavjud emasmi?</p>
                        <div className={"flex justify-center"}>
                            <Link to={"/register"} className={"text-sm font-semibold text-center text-blue-900"}>Ro'yxatdan o'tish</Link>
                        </div>
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

export default Login;