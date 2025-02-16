let data = [];

function renderToDo(){
    
     document.querySelector('.todo').innerHTML = ''
    
    data.forEach(task =>{

        let li = document.createElement('li')

        li.innerHTML=`
            <input type="checkbox" id="task-${task.id}">
            <label for="task-${task.id}">${task.title}</label>
            <button type="button">X</button>
        `;

        li.querySelector('input').addEventListener('change', e =>{
           if (e.target.checked){
               li.classList.add('completo');
           } else{
               li.classList.remove('completo');
           }
        });
        
        li.querySelector('button').addEventListener('click', e => {
            let button = e.target; 
            let li = button.parentNode;
            let input = li.querySelector('input');
            let id = input.id;
            let todoId = id.split('-')[1];
            let title = li.querySelector('label').innerText;
            
            if(confirm(`Deseja remover a tarefa: ${title}?`)){
            
                data = data.filter(task => task.id !== parseInt(todoId));

                renderToDo();
            }
        });

        document.querySelector('.todo').append(li);

    });
}
    
    
    document.querySelector('#new-task').addEventListener('keyup', e =>{
        if(e.key === 'Enter'){

            data.push({
                id: data.length+1,
                title: e.target.value
            });

            e.target.value = "";
            
            renderToDo()
        }
    });

 renderToDo();
    
