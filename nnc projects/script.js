document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/posts')
    .then(response => response.json())
    .then(posts => {
        const postsContainer = document.getElementById('posts');
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postDiv);
        });
    });
});
