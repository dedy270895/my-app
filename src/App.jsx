import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';
import ButtonClass from './components/ButtonClass';
import ButtonFunction from './components/ButtonFunction';
import TombolAlert from './components/TombolAlert';
import ToDo from './containers/ToDo';

function App() {
  
    const listMenu = ["Soto", "Mie", "Nasi Padang", "Sate"];
    //alert
    const onClickHandler = (song) =>{
      alert(song);
    }
    //returnnya
    return (
      <div className='App'>
        {/* <h1>Hello React!</h1>
        <p>My Favorite Food is :</p>
        <ul>
          {
            listMenu.map((food)=> {
              return  <li key={food}>{food}</li>;
            })
          }
        </ul>
        <div style={{margin: "20px", padding: "20px", backgroundColor:"lightblue"}}>
          <ButtonClass text="I'm Button Class"/>
          <ButtonFunction tulisan="I'm Button Function" warna="blue"/>
          <br></br>
          <ButtonClass/>
          <ButtonFunction/><b></b>
          <br></br>
          <TombolAlert text="Alert La la la" onClickHandler={()=>onClickHandler("La la la")}/>
          <TombolAlert text="Alert Li li li" onClickHandler={()=>onClickHandler("Li li li")}/>
        </div> */}
        
          <ToDo/>

      
      </div>
      
    )

  
}

export default App;
