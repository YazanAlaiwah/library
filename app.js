 var books = 0;
 var visa;
 var name;
 function takeUserInfo(){
     name = prompt('what\'s your name')
     visa = prompt('what\'s your cridit number')    
 }

takeUserInfo()

function click(event){
    books++
}

function close(){
    open(location, '_self').close();
}

function confirmpay(){
   if(confirm(`you choose ${books} do you want to continuo`)){
    var count = 3
    var confirme = prompt('write your cridit card to confirme buyment')
    while(visa != confirme){
        console.log(count,count===3)
        if(count === 0){
            prompt('sorry we can\'t sell you have a good day')
            return close()
             break;
            // count++
            // console.log(count)

        }
        confirme = prompt(`you have ${count} chance`)
        count--
    }
    alert('we will send your books')
   }{

   }
}

