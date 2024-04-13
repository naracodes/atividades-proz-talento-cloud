function imprimirMensagem() {
    console.log("Conexão feita com sucesso!");
}

imprimirMensagem();
imprimirMensagem();
imprimirMensagem();

//Capturando elementos
let h1 = document.getElementById("titulo");
let ul = document.querySelector('ul');
let a = document.querySelector('a');
let ol = document.getElementById("lista-ordenada");

h1.innerText = "Bem Vindos";
a.innerText = "Site da Proz";
ul.innerHTML = ` 
<li>Cursos</li>
<li>Notas</li>
<li>Aulas</li>
`;
ol.innerHTML = ` 
<li>Cursos</li>
<li>Notas</li>
<li>Aulas</li>
`;
