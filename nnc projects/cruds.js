document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const userTableBody = document.getElementById('userTableBody');
    let users = [];

    userForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const usernameInput = document.getElementById('username');
        const username = usernameInput.value.trim();
        if (username) {
            createUser(username);
            usernameInput.value = '';
            renderUsers();
        }
    });

    function createUser(username) {
        users.push({ username });
    }

    function readUsers() {
        return users;
    }

    function updateUser(oldUsername, newUsername) {
        const user = users.find(user => user.username === oldUsername);
        if (user) {
            user.username = newUsername;
        }
    }

    function deleteUser(username) {
        users = users.filter(user => user.username !== username);
    }

    function renderUsers() {
        userTableBody.innerHTML = '';
        readUsers().forEach(user => {
            const row = document.createElement('tr');
            const usernameCell = document.createElement('td');
            usernameCell.textContent = user.username;
            row.appendChild(usernameCell);

            const actionsCell = document.createElement('td');

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', function() {
                const newUsername = prompt('Enter new username', user.username);
                if (newUsername && newUsername.trim()) {
                    updateUser(user.username, newUsername.trim());
                    renderUsers();
                }
            });
            actionsCell.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                deleteUser(user.username);
                renderUsers();
            });
            actionsCell.appendChild(deleteButton);

            row.appendChild(actionsCell);
            userTableBody.appendChild(row);
        });
    }
});
