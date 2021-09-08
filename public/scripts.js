function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")    
}

function checkFields(event){
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function(value){
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()
        if(checkIfIsString && checkIfIsEmpty  ){
            return true
        }
    }) 

    if(isEmpty){
        event.preventDefault()
        alert(`Por favor, preencha todos os campos!`)
    }
}
/*
function deleteIdea(stId){
    
    console.log(stId)
    const id = parseInt(stId) 

    const query = `DELETE FROM ideas WHERE id = ?`

    const value = [id]

    db.run(query, value, function (err){
        if (err) return console.error(err)

        console.log("DELETADO", this)
    })
    

}*/
