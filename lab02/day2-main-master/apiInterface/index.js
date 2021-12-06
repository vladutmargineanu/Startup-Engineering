/**
 * Implement the functions to make the UI interactive.
 *
 * The functions from the previous task are already loaded
 *
 * More info on the api here - https://jsonplaceholder.typicode.com/
 */

/**
 * Handler for Get button
 */
function getPosts() {
  getAllPosts();

  document.querySelector('div.response').innerHTML = localStorage.getItem('posts');
}

/**
 * Handler for add button
 */
function addPost() {
  const postTitle = prompt('What is the post title ?')
  const postText = prompt('What is the post text ?')

  newPost(postTitle, postText);
  document.querySelector('div.response').innerHTML = localStorage.getItem('newpost');
}

/**
 * Handler for edit button
 */
function editPost() {
  const postId = prompt('What is the id of the post you want to edit ?')

  editPost(postId)
  document.querySelector('div.response').innerHTML = localStorage.getItem('editpost');
}

/**
 * Handler for delete button
 */
function deletePost() {
  const postId = prompt('What is the id of the post you want to delete ?')

  deletePost(postId);
}

/**
 * Assigns events to buttons
 */
function assignEvents() {
  const getButton = document.querySelector('button.get')
  const addButton = document.querySelector('button.add')
  const editButton = document.querySelector('button.edit')
  const deleteButton = document.querySelector('button.delete')

  getButton.addEventListener('click', getPosts)
  addButton.addEventListener('click', addPost)
  editButton.addEventListener('click', editPost)
  deleteButton.addEventListener('click', deletePost)
}

document.addEventListener('DOMContentLoaded', assignEvents)
