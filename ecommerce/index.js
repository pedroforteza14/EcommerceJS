let arrayProductos = [
    { nombre: "Laptop", precio: 3200, cantidad: 3 },
    { nombre: "PC", precio: 800, cantidad: 2 },
    { nombre: "iPhone", precio: 17400, cantidad: 5 },
  ];
  let nuevoArray = arrayProductos.map((elemento) => ({
        nombre: elemento.nombre,
        cantidad: elemento.cantidad,
        precio: elemento.precio * 1.20,
      }));
     
      console.log(nuevoArray)


  let precioTotal = arrayProductos.reduce(
        (acumulador, elemento) => acumulador + elemento.precio,
        0
      );
     
      console.log(precioTotal);

      

      arrayProductos.sort((a, b) => a.precio - b.precio);

       arrayProductos.sort((a, b) => {
         if (a.nombre.length > b.nombre.length) {
           return 1;
         }
         if (a.nombre.length < b.nombre.length) {
           return -1;
         }
         return 0;
       });
      
       console.log(arrayProductos);