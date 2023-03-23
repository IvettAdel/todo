/*
* File: style.css
* Author: Verebélyi Ivett Adél
* Copyright: 2023,Verebélyi Ivett Adél
* Group: Szoft I-2 E
* Date: 2023.03.23
* Github: https://github.com/IvettAdel
* Licenc: GNU GPL
*/
const doc = {
    tbody: document.querySelector('#tbody')
};

const state = {
    host: 'http://localhost:8000/',
    todos: []
};
getTodos();
function getTodos() {
    let url = state.host + 'todos';
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log (result);
        state.todos = result;
        render();
        
    });
}
    function render() {
        let rows = '';
        state.todos.forEach( (todo)=>{
            rows += `
            <tr>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td>${todo.ready}</td>
            </tr>
            `;

        });
       doc.tbody.innerHTML = rows; 
    }
