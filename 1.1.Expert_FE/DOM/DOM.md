# 1. DOM

## 1.1. DOM là viết tắt của Document Object Model : là một giao diện lập trình ứng dụng (API) cho phép bạn truy cập, thao tác và sửa đổi nội dung của một tài liệu HTML. Nó tạo ra một mô hình cây biểu diễn cấu trúc của tài liệu, trong đó mỗi phần tử HTML được biểu thị bằng một nút trong cây.

![](./images/HTML_DOM_Tree.jpg)

---

## 1.2. Vai trò của DOM:

- **Truy cập nội dung**: DOM cho phép bạn lấy thông tin về các phần tử HTML, như văn bản, thuộc tính và kiểu dáng.

- **Thay đổi nội dung**: DOM cho phép bạn thay đổi nội dung của các phần tử HTML, như thêm, xóa hoặc sửa đổi văn bản.

- **Tạo nội dung động**: DOM cho phép bạn tạo các phần tử HTML mới và thêm chúng vào tài liệu.

- **Tương tác với người dùng**: DOM cho phép bạn xử lý các sự kiện người dùng, như nhấp chuột và di chuột.

## 1.3. Lợi ích của việc sử dụng DOM:

- **Cung cấp khả năng kiểm soát cao**: DOM cho phép bạn kiểm soát hoàn toàn nội dung và hành vi của trang web

- **Tạo trang web động**: DOM cho phép bạn tạo các trang web có thể thay đổi nội dung và giao diện dựa trên hành động của người dùng hoặc dữ liệu bên ngoài.

- **Tích hợp với các thư viện JavaScript**: DOM được hỗ trợ bởi nhiều thư viện JavaScript phổ biến, như jQuery và React, giúp đơn giản hóa các tác vụ thao tác DOM.

## 1.4. Tóm lại:

_DOM là một công cụ mạnh mẽ cho phép bạn tạo các trang web động và tương tác với JavaScript. Hiểu biết về DOM là điều cần thiết cho bất kỳ nhà phát triển web nào muốn tạo các trang web hiện đại và hấp dẫn._

## 1.5. Các khái niệm quan trọng cần nắm trong DOM

- Cấu trúc cây DOM: Cách thức các phần tử HTML được biểu thị trong mô hình cây.

- Các nút DOM: Các loại nút khác nhau trong DOM, như nút phần tử, nút văn bản và nút nhận xét.

- Thuộc tính và phương thức DOM: Các thuộc tính và phương thức được sử dụng để truy cập và thao tác các nút DOM.

- Sự kiện DOM: Các sự kiện được kích hoạt khi người dùng tương tác với trang web.

---

# 2. Nắm vững các kiến thức sau

## 2.1. Cấu trúc cây DOM

_Cấu trúc cây DOM là cách thức biểu diễn cấu trúc của tài liệu HTML. Trong mô hình này, mỗi phần tử HTML được biểu thị bằng một nút, và các nút được liên kết với nhau theo mối quan hệ cha-con_.

- **Nút gốc (Document node)**: Là nút ở vị trí cao nhất trong cây, _đại diện cho toàn bộ tài liệu HTML_.

- **Nút phần tử (Element node)**: Biểu thị một phần tử HTML, như div, h1, p, v.v.

- **Nút văn bản (Text node)**: Chứa nội dung văn bản của một phần tử HTML.

- **Nút nhận xét (Comment node)**: Chứa thông tin chú thích không hiển thị trên trang web.

Mối quan hệ cha-con trong DOM được xác định bởi vị trí của các nút trong tài liệu HTML. Nút cha là nút chứa nút con. Ví dụ, trong đoạn HTML sau:

```html
<div>
  <h1>Tiêu đề</h1>
  <p>Nội dung đoạn văn</p>
</div>

<!-- 
Nút <div> là nút cha.
Nút <h1> và nút <p> là nút con của nút <div>. 
-->
```

---

## 2.2: Các loại nút DOM

Ngoài các loại nút cơ bản được đề cập ở trên, DOM còn có một số loại nút khác, như:

- **Nút thuộc tính (Attribute node)**: Biểu thị một thuộc tính của một phần tử HTML.
- Nút CDATA (CDATA node): Chứa dữ liệu ký tự chưa được phân tích cú pháp.
- Nút tài liệu (Document type node): Biểu thị kiểu tài liệu HTML.

---

## 2.3. Thuộc tính và phương thức DOM

_Mỗi nút DOM đều có một tập hợp các thuộc tính và phương thức cho phép bạn truy cập và thao tác với nút đó._

- **Thuộc tính (properties)**: Cung cấp thông tin về nút, như tên, giá trị, kiểu, v.v.
  - Thuộc tính DOM **cung cấp thông tin về một nút cụ thể, chẳng hạn như tên thẻ, giá trị của các thuộc tính HTML, kiểu CSS, v.v.** Bạn có thể truy cập các thuộc tính này bằng cách sử dụng cú pháp chấm (.) sau tên nút, tiếp theo là tên thuộc tính bạn muốn truy cập. Ví dụ:

```javascript
const paragraph = document.getElementById("myParagraph");
const id = paragraph.id; // Lấy giá trị của thuộc tính id
const className = paragraph.className; // Lấy giá trị của thuộc tính class
const textContent = paragraph.textContent; // Lấy nội dung văn bản của đoạn văn
```

- **Phương thức (method)**: Cho phép bạn thực hiện các hành động trên nút, như thêm, xóa, sửa đổi nội dung, v.v.
  - Phương thức DOM **cho phép bạn thực hiện các hành động trên một nút cụ thể, chẳng hạn như thêm hoặc xóa các nút con, thay đổi nội dung văn bản, áp dụng kiểu CSS, v.v**. Bạn có thể gọi các phương thức này bằng cách sử dụng cú pháp chấm (.) sau tên nút, tiếp theo là tên phương thức bạn muốn gọi và ngoặc đơn chứa bất kỳ đối số nào cần thiết. Ví dụ:

```javascript
const paragraph = document.getElementById("myParagraph");
paragraph.textContent = "Đây là nội dung văn bản mới."; // Thay đổi nội dung văn bản của đoạn văn
paragraph.style.color = "red"; // Áp dụng màu đỏ cho văn bản
paragraph.appendChild(newElement); // Thêm một nút con mới vào đoạn văn
```

---

## 2.4. Sự kiện (Even) DOM:

_Sự kiện DOM là những sự kiện được kích hoạt khi người dùng tương tác với trang web, như nhấp chuột, di chuột, bấm phím, v.v._

_Bạn có thể sử dụng DOM để lắng nghe các sự kiện này và thực hiện các hành động thích hợp. Ví dụ, bạn có thể thêm một trình xử lý sự kiện nhấp chuột vào một nút để hiển thị một thông báo khi người dùng nhấp vào nút đó._

Dưới đây là một số sự kiện DOM phổ biến nhất:

- Sự kiện chuột:

  - **click**: Xảy ra khi người dùng nhấp vào một phần tử.
  - **dblclick**: Xảy ra khi người dùng nhấp chuột hai lần vào một phần tử.
  - **mousedown**: Xảy ra khi người dùng nhấn nút chuột trên một phần tử.
  - **mouseup**: Xảy ra khi người dùng nhả nút chuột trên một phần tử.
  - **mousemove**: Xảy ra khi người dùng di chuyển chuột trên một phần tử.
  - **mouseover**: Xảy ra khi con trỏ chuột di chuyển vào một phần tử.
  - **mouseout**: Xảy ra khi con trỏ chuột di chuyển ra khỏi một phần tử.

- Sự kiện bàn phím:

  - **keydown**: Xảy ra khi người dùng nhấn một phím.
  - **keyup**: Xảy ra khi người dùng nhả một phím.
  - **keypress**: Xảy ra khi người dùng nhấn một phím và nhả nó ra.

- Sự kiện biểu mẫu:

  - **submit**: Xảy ra khi người dùng gửi biểu mẫu.
  - **change**: Xảy ra khi giá trị của một phần tử đầu vào thay đổi.
  - **input**: Xảy ra khi người dùng nhập dữ liệu vào một phần tử đầu vào.

- Sự kiện khác:
  - **load**: Xảy ra khi trang đã được tải hoàn toàn.
  - **unload**: Xảy ra khi trang bị dỡ bỏ.
  - **resize**: Xảy ra khi kích thước cửa sổ thay đổi.
  - **scroll**: Xảy ra khi người dùng cuộn trang.

## 2.5. Các API DOM phổ biến:

_Ngoài API DOM cơ bản, còn có một số API DOM phổ biến khác cung cấp các tính năng nâng cao, như:_

- **Selection API**: Cho phép bạn thao tác với văn bản được chọn trên trang web. Nó cung cấp các thuộc tính và phương thức để truy cập văn bản được chọn, thay đổi định dạng của nó và thực hiện các hành động khác

```javascript
// Lấy văn bản được chọn
const selection = window.getSelection();
const selectedText = selection.toString();
console.log(selectedText); // Output: Văn bản được chọn

// Thay đổi định dạng của văn bản được chọn
selection.selectRange(range); // Chọn phạm vi văn bản
selection.execCommand("bold", false, null); // Làm cho văn bản được chọn in đậm
```

- **Storage API**: Cho phép bạn lưu trữ dữ liệu cục bộ trong trình duyệt. Nó cung cấp hai đối tượng chính: localStorage và sessionStorage
  - **localStorage** lưu trữ dữ liệu vĩnh viễn, nghĩa là dữ liệu sẽ được lưu trữ cho đến khi người dùng xóa nó thủ công.
  - **sessionStorage** lưu trữ dữ liệu chỉ trong phiên trình duyệt hiện tại, nghĩa là dữ liệu sẽ bị xóa khi người dùng đóng trình duyệt.

```javascript
// Lưu trữ dữ liệu trong localStorage
localStorage.setItem("myKey", "myValue");

// Lấy dữ liệu từ localStorage
const myValue = localStorage.getItem("myKey");
console.log(myValue); // Output: myValue

// Xóa dữ liệu khỏi localStorage
localStorage.removeItem("myKey");
```

- **XMLHttpRequest** API: XMLHttpRequest API cho phép bạn thực hiện các yêu cầu HTTP và truy xuất dữ liệu từ máy chủ. Nó cung cấp các phương thức để tạo yêu cầu, gửi yêu cầu và xử lý phản hồi.

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.example.com/data.json");
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data); // Output: Dữ liệu JSON
  } else {
    console.error("Lỗi:", xhr.statusText);
  }
};
xhr.send();
```
