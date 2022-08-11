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

