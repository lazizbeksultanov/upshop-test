import React from 'react';
import {ArrowSvg, MapSvg} from "../../assets/svgImg/svgImg";
import {Link} from "react-router-dom";
import {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'

const people = [
    {name: "Farg'ona"},
    {name: 'Andijon'},
    {name: 'Namangan'},
    {name: 'Toshkent'},
    {name: 'Samarqand'},
    {name: 'Xorazm'},
]

function Map(props) {
    const [selected, setSelected] = useState(people[0])

    return (
        <div className={"flex max-w-xl mx-auto border h-auto border-black px-6 relative"}>
            <div className={"absolute mt-12"}>
                <button className={"focus:outline-none"}>
                    <ArrowSvg />
                </button>
            </div>
            <div className={"flex w-full flex-col pb-6"}>
                <div className={"flex justify-center pt-20"}>
                    <MapSvg/>
                </div>
                <div className={"text-center pt-8"}>
                    <p className={"text-2xl pb-3"}>Manzilingizni Kiriting</p>
                    <p className={"opacity-70"}>Hududingizda nima bo'layotganidan xabardor bo'lish uchun
                        joylashuvingizni yoqing</p>
                </div>
                <form className={"mt-8"}>
                    <label className={"font-semibold opacity-70"}>Shahar</label><br/>
                    <div className="w-full mb-8">
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                                <Listbox.Button
                                    className="relative w-full py-3 px-1 pr-10 text-lg text-left bg-white border-b-2 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                    <span className="block truncate">{selected.name}</span>
                                    <span
                                        className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                      <SelectorIcon
                                          className="w-5 h-5 text-gray-400"
                                          aria-hidden="true"
                                      />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options
                                        className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({active}) =>
                                                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                                }
                                                value={person}
                                            >
                                                {({selected, active}) => (
                                                    <>
                                              <span
                                                  className={`${
                                                      selected ? 'font-medium' : 'font-normal'
                                                  } block truncate`}
                                              >
                                                {person.name}
                                              </span>
                                                        {selected ? (
                                                            <span
                                                                className={`${
                                                                    active ? 'text-amber-600' : 'text-amber-600'
                                                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                            >
                          <CheckIcon className="w-5 h-5" aria-hidden="true"/>
                        </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                    <label className={"font-semibold opacity-70"}>Manzil</label><br/>
                    <input type="text" className={"border-b-2 w-full py-3 px-1 mb-8 focus:outline-none"}/>
                    <label className={"font-semibold opacity-70"}>Do'kon nomi</label><br/>
                    <input type="text" className={"border-b-2 w-full py-3 px-1 mb-8 focus:outline-none"}/>
                    <label className={"font-semibold opacity-70"}>Tashkilot nomi (YATT, MCHJ)</label><br/>
                    <input type="text" className={"border-b-2 w-full py-3 text-xl px-1 focus:outline-none"}/>
                    <div className={"flex justify-start py-3"}>
                        <p className={"text-sm mb-6"}><span className={"opacity-70"}>Davom etish orqali siz </span><Link
                            to={"/"} className={"text-blue-800"}>Xizmat shartlariga</Link><span
                            className={"opacity-70"}> va </span><Link to={"/"} className={"text-blue-800"}>Maxfiylik
                            siyosatiga</Link><span className={"opacity-70"}> rozilik bildirasiz</span></p>
                    </div>
                    <div className={"flex justify-center"}>
                        <button type={"submit"}
                                className={"w-full py-4 border bg-blue-800 text-white text-xl rounded-2xl"}>Keyingi
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Map;