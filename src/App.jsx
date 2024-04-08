import Header from './component/Header';
import './App.css';
import CustomInput from './component/CustomInput'
import Home from './component/Home';
import MyButton from './component/MyButton';
import InpChange from './component/InpChange';
import StateLearn from './component/StateLearn';
import ToggleDarkMode from './component/ToggleDarkMode.jsx';
import Cartify from './component/Index.jsx';
import Toggle from './component/Toggle.jsx';
import FetchData from './component/FetchData';
import Modal from './component/Modal';
import CustomSelect from './component/CustomSelect';
import Form from './Form';
import FetchProduct from './component/FetchProd';
import ShadCnForm from './component/ShadcnForm';

function App() {
 
  const H1TagStyle = {
    color: "red",
    fontSize: "30px",
    fontWeight: "bold",
  }

  return(
    <div>
      <ShadCnForm/>
      {/* <Form/> */}
      <FetchProduct/>
      {/* <Modal/> */}
      {/* <CustomSelect/> */}
       {/* <h1 style={H1TagStyle}>Hello World The work is done</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut culpa odit similique veritatis numquam minima ullam, qui fugiat beatae nostrum officia aut omnis temporibus ea architecto! Ducimus eveniet inventore magnam.</p>
      <CustomInput type={'password'} />
      <CustomInput type={'range'} />
      <CustomInput type={'radio'} />
      <CustomInput type={'file'} />
      <CustomInput type={'color'} />
      <CustomInput type={'hidden'} />
      <CustomInput type={'date'} />
      
      <Cartify/>
      <Home/>
      <Header/>
      <InpChange/>
      <StateLearn/>
      <ToggleDarkMode/>
      <Toggle/>
      <FetchData/>
      
     
      
      
      */}
    </div>
  )
}

export default App