const unReadMessage = document.querySelectorAll('.unread');
const unReadMessageCount = document.getElementById('num-of-notif');
const markAll = document.getElementById('mark-as-read');

unReadMessageCount.innerText = unReadMessage.length;

unReadMessage.forEach((message) => {
    message.addEventListener('click', () => {
        message.classList.remove('unread');
        const newUnreadMessage = document.querySelectorAll('.unread');
        unReadMessageCount.innerHTML = newUnreadMessage.length;

    });
});

// mark all read
markAll.addEventListener('click', () => {
    unReadMessage.forEach((message) => {
        message.classList.remove('unread');
    });
    const newUnreadMessage = document.querySelectorAll('.unread');
    unReadMessageCount.innerHTML = newUnreadMessage.length;
});