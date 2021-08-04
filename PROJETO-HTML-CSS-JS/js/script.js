//2º Função que adiciona tarefa
function adTarefa(){

// 3º	Título da tarefa	
const title = document.querySelector("#title").value

  
  if(title){ 

  //4º Clonar o template
  const template = document.querySelector(".template")
  const novaTarefa = template.cloneNode(true)

  //5º Adicionar título
  novaTarefa.querySelector(".title").textContent = title

  //6º Remover classes desnecessárias
  novaTarefa.classList.remove("template")
  novaTarefa.classList.remove("hide")

  //7º Adicionar tarefa na lista

  const list = document.querySelector("#list")
  list.appendChild(novaTarefa)

  //9º Remover no "x" (fechar um campo) através de um evento

  const removerTarefa = novaTarefa.querySelector("#remove-btn").addEventListener("click", function(){
  	excluirX(this)
  })

  //11º Adicionar evento de completar tarefa(caso se queira voltar na tarefa )

const completarTarefa = novaTarefa.querySelector("#done-btn").addEventListener("click", function(){
  	completar(this)
  }) 


  //8º Limpar o campo para aparecer o placeholder novamente
  document.querySelector("#title").value = ""

}

}

//10º (continuação do 9º). Função para remover a tarefa(fechar um campo) através de um evento

function excluirX(botao){
	botao.parentNode.remove(true)
}


//12º (continuação do 11º)Função para completar a tarefa (através de um evento)

function completar(botao){
	const tarefaCompleta = botao.parentNode
	tarefaCompleta.classList.toggle("done")
}



//1º Evento para adicionar tarefa
var button = document.querySelector("#btn")
button.addEventListener("click", function(e){
	e.preventDefault()

	
   adTarefa()

})

