window.onload = search();

function search() {
  const inputElement = document.querySelector('#app input');
  const textSearch = inputElement.value ? `?search=${inputElement.value}` : '';
  let saida = '';

  const url = `datas${textSearch}`;

  $.getJSON(url, function(data) {
    saida += '<table class="table table-striped">';
    saida += '<thead>';
    saida += '<tr>';
    saida += '<th>Ano</th>';
    saida += '<th>Faixa Etária</th>';
    saida += '<th>Geografia</th>';
    saida += '<th>UF</th>';
    saida += '<th>Área</th>';
    saida += '<th>Sexo</th>';
    saida += '<th>Cor</th>';
    saida += '<th>Valor Absoluto</th>';
    saida += '<th>Valor percentual</th>';
    saida += '<th>Latitude</th>';
    saida += '<th>Longitude</th>';
    saida += '</tr>';
    saida += '</thead>';

    saida += '<tbody>';
    Object.keys(data).forEach(item => {
      saida += '<tr>';
      saida += `<td title=${data[item].year}>${data[item].year}</td>`;
      saida += `<td title=${data[item].age_range}>${data[item].age_range}</td>`;
      saida += `<td title=${data[item].city}>${data[item].city}</td>`;
      saida += `<td title=${data[item].state}>${data[item].state}</td>`;
      saida += `<td title=${data[item].area}>${data[item].area}</td>`;
      saida += `<td title=${data[item].gender}>${data[item].gender}</td>`;
      saida += `<td title=${data[item].color}>${data[item].color}</td>`;
      saida += `<td title=${data[item].absolute_value}>${data[item].absolute_value}</td>`;
      saida += `<td title=${data[item].percentual_value}>${data[item].percentual_value}</td>`;
      saida += `<td title=${data[item].latitude}>${data[item].latitude}</td>`;
      saida += `<td title=${data[item].longitude}>${data[item].longitude}</td>`;
      saida += '</td>';
      saida += '</tr>';
    });
    saida += '</tbody>';
    saida += '</table>';

    saida += '<br>';

    document.getElementById('tela').innerHTML = saida;
  });
}
