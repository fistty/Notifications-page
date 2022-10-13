const unreadNotification = document.querySelectorAll(".unread");
const notificationItem = document.querySelectorAll(".notif-item");
const notificationCount = document.querySelector(".notif-count");
const clearButton = document.querySelector(".notif-button");

// CLEARS ALL UNREAD NOTIFICATIONS
clearButton.addEventListener("click", () => {
  notificationItem.forEach((unreadItems) => {
    unreadItems.classList.remove("unread");
    unreadCheck();
  });
});

// TO DOUBLE CLICK AN ITEM
notificationItem.forEach((item) => {
  item.addEventListener("dblclick", () => {
    item.classList.toggle("unread");
    unreadCheck();
  });
});

// CHECKS UNREAD NOTIFICATION
const unreadCheck = () => {
  let count = 0;
  notificationItem.forEach((item) => {
    if (item.classList.contains("unread")) {
      count++;
    }
    notificationCount.innerText = count;
  });
};
