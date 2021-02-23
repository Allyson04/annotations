const GetHelp = document.querySelector(".help-main").classList
const GetAddNote = document.getElementById("addNote").classList

Intro = {  
    toggleHelp(){
        GetHelp.toggle("hidden")
    }
}

Notes = {
    remove(position){
        document.querySelector("#addNote div:nth-child(" + position + ")").classList.add("hidden")
    }
}