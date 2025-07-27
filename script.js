const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entry.target)
        }
    })
},{})
const todoElements = document.querySelectorAll(".container")
todoElements.forEach(el => observer.observe(el))