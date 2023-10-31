import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
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

    <div className='py-5 lg:py-5 '>
    <h1 className="text-3xl font-bold">
      Formulaire d'adhesion
    </h1>
    <p className=''>Devenir un observateur citoyen de la gouvernance publique</p>
    </div>

<div className='flex items-center 
                lg:flex lg:ml-[30%] 
                md:flex  md:ml-[30%]
                '>
  <form class="w-full max-w-lg  py-5 lg:py-16 ">
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs  text-left font-bold mb-2" for="grid-nom-famille">
       Nom de famille *
      </label>
      <input className="appearance-none block w-full  text-gray-700 border border-blue-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nom de famille" type="text" placeholder="Votre nom complet"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-left text-xs font-bold mb-2" for="grid-prenom">
        Prenom *
      </label>
      <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-prenom" type="text" placeholder="Votre prénom"/>
    </div>
    

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700  text-left text-xs font-bold mb-2" for="grid-Lieu de naissance">
       Lieu de naissance *
      </label>
      <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-lieu-naissance" type="text" placeholder=""/>
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700  text-left text-xs font-bold mb-2" for="grid-date de naissance">
        Date de naissance *
      </label>
      <input className="appearance-none block w-full text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date-naissance" type="date" placeholder="00/00/00"/>
    </div>

  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2" for="grid-state">
        Sexe *
      </label>
      <div className="relative">
        <select className="block appearance-none w-full border border-gray-200 text-gray-400  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="sexe"  placeholder="">
          <option>Feminin</option>
          <option>Masculin</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs  text-left font-bold mb-2" for="grid-last-name">
        Photo d'identité
      </label>
      <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="file" placeholder="Votre prénom"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-left  text-xs font-bold mb-2" for="grid-first-name">
       Email
      </label>
      <input className="appearance-none block w-full text-gray-700  border border-blue-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="stellatsamezo@gmail.com"/>
    </div>

    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700  text-left text-xs font-bold mb-2" for="grid-last-name">
        Telephone *
      </label> 
      <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" type="tel" placeholder="+241 xx xx xx xx"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  </div>
  <div className='flex ml-10 gap-5 w-[150px] md:flex-row lg:flex justify-between'>
    <button className='bg-[#cf0d0dff] text-white rounded-lg px-10 py-2 flex justify-between gap-2 items-center'>
      <img src="img/icons8-flèche-gauche-50.png" className='w-[20px]' alt="fleche" />
      Precedent
    </button>
   
      <button  className='bg-blue-500 text-white rounded-lg px-10 py-2 flex justify-between gap-4 items-center '> suivant
        <img src="img/icons8-flèche-droite-50.png" className='w-[20px]' alt="fleche" /> 
      </button>
  </div>
</form>
</div>

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
    </>
  )
}
export default App
