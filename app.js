window.onload = function (){
    const button = document.querySelector('.btn');
    var results = document.querySelector('.results');
    $.ajax({
      url: 'superheroes.php',
      type: 'post',
      success: function(response) 
      {results.innerHTML=response;}
  
    }); 
    button.addEventListener('click', function(e) {
        e.preventDefault();
        var button =document.getElementById("elementId").value;
        $.ajax({
          url: 'superheroes.php',
          type: 'post',
          data: { "query": button},
          success: function(response) 
          {results.innerHTML=response;}
      
        });  
             
    });
}