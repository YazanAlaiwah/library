 var books = 0;
 var visa;
 var name;
 var addImages='';
 function takeUserInfo(){
     name = prompt('what\'s your name')
     visa = prompt('what\'s your cridit number')    
 }
 var imgs = ['https://i.ytimg.com/vi/848q7WLmwbk/maxresdefault.jpg','https://i.ytimg.com/vi/VlsQC87i06w/maxresdefault.jpg','https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/War_official_poster.jpg/220px-War_official_poster.jpg','https://www.foxmovies.com/s3/dev-temp/en-US/__5d92439d566e1.jpg','https://knnit.com/wp-content/uploads/2019/12/Movie-Genres-Types-of-Movies-List-of-Genres-and-Categories-Header-StudioBinder.jpg']

 function addBooks() {
    var howManyBooks = Number(prompt('how many books you wnat'))
    for(let i = 0; i < howManyBooks;i++){
        addImages+= `<img src="${imgs[i%imgs.length]}">`
    }
    var target = document.querySelector('main');
    var div = document.createElement('div');
    div.innerHTML = addImages;
    target.parentNode.insertBefore( div, target.nextSibling );

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

