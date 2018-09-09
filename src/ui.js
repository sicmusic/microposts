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
      this.postBtn.className = 'post-submit btn btn-warning btn-block';

      // creat cancel button
      const div = document.createElement('div');
      div.className = 'post-cancel btn btn-light btn-block';
      
    }
  }
}

export const ui = new UI();