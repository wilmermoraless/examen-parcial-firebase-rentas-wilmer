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
    <div class="w-80 h-full mx-auto   bg-white  mb-10 pb-2 rounded-md">
    <div class="">
        <img src="${vivienda.imagen}" alt="${vivienda.nombre}" class="h-50 rounded-md mx-auto pt-4 pl-4 pr-4 ">
       
        </div>
        <div class="mt-4">
        <div class="text-center pb-2"> ${vivienda.costo} </div> 
        <div class="text-center mb-2"> ${vivienda.baños} </div>
        <div class="text-left absolute ml-4 mb-8"> 
       
</div>
        <div class="text-left absolute ml-12 ">  ${vivienda.camas} </div>
        <div class="text-right mr-4 pb-2">${vivienda.barrio} - ${vivienda.ubicacion} </div>
        
        </div>
        </div>
        <div class="pb-6"></div>
    </li>`;
});               