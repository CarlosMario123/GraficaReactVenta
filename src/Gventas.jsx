
import { Bar} from 'react-chartjs-2';
import { ventas } from './Ventas';
import { useState } from 'react';
import { Chart as ChartJS } from "chart.js/auto";
function Gventas() {
 
 //usamos un useState que sera util para la grafica
const [datosg, setdatosg] = useState({
  labels: ventas.map((data) => "dia: " +data.dia),//etiquetas de abajo de la grafica
  datasets: [
    //informacion de las barras de cantidad vendida
    {
      label: "Estadistica de cantidad vendida",
      data: ventas.map((data) => data.cantidadVendida),
      backgroundColor: [
        "blue",
       
      ],
      borderColor: "black",
      borderWidth: 2,
    },
       //informacion de las barras de invertido todo se maneja como objeto
    {
        label: "Estadistica de invertido",
        data: ventas.map((data) => data.invertido),
        backgroundColor: [
          "green",
        
        ],
        borderColor: "black",
        borderWidth: 2,
      }
  ],
})

  return (
    <div style={{ width: 700 }} className='margen'>
      <Bar data={datosg}/>
    </div>
    
     
  )
}

export default Gventas;