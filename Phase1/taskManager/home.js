
fetch("http://localhost:3000/tasks")
  .then(function (response) {
    return response.json(); 
  })
  .then(function (data) {

    
    for(let i=0; i<data.length; i++){
        task_description = data[i].description;
        
        let taskImg = data[i].image; 

        let done = data[i].Done;

        // if (done==true){
        //     //dstrikethrough description
        // }
        

        document.querySelector('.taskItems').innerHTML += ` <div class="col-3 card">
         <img src="${taskImg}"  alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b> ${task_description} </b></h4> 
            <button class="done">Done </button>
        </div>
        </div>
        `

        {/* document.querySelector('.taskItems').innerHTML += `
        <div id="task"> 
        <image src="${taskImg}" alt="Task Image" />   
          <span> ${task_description} </span>
          <button class="done">Done </button>
       </div>
       `; */}

    }
    

  });


