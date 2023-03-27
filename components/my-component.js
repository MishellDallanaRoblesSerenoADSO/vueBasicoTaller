export default{
    data(){
        return{
            lista:[],
            nombre: null,
            serie: null,
            plataforma: null,
            Agregar: " ",
            Agregarfin: " ",
            Copialist: [],
        }
        
    
    },
    methods:{
        Send(){
            this.lista.push({
            nombre:this.nombre,
            serie:this.serie,
            plataforma:this.plataforma}),
            this.nombre=null,
            this.serie=null,
            this.plataforma=null
        },

        // Eliminar primer elemento

        DeleteFirst() {
            this.lista.shift();
        },

        // Eliminar ultimo elemento

        DeleteLast() {
            this.lista.pop();
        },

        // Agregar elemento al comienzo

        AddItem() {
            this.lista.unshift(this.Agregar);
            this.Agregar= " ";
            this.lista.unshift({
               nombre:this.nombre,
               serie:this.serie,
               plataforma:this.plataforma
            })
           this.nombre = "";
            this.serie = "";
           this.plataforma = ""

        },

        // Agregar elemento al final

        // AddItemFin() {
        //     this.lista.push(this.AgregarFin);
        //     this.AgregarFin= " ";
        //     this.lista.push({
        //         nombre:this.nombre,
        //         nombre:this.serie,
        //         nombre:this.plataforma,
        //     })
        // },


        // Iterar array con ForEach

        Iterar() {
            this.lista.forEach(lista => {
                console.log(this.lista)
            });
        },

        //Copia con map

        Copia() {
            this.Copialist = this.lista.map(Copialist =>{
                return{
                    nombre:this.nombre,
                    serie:this.serie,
                    plataforma:this.plataforma
                }
            })
        }
    }
}