
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => {return res.json() })
    .then( states => {

        for( const state of states ){
            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()


function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexofSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexofSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( (res) => {return res.json() })
    .then( cities => {
        

        for( const city of cities ){
            citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

    document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

    //itens de coleta

    //pegar todos os li's

    const itemsToCollect = document.querySelectorAll(".items-grid li")

    for (const item of itemsToCollect){
        item.addEventListener("click", handleSelectedItem)
    }

    const collectedItems = document.querySelector("input[name=items]")

    let selectedItems = []

    function handleSelectedItem(event){
        const itemLi = event.target
        //adicionar ou remover uma classe com js
        itemLi.classList.toggle("selected")

        const itemId = itemLi.dataset.id

        // verificar se existe itens selecionados, se sim 
        // pegar os items selecionados

        const alreadySelected = selectedItems.findIndex( function(item){
            const itemFound = item == itemId // isso será true or false
            return itemFound
        })

        // se já estiver selecionado, tirar da seleção
        if(alreadySelected >= 0){
            //tirar da selação
            const filteredItems = selectedItems.filter(item => {
                const itemIsDifferent = item != itemId //false
                return itemIsDifferent
            })

            selectedItems = filteredItems
        }else{
             // se não estiver selecionado, adicionar a seleção
             // adicionar um elemento em um array 
             selectedItems.push(itemId)
        }

        // atualizar o campo escondido com os items selecionados
        collectedItems.value = selectedItems
    }