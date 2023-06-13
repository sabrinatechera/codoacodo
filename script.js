
document.addEventListener("DOMContentLoaded", function () {
    const cantidadElement = document.getElementById("cantidad");
    const categoriaElement = document.getElementById("categoria");
    const totalPagarElement = document.getElementById("totalPagar");
    const formulario = document.querySelector("form");
    formulario.addEventListener("reset", borrarCalculo);
    
    cantidadElement.addEventListener("change", calcularTotal);
    categoriaElement.addEventListener("change", calcularTotal);
  
    function calcularTotal() {
      const entrada= 200;
      const cantidad = parseInt(cantidadElement.value);
      const categoria = categoriaElement.value;
      let descuento = 0;
      
      if (categoria === "estudiante") {
        descuento = 0.8;
      } else if (categoria === "trainee") {
        descuento = 0.5;
      } else if (categoria === "junior") {
        descuento = 0.15;
      }else{
        descuento=0
      }
  
      const totalPagar = cantidad * entrada * (1 - descuento);
      totalPagarElement.textContent = "$" + totalPagar.toFixed(2);
    }

    function borrarCalculo() {
      totalPagarElement.textContent = "$0";
    }
  
    
    calcularTotal();
  });
  

  