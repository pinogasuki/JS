
//let lists = document.getElementsByClassName("pull-down-list");
  //console.log(lists)

//const pullDownButton =document.getElementById("lists");
   // console.log(pullDownButton)


//window.addEventListener('load' , function(){

    //const pullDownButton = document.getElementById("lists");
    //pullDownButton.addEventListener('mouseover' , function(){
      //pullDownButton.setAttribute("style" , "background-color:blue;")

        //console.log("乗る");
    //});
    
    //pullDownButton.addEventListener('mouseout', function() {
      //pullDownButton.removeAttribute("style" , "background-color:red;")
        
        //console.log("離れる");
   // });

    //pullDownButton.addEventListener('click', function() {
     // pullDownButton.setAttribute("style" , "display:block;")

        
      //  console.log("クリック");
   // });
//});

const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down");
pullDownButton.addEventListener('click' , function() {
    if (pullDownParents.getAttribute("style") == "display:block;"){
        pullDownParents.removeAttribute("style" , "display:block;")
        console.log("非表示")
    } else {
        pullDownParents.setAttribute("style" , "display:block;")
        console.log("表示")
}
})

pullDownButton.addEventListener('mouseover' , function(){
    this.setAttribute("style" , "background-color:blue;")
    console.log('乗ったら青色')
})


