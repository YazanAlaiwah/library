 var books = 0;
 function takeUserInfo(){
    var name = prompt('what\'s your name')
    var age = prompt('what\'s your age')
    if(age >= 18){
        alert(`welcom ${name} we will show you books good for your age ${age}`)
    }else{
        alert('you are not allowed to access the bookstory sorry') 
        window.history.back();
    } 
    
 }

takeUserInfo()
// window.history.go()

function click(event){
    books++
    console.log(books)
}

