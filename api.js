// fetch('datos.txt')
// .then(function(response){ 
//     return response.text();
// }) //Que clase de informacion estoy solicitando
// .then(function (data){ 
//     console.log(data);
// }) //Extrae los datos de consumo
// .catch(function(error){
//     console.log(`Hemos tenido un error ${error}`)
// })

// fetch('datos.txt')
// .then((response)=>{return response.text()})
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(`Hemos tenido un error ${error}`)})

// let url = 'datos.txt';
// fetch(url)
// .then(response=>response.text())
// .then(data=>{
//     let info = document.getElementById('dato');
//     info.innerHTML = data;
// })
// .catch(error=>console.log(`Hemos tenido un error ${error.message()}`))

let url = 'datos.json';
fetch(url)
    .then(res => res.json())
    .then(data => {
        let imp = document.getElementById('dato');
        let mensaje = "";
            // for (let index = 0; index < data.length; index++) {
            // mensaje += 
            // data[index].nombre +
            // " " + data[index].apellido +
            // "<b><br> Telefono: </b>" +
            // data[index].telefono +
            // "<b><br> Cedula: </b>" + data[0].cedula + "<br><br>" 
            // }


            // data.forEach(element => {
            //     mensaje += element.nombre + "<br>"
            // });

            data.map((valor,index,vector)=>{
                mensaje += valor.nombre + "<br>";
            })

            imp.innerHTML = mensaje;
        console.log(data);
    })