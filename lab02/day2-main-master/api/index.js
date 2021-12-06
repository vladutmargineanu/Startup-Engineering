/**
 * Implement the fetch functions to call the Typicode API
 *
 * More info on the api here - https://jsonplaceholder.typicode.com/
 */

function getAllPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return window.localStorage.setItem('posts', JSON.stringify(json));
    });
}

function getPost(postId) {
  fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return window.localStorage.setItem('post', JSON.stringify(json));
    });
}

function newPost(title, body) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
    .then((json) => {
      console.log(json);
      return window.localStorage.setItem('newpost', JSON.stringify(json));
    });
}

function editPost(postId) {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: postId,
      title: 'Titlu',
      body: 'Continut',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
    .then((json) => {
      console.log(json);
      return window.localStorage.setItem('editpost', JSON.stringify(json));
    });
}

function deletePost(postId) {
  fetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    method: 'DELETE',
  });
}
