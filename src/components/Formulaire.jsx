import "react-router-dom";
import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"
function Formulaire() {
  return (
    <div>
    

      <div className="
                    py-5 lg:py-5 lg:px-[30%]  ">
        <h1 className="text-4xl font-bold px-3">Formulaire d'adhesion</h1>
        <p className="">
          Devenir un observateur citoyen de la gouvernance publique
        </p>
      </div>

      <div
        className="px-5
                lg:flex lg:ml-[30%] 
                md:flex  md:ml-[30%]
                "
      >
        <form class="w-full max-w-lg  py-5 lg:py-16 ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs  text-left font-bold mb-2"
                for="grid-nom-famille"
              >
                Nom de famille *
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-blue-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-nom de famille"
                type="text"
                placeholder="Votre nom complet"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-left text-xs font-bold mb-2"
                for="grid-prenom"
              >
                Prenom *
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-prenom"
                type="text"
                placeholder="Votre prénom"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700  text-left text-xs font-bold mb-2"
                for="grid-Lieu de naissance"
              >
                Lieu de naissance *
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-lieu-naissance"
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700  text-left text-xs font-bold mb-2"
                for="grid-date de naissance"
              >
                Date de naissance *
              </label>
              <input
                className="appearance-none block w-full text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-date-naissance"
                type="date"
                placeholder="00/00/00"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2"
                for="grid-state"
              >
                Sexe *
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full border border-gray-200 text-gray-400  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="sexe"
                  placeholder=""
                >
                  <option>Feminin</option>
                  <option>Masculin</option>
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
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs  text-left font-bold mb-2"
                for="grid-last-name"
              >
                Photo d'identité
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="file"
                placeholder="Votre prénom"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-left  text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full text-gray-700  border border-blue-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-email"
                type="email"
                placeholder="stellatsamezo@gmail.com"
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700  text-left text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Telephone *
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="tel"
                placeholder="+241 xx xx xx xx"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6"></div>

          <div className="flex  gap-5  md:flex-row lg:flex lg:flex-row justify-between gap-5">
            
            <button className="bg-[#cf0d0dff] text-white rounded-lg px-10 py-2 flex justify-between gap-2 items-center">
            <AiOutlineArrowLeft/>
              Precedent
            </button>

            <button className="bg-blue-500 text-white rounded-lg px-10 py-2 flex justify-between gap-4 items-center ">
              suivant
              <AiOutlineArrowRight/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Formulaire