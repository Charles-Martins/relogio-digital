const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dataElement = document.getElementById('data');

function obterDataFormatada() {
  const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const dataAtual = new Date();

  const nomeDia = diasSemana[dataAtual.getDay()];
  const numeracao = dataAtual.getDate();
  const nomeMes = meses[dataAtual.getMonth()];
  const ano = dataAtual.getFullYear();

  return `${nomeDia}, ${numeracao} de ${nomeMes} de ${ano}`;
}

dataElement.textContent = obterDataFormatada();

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});
