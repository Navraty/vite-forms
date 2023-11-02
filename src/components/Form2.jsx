import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"
  function Form2() {
  return (
  <>
    <div className='py-5 lg:py-3 lg:ml-[30%]'>
      <h1 className="text-3xl font-bold px-8">
        Formulaire d'adhesion
      </h1>
      <p className=''>Devenir un observateur citoyen de la gouvernance publique</p>
    </div>

    <div className='px-5 
                  lg:ml-[32%] lg:py-5'>
      <p>Circonscription</p>
      <button className="  lg:flex md:w-1/5 mb-6 md:mb-0 ">
        <div className="relative">
          <select
            className="block appearance-none border border-blue-500 text-gray-400 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="">
              <option>Gabon, ou Diaspora</option>
              <option>Gabon</option>
              <option>Diaspora</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
          </div>
        </div>
      </button>
    </div>

    <div>
      <div className='px-5 lg:ml-[30%] shadow-lg lg:w-1/3 lg:px-5'>
        <div className='flex  '>
          <p className='text-semi-bold text-sm'>En signant cette fiche d'adhésion, En rempissant ce <br/> formulaire de fiche d'adhésion, j'ai pris 
              de la connaisance de la  <br />charte de valeur du COPIL CITOYEN et m'engage à <br /> promouvoir lesdites
              valeurs dans un esprit patriotique sans <br /> faille.
          </p>
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        </div>
        
        <button className='text-blue-500 text-semi-bold underline flex justify-between gap-2 py-4 items-center'>Cliquez pour savoir plus
          <AiOutlineArrowRight/>
        </button>
      </div>

      <div className=' w-full  py-3 px-3
                      lg:py-10 lg:w-1/3 lg:ml-[25em] '>
        <button className="bg-blue-500 text-white rounded-lg  w-full px-6 py-2 flex gap-2 items-center ">
          suivant
          <AiOutlineArrowRight/>
        </button>
      </div>
    </div>

    
  </>
   




  );
}

export default Form2;
