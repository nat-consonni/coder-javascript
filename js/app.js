//
// Función 1: Mostrar todas las tiendas
//
function mostrarTiendas() {
    console.log("Tiendas disponibles:");
    tiendas.forEach((tienda, index) => {
      console.log(`${index + 1}. ${tienda.nombre}`);
    });
}
  
//
// Función 2: Buscar productos por texto (nombre, marca o país)
//
function buscarProductosPorTexto(textoBusqueda) {
    const texto = textoBusqueda.toLowerCase();
    let resultados = [];
    
    tiendas.forEach(tienda => {
        tienda.productos.forEach(prod => {
            const nombreCoincide = prod.nombre.toLowerCase().includes(texto);
            const marcaCoincide = prod.marca.toLowerCase().includes(texto);
            const paisCoincide = prod.paisesPreferencia.some(pais =>
                pais.toLowerCase().includes(texto)
            );
            if (nombreCoincide || marcaCoincide || paisCoincide) {
                resultados.push({ tienda: tienda.nombre, ...prod });
            }
        });
    });
  
    if (resultados.length === 0) {
      alert("No se encontraron productos que coincidan.");
    } else {
        console.log("Resultados encontrados:");
        resultados.forEach(prod => {
            console.log(`
                Tienda: ${prod.tienda}
                Producto: ${prod.nombre}
                Marca: ${prod.marca}
                Países: ${prod.paisesPreferencia.join(", ")}
                Disponible: ${prod.disponible ? "Sí" : "No"}
                Cantidad disponible: ${prod.cantidad}
                Precio: $${prod.precio} UYU
            `);
        });
    }
}

  
//
// Función 3: Inicio del simulador
//
function iniciarSimulador() {
    alert("Bienvenido/a al simulador de productos intercaionales.\nPodés buscar productos por nombre, marca o país.");
    const textoBusqueda = prompt("¿Qué estás buscando? (nombre del producto, marca o país)");
    if (textoBusqueda && textoBusqueda.trim() !== "") {
        buscarProductosPorTexto(textoBusqueda.trim());
    } else {
      alert("No ingresaste ningún criterio de búsqueda.");
    }
}
  
//
// Ejecutar simulador
//
iniciarSimulador();
  