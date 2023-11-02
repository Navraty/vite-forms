import {Routes, Route, BrowserRouter} from "react-router-dom"

import Formulaire from './components/Formulaire';
import Form2 from './components/Form2';
import Form3 from './components/Form3'
import Form4 from './components/Form4'
import Layout from "./navigation/Layout"; 
function App(){
  return(
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Formulaire />}/>
          <Route path='/form2'element={<Form2/>}/>
          <Route path='/form3'element={<Form3/>}/>
          <Route path='/form4'element={<Form4/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
   
  )
}

export default App;