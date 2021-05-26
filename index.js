const calculaImc = (peso, altura)=>{
	let imc = peso / (altura * altura);
	return imc
}

const adicionaResultado = (event)=>{
	event.preventDefault();

	let peso = parseFloat(document.querySelector("[data-peso]").value);
	let altura = parseFloat(document.querySelector("[data-altura]").value);
	let resultado = calculaImc(peso, altura);

	
	let mostraResultado = document.querySelector("[data-resultado]");
	mostraResultado.innerHTML = `Seu IMC é: ${resultado.toFixed(2)}`;

}

const calcular = document.querySelector("[data-button]");

calcular.addEventListener("click", adicionaResultado);