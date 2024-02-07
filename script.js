
let lists = document.getElementsByClassName("pull-down-list");
//console.log(lists)

const pullDownButton =document.getElementById("lists");
//console.log(pullDownButton)

window.addEventListener('load' , function(){

    const pullDownButton = document.getElementById("lists");
    pullDownButton.addEventListener('mouseover' , function(){
      pullDownButton.setAttribute("style" , "background-color:blue;")

        console.log("乗る");
    });
    
    pullDownButton.addEventListener('mouseout', function() {
      pullDownButton.removeAttribute("style" , "background-color:red;")
        
        console.log("離れる");
    });

    pullDownButton.addEventListener('click', function() {
        pullDownButton.setAttribute("style" , "background-color:green;")

        
       
        console.log("クリック");
    });
});

