
//#region Reyes Magos
const inReyesMagos = document.getElementById("inReyesMagos");
const buReyesMagos = document.getElementById("buReyesMagos");
const reyesMagos = fecha => {
  const fechaReyes = new Date();
  let tiempo = 0;

  // Asignar el día de reyes.
  fechaReyes.setFullYear(new Date().getFullYear() + 1);
  fechaReyes.setHours(0, 0, 0);
  fechaReyes.setDate(7);
  fechaReyes.setMonth(0);

  // Calcular el nº de días
  tiempo = fechaReyes - fecha;
  return Math.floor(tiempo / (1000 * 60 * 60 * 24));
};

buReyesMagos.onclick = function () {
  const tiempo = reyesMagos(new Date(inReyesMagos.value));

  if (tiempo < 0)
    alert("Has viajado en el tiempo y se te han pasado los reyes.");
  else if (tiempo == 0)
    alert("¡Mira debajo de el árbol que han llegado hoy!");
  else
    alert("Faltan " + tiempo + " días para que vengas los reyes.")
};
//#endregion

//#region Mostrar la fecha
const buDate = document.getElementById("buDate");

buDate.onclick = function () {
  const fecha = new Date();
  const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  let message = `Hoy es ${days[fecha.getDay()]}, ${fecha.getDate()} de ${months[fecha.getMonth()]} de ${fecha.getFullYear()} y son las ${fecha.getHours()}:${fecha.getMinutes()} horas.`

  alert(message);
}
//#endregion

//#region Círculo
const inCircle = document.getElementById("inCircle");
const buCircle = document.getElementById("buCircle");
const calcularAreaCirculo = radio => {
  return Math.round(
    Math.PI * radio * radio * 100 + Number.EPSILON) / 100;
};
const calcularPeriCirculo = radio => {
  return Math.round(
    2 * Math.PI * radio * 100 + Number.EPSILON) / 100;
};

buCircle.onclick = function () {
  const radio = inCircle.value;
  const message = `El círculo de ${radio} uds. de radio tiene:
    - un perímetro de ${calcularPeriCirculo(radio)} uds.
    - un área de ${calcularAreaCirculo(radio)} uds.`;
  alert(message);
}
//#endregion

const inRandMin = document.getElementById("inRandMin");
const inRandMax = document.getElementById("inRandMax");
const buRand = document.getElementById("buRand");