    var header=document.querySelector('.header');
    var form=document.forms.my_form;
    var input=document.createElement("input");
    form.appendChild(input);
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Search..");
    input.setAttribute("name","name");
    var inp_val=input.value;
    

    var button=document.createElement("button");
    button.setAttribute("type","submit");
    form.appendChild(button);
    var i=document.createElement("i");
    button.appendChild(i);
    i.classList.add("fa", "fa-search");
    button.addEventListener('click', find);

    var poster_div=document.getElementById('posrer_div');
    
    function find(){
      
        var link=`http://www.omdbapi.com/?i=tt3896198&apikey=c8af20c9&t=${inp_val}`
        //var х=new Request(link);
        fetch(link)
        .then(response=>{   
          console.log(inp_val);               
          return response.json();            
        })
          .then((data)=>{
            console.log(data);
            /* poster_div.innerHTML=`<img src="${data.Poster}" alt="">`;  
            poster_div.innerHTML=`<h2>${data.Title}</h2>`;
            poster_div.innerHTML=`<h2>${data.Title}</h2>`;       
           }) */
        })
        /* .catch(error=>{
          console.log('error!');
          console.error(error);
        }) */
        
        /* catchPoster()
        .then(
          responce=>{
          console.log("yra!")
          })
        .catch(error=>{
          console.log('error!');
          console.error(error);
        )
          async function catchPoster(){
          const responce=await fetch(link);
          const blob=await responce.blob();
          poster_div.innerHTML=`<img src="${url.createObjectURL(blob)}" alt="">`
        }        
        */
      }
  
