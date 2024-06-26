// Lấy văn bản từ một nút ( ở đây là lấy dựa trên id)
const paragraph = document.getElementById("paragraph");
const paragraphText = paragraph.textContent;

// console.log("paragraphText", paragraphText); // "Hello DOM !"

// Thay đổi văn bản của một nút
paragraph.textContent = "Đây là văn bản mới";

// Thêm một nút mới vào tài liệu
const newButton = document.createElement("button");
newButton.textContent = "Nhấp chuột";
document.body.appendChild(newButton);

// Xử lý sự kiện nhấp chuột
newButton.addEventListener("click", function () {
  alert("Bạn đã nhấp chuột!");
});
