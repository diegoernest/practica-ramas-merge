function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
  }
  
  function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
  }
  
  function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
  }
<<<<<<< HEAD
  

  function deshacer(){
    const valorPantalla = document.getElementById('pantalla').value;
    document.getElementById('pantalla').value = valorPantalla.slice(0,-1)



  }
=======

  function deshacer(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = valorPantalla.substring(0, valorPantalla.length -1);
    document.getElementById('pantalla').value = resultado
  }
  
>>>>>>> ramapedriCode
