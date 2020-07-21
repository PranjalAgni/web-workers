const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function getPosts() {
  fetch(API_URL)
    .then((response) => response.json())
    .then(sendPosts)
    .catch(console.error);
}

function sendPosts(data) {
  self.postMessage(data);
}

self.addEventListener('message', getPosts);
