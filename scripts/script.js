const GetHelp = document.querySelector(".help-main").classList

Intro = {  
    toggleHelp(){
        GetHelp.toggle("hidden")
    }
}

Notes = {
    remove(position){
        const GetNote = document.querySelector("#notes-section div:nth-child(" + position + ")").classList
        GetNote.add("hidden")
    }
}