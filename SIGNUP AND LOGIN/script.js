const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "PHOTO EDITOR\\index.html"
    }else{
        alert("wrong")
    }
})


function authentication(username,password){
    if(username === "admin" && password === "03175487726-03203216866-03260232006"){
    // if(username === "admin" && password === "123"){
        return true
    }else{
        return false
    }
}