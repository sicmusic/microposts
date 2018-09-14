class UI {

  constructor(){
    this.posts = document.querySelector('#posts');
    this.postBtn = document.querySelector('.post-submit');
    this.title = document.querySelector('#title');
    this.body = document.querySelector('#body');
    this.id = document.querySelector('#id');
  }

  showPosts(posts) {

    let output = '';

    posts.forEach(post => {
      output +=
        `<div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>

            <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
          </a>
          </div>
        </div>`
    });

    this.posts.innerHTML = output;
    
  }
  clearFields(){
    this.title.value = "";
    this.body.value = "";
  }
  showAlert(message, className){

    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.postsContainer');
    const posts = ui.posts;
    container.insertBefore(div, posts);

    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    
     if(currentAlert){
      currentAlert.remove()
    };

  }
  fillForm(data){
    this.title.value = data.title;
    this.body.value = data.body;
    this.id.value = data.id;
    this.changeFormState('edit');
  }
  changeFormState(type){    
    if(type === 'edit'){

      // change update button
      this.postBtn.textContent = 'Update Post';
      this.postBtn.className = 'post-submit btn btn-info btn-block';

      // creat cancel button
      const button = document.createElement('button');
      button.appendChild(document.createTextNode('Cancel  Edit'))
      button.className = 'post-cancel btn btn-light btn-block';
      
      const cardForm = document.querySelector('.card-form');
      const formEnd = document.querySelector('.form-end');
      
      cardForm.insertBefore(button, formEnd);
    } else{
      this.postBtn.textContent = 'Post It';
      this.postBtn.className = 'post-submit btn btn-primary btn-block';

      //Delete cancel button
      document.querySelector('.post-cancel').remove();

      // Clear ID from hidden field
      this.clearIdInput();
      // Clear text
      this.clearFields();
    }
  }
  clearIdInput(){
    this.id.value = '';
  }
}

export const ui = new UI();