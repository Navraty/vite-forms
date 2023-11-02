import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"
  function Form3() {
  return (
  <>
   <div className='py-5 lg:py-3 lg:ml-[30%]'>
      <h1 className="text-3xl font-bold px-8">
        Formulaire d'adhesion
      </h1>
      <p className=''>Devenir un observateur citoyen de la gouvernance publique</p>
    </div>

    <form className='px-5
                    lg:px-5 lg:ml-[30%]'>
            
       <p className='block uppercase tracking-wide  text-gray-700 text-xs font-bold px-3 py-4'>Avez-vous une fois accompli le devoir? * <br /> civique*</p> 
        <div className=" grid grid-cols-2 lg:flex lg:gap-10 lg:px-3 ">
            <div className="flex items-center">
                <input id="checkbox1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checkbox1" className="ml-2 text-sm font-medium text-black">Oui</label>
            </div>
            <div className="flex items-center">
                <input id="checkbox2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checkbox2" className="ml-2 text-sm font-medium text-black">Non</label>
            </div>
            <div className="flex py-5 lg:w-full md:w-1/2 lg:px-3 mb-6 md:mb-0 flex-col ">
               <label
                className=" block uppercase tracking-wide text-gray-700 text-xs text-left font-bold "
                for="">Si oui en quelle année
               </label>
              <input
                className="appearance-none block lg:w-1/2 text-gray-700 border border-blue-300  px-2 rounded-lg py-3 lg:px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="année"
                type="date"
                placeholder="2022"
              />
            </div>
        </div>
        <div className=''><span className='block uppercase tracking-wide px-3 text-gray-700 text-xs font-bold mb-2 '>Etes-vous membre?</span></div>
        <div className="grid grid-cols-2 gap-8 py-5 px-2  
                        lg:flex lg:gap-8 lg:py-5 lg:px-2">
            <div className="flex items-center">
                    <input id="checkbox1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox1" className="ml-2 text-sm font-medium text-black">Assdc,ONG </label>
                </div>
                <div className="flex items-center">
                    <input id="checkbox2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox2" className="ml-2 text-sm font-medium text-black">Syndicat</label>
                </div>
                <div class="flex items-center">
                    <input id="checkbox3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox3" className="ml-2 text-sm font-medium text-black">Parti politique</label>
                </div>
                <div className="flex items-center">
                    <input id="checkbox4" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox4" class="ml-2 text-sm font-medium text-black">Aucun</label>
                </div>
           </div>
        <span className='block uppercase tracking-wide px-3 text-gray-700 text-xs font-bold mb-2 '>Maitrise de l'outils inormatique?</span>
        <div className="grid grid-cols-2 gap-8 py-5 px-2  
                        lg:flex lg:gap-8 lg:py-5 lg:px-2">
            <div className="flex items-center">
                <input id="checkbox1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checkbox1" className="ml-2 text-sm font-medium text-black">Word</label>
            </div>
            <div className="flex items-center">
                <input id="checkbox2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checkbox2" className="ml-2 text-sm font-medium text-black">Excel</label>
            </div>
            <div class="flex items-center">
                <input id="checkbox3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checkbox3" className="ml-2 text-sm font-medium text-black">Powerpoint</label>
            </div>
            <div className="flex items-center">
                <input id="checkbox4" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checkbox4" class="ml-2 text-sm font-medium text-black">Aucun</label>
            </div>
        </div>

        <span className='block uppercase tracking-wide px-3 text-gray-700 text-xs font-bold mb-2 '>Maitrise de l'outils inormatique?</span>
        <div className="grid grid-cols-2 gap-8 py-5 px-2  
                        lg:flex lg:gap-8 lg:py-5 lg:px-2">
            <div className="flex items-center">
                <input id="checkbox1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checkbox1" className="ml-2 text-sm font-medium text-black ">Facebook </label>
            </div>
            <div className="flex items-center">
                <input id="checkbox2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checkbox2" className="ml-2 text-sm font-medium text-black">Tiktok</label>
            </div>
            <div class="flex items-center">
                <input id="checkbox3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checkbox3" className="ml-2 text-sm font-medium text-black">Twitter</label>
            </div>
            <div className="flex items-center">
                <input id="checkbox4" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="checkbox4" class="ml-2 text-sm font-medium text-black">Instagram</label>
            </div>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 
                        lg:w-full md:w-1/2 px-3 mb-6 md:mb-0">
               <label
                className="block uppercase tracking-wide text-gray-700 text-xs  text-left font-bold mb-2"
                for="">Vous integrer quelle gouvernance?
               </label>
              <input
                className="appearance-none block w-[305px] lg:w-[25em]  text-gray-700 border border-blue-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="année"
                type="text"
                placeholder="Vous integrer quelle gouvernance?"
              />
            </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
               <label
                className="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2"
                for="">Comment avez-vous connu le COPIL COTOYEN?
               </label>
              <input
                className="appearance-none block w-[305px] lg:w-[25em] text-gray-700 border border-blue-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="année"
                type="text"
                placeholder="Comment avez-vous connu le COPIL COTOYEN?"
              />
        </div>

        <div className="flex py-3 justify gap-14 w-[150px] px-5 gap-10 md:flex-row lg:flex lg:justify-between lg:gap-14 lg:px-3 lg:py-5">
            <button className="bg-[#cf0d0dff] text-white rounded-lg px-3  lg:px-10 lg:py-2 flex justify-between gap-2 items-center">
            <AiOutlineArrowLeft/>
              Precedent
            </button>

            <button className="bg-blue-500 text-white rounded-lg px-3 lg:px-10 py-2 flex justify-between gap-4 items-center ">
             
              suivant
              <AiOutlineArrowRight/>
            </button>
          </div>
    </form>
   
  

  </>

    
  );
}
export default Form3


  

