const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })


nightmare
  .goto('https://www.bdfutbol.com/es/t/t2018-19.html')
  // .type('#search_form_input_homepage', 'github nightmare')
  // .click('#search_button_homepage')
  // .wait('#r1-0 a.result__a')
  .evaluate(function(){
      // DECLARAMOS UN ARRAY DONDE ALOJAREMOS LOS OBJETOS QUE NOS INTERESEN
      var encuentros = [];

      // CONSULTA PARA OBTENER OBJETOS DE CIERTO TIPO
      $('#classific tbody tr').each(function(){
          // DECLARAMOS UN OBJETO VACIO
          item = {};
          // AÑADIMOS LOS DATOS QUE NOS INTERESAN AL OBJETO
          item ['clasificacion: '] = $(this).children().eq(1).text();
          item ['equipo: '] = $(this).children().eq(3).text();
          item ['puntos: '] = $(this).children().eq(4).text();
          item ['pj: '] = $(this).children().eq(5).text();
          item ['pg: '] = $(this).children().eq(6).text();
          item ['pe: '] = $(this).children().eq(7).text();
          item ['pp: '] = $(this).children().eq(8).text();
          item ['gf: '] = $(this).children().eq(9).text();
          item ['gc: '] = $(this).children().eq(10).text();
          item ['ta: '] = $(this).children().eq(11).text();
          item ['tr: '] = $(this).children().eq(12).text();
    
         /* 
          // forma 1ª para acceder a los hijos
          item['encuentro'] = $(this).children().eq(0).text();
          // forma 2ª para acceder a los hijos
          item['local'] = $(this).find('td:nth-child(2)').text();
          item['local_gol'] = $(this).find('td:nth-child(4)').text();
          item['visitante_gol'] = $(this).find('td:nth-child(6)').text();
          item['visitante'] = $(this).find('td:nth-child(8)').text();
          item['resultado'] = $(this).find('li.active').text();
          // AÑADIMOS CADA UNO DE LOS HIJOS*/
          encuentros.push(item);
      })
      // RETORNAMOS EL RESULTADO
      return encuentros;
  })
  .end()
  // HACEMOS USO DEL RESULTADO
  .then(function(result){
      for(equipo in result){
        console.log(result[equipo]);
      }
  })
  .catch(error => {
    console.error('BÚSQUEDA FALLIDA:', error)
})