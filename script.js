function addComment(event, commentsListId) {
    event.preventDefault();

    const form = event.target;
    const nameInput = form.querySelector('.name-input');
    const commentInput = form.querySelector('.comment-input');

    if (nameInput.value.trim() === '' || commentInput.value.trim() === '') {
        alert('Please fill out both fields.');
        return;
    }

    const commentList = document.getElementById(commentsListId);

    const newComment = document.createElement('li');
    newComment.innerHTML = `<strong>${nameInput.value}</strong>: ${commentInput.value}`;

    commentList.appendChild(newComment);

    // Clear form fields
    nameInput.value = '';
    commentInput.value = '';
}
