class UI {

  constructor(){
    this.posts = document.querySelector('#posts');
  }

  showPosts(posts) {

    let output = '';
    posts.forEach(post => {
      output += `<div>My id is:${post.id} my title is: ${post.title}<div>`
    });

    this.posts.innerHTML = output;
    
  }
}

export const ui = new UI();