const friendsData = [
    { name: 'User1', avatar: 'srcs/logo/pepe.png', status: 'online' },
    { name: 'User2', avatar: 'srcs/logo/pepe.png', status: 'offline' },
    { name: 'User3', avatar: 'srcs/logo/pepe.png', status: 'online' },
    { name: 'User4', avatar: 'srcs/logo/default.svg', status: 'offline' },
];

function createFriendsList(friends) {
    return friends.map(friend => `
        <li class="list-group-item d-flex align-items-center text-light border-0">
            <img src="${friend.avatar}" alt="${friend.name}" class="friend-avatar rounded-circle me-2" width="32" height="32">
            <span class="friend-name">${friend.name}</span>
            <span class="friend-status ms-auto ${friend.status}"></span>
        </li>
    `).join('');
}

function Friends() {
    const friendsElement = document.getElementById('friends');
    friendsElement.innerHTML = `
        <div class="friends-container d-flex flex-column h-100">
            <div class="friends-header d-flex justify-content-between align-items-center p-3 border-bottom border-secondary">
                <h5 class="m-0">Friends</h5>
                <button id="addFriendBtn" class="btn btn-success rounded-circle" data-bs-toggle="modal" data-bs-target="#addFriendModal">+</button>
            </div>
            <ul class="friends-list list-group list-group-flush flex-grow-1 overflow-auto">
                ${createFriendsList(friendsData)}
            </ul>
        </div>

        <div class="modal fade" id="addFriendModal" tabindex="-1" aria-labelledby="addFriendModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-dark text-light">
                    <div class="modal-header border-secondary">
                        <h5 class="modal-title" id="addFriendModalLabel">Add Friends</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" id="friendNickname" class="form-control bg-secondary text-light mb-3" placeholder="Enter Nickname">
                        <div class="friend-search-result d-flex align-items-center">
                            <img src="srcs/logo/pepe.png" alt="User1" class="friend-avatar rounded-circle me-2" width="32" height="32">
                            <span>User1</span>
                            <button class="btn btn-sm btn-success ms-auto">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export default Friends;