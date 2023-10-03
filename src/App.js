import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchcarslist } from './Redux/carsSlice';
import Page from './components/page';
import Navbar from './components/Navbar';
function App() {

  const dispatch = useDispatch() 
  
  const data = useSelector((state)=>{
    return state
  })
  const carlist = data.cars.cars.data
  

  window.addEventListener("load", (event) => {
    dispatch(fetchcarslist())
})

if(data.cars == null){
  dispatch(fetchcarslist())}

  console.log("data",carlist)
  return (
    <div className="App w-screen h-screen fixed bg-slate-300">
      <Navbar/>
      <Page/>
    </div>
  );
}

export default App;
