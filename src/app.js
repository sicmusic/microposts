import {http} from './http';
import {ui} from './ui';


document.addEventListener("DOMContentLoaded", function(){
  getPosts();
}); 
ui.postBtn.addEventListener('click', submitPost);
ui.posts.addEventListener('click', deletePost);
ui.posts.addEventListener('click', enableEdit);


function getPosts() {
  
  http.get('http://localhost:3000/posts')
    .then((data) => {
      
      ui.showPosts(data);
      console.log(data);
      

    })
    .catch(err => console.log(err));
}

function submitPost(e){

  const title = ui.title.value;
  const body = ui.body.value;
  const id = ui.id.value;

  const data = {
    title,
    body
  }

  console.log(data);
  if(ui.title.value === "" || ui.body.value === ""){
    ui.showAlert('Please fill in all fields', 'alert alert-danger')
  } else{

      if(id === ""){
        http.post('http://localhost:3000/posts', data)
        .then(data => {
          
          getPosts();
          ui.clearFields();
          ui.showAlert('Post Added!', 'alert alert-success')
    
        }).catch(err => console.log(err));
    
      } else{
        console.log('fail');
        
      }
    
    }
  
  
}

function deletePost (e){
  if(e.target.parentElement.classList.contains('delete')){

    const id = e.target.parentElement.dataset.id;

    if(confirm('Are you sure?')){
      http.delete(`http://localhost:3000/posts/${id}`)

        .then((data) => {
          getPosts();
          ui.showAlert('Post deleted', 'alert alert-success');
        }).catch(err => console.log(err));
        
    }
  }
}

function enableEdit(e){
  if (e.target.parentElement.classList.contains('edit')) {
    
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    }

    ui.fillForm(data);

  }
}



