alert("Olá, você! Eu sei que esse tipo de pop up é chato, mas é importante e bem rápido, prometo. Você só vai precisar clicar em 'ok' mais quatro vezes. Muito em breve eu vou retirar essa chatice aqui :)")
alert("1- Eu sou o Esteferson. Programação não é minha área, mas é algo que eu sempre quis aprender e recentemente decidi estudar essa maravilha.")
alert("2- Como sou iniciante em programação, é muito importante para mim que qualquer bug seja informado. Caso note qualquer mau funcionamento, por favor, me informe.")
alert("3- Por último, uma pequena instrução: para fazer a pesquisa, atualmente é necessário utilizar maiúsculas e minúsculas corretamente, senão a ferramenta não filtrará os resultados.")
alert("4- Bem, é isso. Espero que a ferramenta seja útil!")

for(i of document.querySelectorAll('[search]')){
    try{
        busca(i,document.querySelector("#"+i.getAttribute('search')))
    }catch(e){}
}

function busca(input_field,div){
    input_field.onkeyup=function(e){
        for(di of div.children){
            r  = new RegExp(this.value,"g")
            if(di.getAttribute("nome").match(r) != null)
                di.style.removeProperty('display')
            else
                di.style.display = "none"
        }
    }
}

//a 5º linha da função busca estava assim:

//if(di.getAttribute("nome").toLowerCase().match(r) != null)

//tirei o retorno em minúsculo para a busca aceitar letras maiúsculas e minúsculas
