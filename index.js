
import { ProyectoListController } from "./proyecto/index.js";
document.addEventListener('DOMContentLoaded',()=>{
    const proyectListElement = document.querySelector('.projects');

    const listProyect = new ProyectoListController(proyectListElement)

})