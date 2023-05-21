//Importar firebase y su configuracion
import {db} from '../firebase';

//Importar getFirestore para leer la base de datos
import { collection, query, getDocs} from 'firebase/firestore';

//Leer la coleccion de viviendas
const viviendas = query(collection(db, "viviendas"));

//Leer los documentos de la coleccion de forma asincrona
const querySnapshot = await getDocs(viviendas);

let viviendas_contenedor = document.getElementById('viviendas');

querySnapshot.forEach((doc) => {
  let vivienda = doc.data()
    viviendas_contenedor.innerHTML += `<li>
    <div class="  mx-auto mt-8  bg-white  mb-6  rounded-md  flex">
    <div class="   ">
        <img src="${vivienda.imagen}" alt="${vivienda.nombre}" class="h-40 w-76 rounded-3xl mx-auto pt-4 pl-4 pr-4 ml-4">
       
        </div>
        <div class="mt-4 pt-4 ">
        <div class="text-center  font-bold"> ${vivienda.costo} </div>
        <div class="flex ml-2 "> 
        <div class="text-center mb-2 font-bold"> ${vivienda.baños} </div>
         <div class="text-left  ml-2 font-bold ">  ${vivienda.camas} </div>
         </div>
       
       
        <div class=" ml-1 font-bold">${vivienda.barrio}   </div>
        <div class=" ml-1 font-bold">${vivienda.ubicacion}</div>
        </div>
        </div> 
        
    </li>`;
});               



