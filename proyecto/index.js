import { db } from "./db.js";
import { buildProductView } from "./viewProyectos.js";

export class ProyectoListController{
    constructor(nodeElement){
        this.conteinerElement = nodeElement
        this.getProyects()
    }

    getProyects(){
        let proyect=[]
        try {
            proyect = db
            
        } catch (error) {
            console.log(error);
        }
        this.drawProyect(proyect)
    }

    drawProyect(proyects) {
        for (const product of proyects) {
           
            const articleElement = document.createElement('article');
            articleElement.classList.add("project-item")
           
            articleElement.innerHTML = buildProductView(product)
          
          this.conteinerElement.appendChild(articleElement);
        }
    }
}
