import React from "react";
export default function footer(){
    return(
        <div>
            <div className='bg-black flex flex-col justify-between py-5 px-8 gap-5 
                lg:bg-black lg:flex-row lg:justify-between lg:py-5 lg:px-8 lg:gap-5
                md:bg-black md:flex md:justify-between md:py-5 md:px-8 md:gap-5'> 
                <div>
                <img src="" alt="" />
                
                <a href="#"className='text-blue-500 font-bold text-sm hover:text-blue-500' >INFORMATIONS PERSONNELLES</a>
                </div>

                <div>
                <img src="" alt="" />
                <a href="#" className='text-white font-bold text-sm hover:text-blue-500'>STATUT PROFESSIONNEL</a>
                </div>

                <div>
                <img src="" alt="" />
                <a href=""className='text-white font-bold text-sm hover:text-blue-500'>INFORMATIONS GEOTRATEGIQUE</a>
                </div>

                <div>
                <img src="" alt=""/>
                <a href=""className='text-white font-bold text-sm hover:text-blue-500'>VOTRE ENGAGEMENT</a>
                </div>

            </div>
        </div>
    )
}