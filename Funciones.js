window.onload = function () {
  const mostrar = document.getElementsByClassName('MostrarMas');

    Array.from(mostrar).forEach(function (boton) {
      
      let bandera=true;
      boton.addEventListener('click', function () {
        if(bandera){          
          boton.textContent='Mostrar Menos';
          bandera=false;
          switch (boton.id) {
            case 'Ti1':
              document.getElementById('Titulo1').innerHTML += ', Escuela Secundaria Media 10 (finalizado en el año 1994)';
              break;
            case 'Ti2':
                document.getElementById("Titulo2").innerHTML += ", Centro de capacitación Sarmiento (finalizado en el año 2002)";
                break;
            case 'Ti3':
              document.getElementById("Titulo3").innerHTML += ", UTN (finalizado en el año 2000)";
              break;
            case 'Ti4':
              document.getElementById("Titulo4").innerHTML += ", UTN (inconcluso)";
              break;
            case 'Tr1':
              document.getElementById('Trabajo1').innerHTML += ', Hospital Dental Tigre(1995-1999)';
              break;
            case 'Tr2':
              document.getElementById('Trabajo2').innerHTML += ', Binit (2000-2009)';
              break;
            case 'Tr3':
              document.getElementById('Trabajo3').innerHTML += ', Binit (2009-2020)';
              break;
        }
      }
      else{
        boton.textContent='Mostrar Mas';
          bandera=true;
          switch (boton.id) {
            case 'Ti1':
              document.getElementById('Titulo1').innerHTML = 'Secundario completo';
              break;
            case 'Ti2':
                document.getElementById("Titulo2").innerHTML = "Curso Diseño Grafico";
                break;
            case 'Ti3':
              document.getElementById("Titulo3").innerHTML = "Tecnicatura en sistemas";
              break;
            case 'Ti4':
              document.getElementById("Titulo4").innerHTML = "Curso Armado de pc";
              break;
            case 'Tr1':
              document.getElementById('Trabajo1').innerHTML = 'Secretaria de dentista';
              break;
            case 'Tr2':
              document.getElementById('Trabajo2').innerHTML = 'Programadora jr';
              break;
            case 'Tr3':
              document.getElementById('Trabajo3').innerHTML = 'Programadora senior';
              break;
        }
      }
      });
    });
};
