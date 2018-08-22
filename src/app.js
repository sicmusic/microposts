import {http} from './http';
import {ui} from './ui';


console.log('hello');

function getPosts() {
  http.get('https://my-json-server.typicode.com/sicmusic/microposts/posts')
    .then((data) => {
      
      ui.showPosts(data);

    })
    .catch(err => console.log(err));
}

function submitPost(post){

  const post = {
    title: this.title.value,
    body: this.body.value,
    id: 

}

getPosts();



