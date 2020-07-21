console.log('101 loaded');

const worker = new Worker('worker.js');

const posts = document.querySelector('#getPosts');
const postContainer = document.querySelector('#posts');

posts.addEventListener('click', fetchPostsFromWorkers);

function fetchPostsFromWorkers(event) {
  event.preventDefault();
  postContainer.innerHTML = '';
  worker.postMessage('fetchPosts');
}

function parsePosts(message) {
  const data = message?.data;
  const titles = data.map((message) => message.title);

  titles.forEach((title) => {
    const spanElement = document.createElement('p');
    spanElement.textContent = title;
    postContainer.appendChild(spanElement);
  });
}

worker.addEventListener('message', parsePosts);
