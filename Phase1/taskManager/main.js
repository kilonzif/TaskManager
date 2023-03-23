
let addBtn = document.querySelector('#addBtn');

addBtn.onclick = function(){
    let userInput =  document.querySelector('#newtask input').value;

    //validation 
    if( userInput === ""){
        alert("Please enter a task");
    }
    else{

       // console.log(userInput); 
        //id => tasks
   
        document.querySelector('#tasks').innerHTML += `
         <div id="task">    
           <span> ${userInput} </span>
           <button class="done">Done </button>
        </div>
        `;

        let doneTaskBtn = document.querySelectorAll('.done');

        for (let i=0; i<doneTaskBtn.length; i++){

            doneTaskBtn[i].onclick = function(){
                doneTaskBtn[i].parentNode.style.textDecoration = "line-through";
            }

        }
        

        

       
        

    }

}