class UI {

  constructor(){
    this.posts = document.querySelector('#posts');
  }

  showPosts(posts) {

    let output = '';
    posts.forEach(post => {
      output += `<div>My id is:${post.id} my title is: ${post.title} my body is ${post.body}<div>`
    });

    this.posts.innerHTML = output;
    
  }
}

export const ui = new UI();