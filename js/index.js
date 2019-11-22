   window.onload=function(){
   var header=document.querySelector('.header');
    console.log(header);
    //var form=document.createElement("form");
    var form=document.forms.my_form;
    console.log(form);
    //header.innerHTML=form; 

    var input=document.createElement("input");
    form.appendChild(input);
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Search..");
    input.setAttribute("name","name");
    

    var button=document.createElement("button");
    button.setAttribute("type","submit");
    form.appendChild(button);
    var i=document.createElement("i");
    button.appendChild(i);
    i.classList.add("fa", "fa-search");

    button.addEventListener('click', find);

    var poster=document.createElement('div');
    poster.classList.add("poster", "row", "text-center");
    console.log(poster);

    var inp_val=input.value;
    function find(){
        var link=`http://www.omdbapi.com/?i=tt3896198&apikey=c8af20c9&t=${inp_val}`
        fetch(link)
        .then(response=>{ 
            console.log(response);       
            return response.json();            
        })
          .then((data)=>{
            console.log(data);
            poster.innerHTML=`<img src="${data.Poster}" alt="">`;  
            poster.innerHTML=`<h2>${data.Title}</h2>`;
            poster.innerHTML=`<h2>${data.Title}</h2>`;       
           }) 
    }  
   }
