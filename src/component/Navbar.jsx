import React from "react";
export default function navbar(){
    return(
        <div>
            <div className='flex justify-between gap-5 items-center 
                    lg:flex lg:justify-between lg:items-center
                    md:flex justify-between '>
                <img src="img/copileCitoyen-logo-1.png" className='' alt="logo"/>

                <button className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                    <div className="relative">
                    <select className="block appearance-none w-full  border border-red-200 text-red-400  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-red-500" placeholder="">
                        <option>Faire une contribution</option>
                        <option>Financiere</option>
                        <option>Materielle</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                    </div>
                </button>
            </div>

        </div>
    )
}