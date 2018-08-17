class UI {

  constructor(){
    this.posts = document.querySelector('#posts');
  }

  showPosts(posts) {

    let output = '';
    posts.forEach(post => {
      output += `<div>My id is:${post.title} my title is: ${post.body}<div>`
    });

    this.posts.innerHTML = output;
    
  }
}

export const ui = new UI();