Todo 1. decoding?: "async" | "auto" | "sync" | undefined

* Ý nghĩa: Kiểm soát cách trình duyệt giải mã hình ảnh.
* Giá trị:
    ? - "async": Giải mã không đồng bộ để tăng hiệu năng.
    ? - "auto": Trình duyệt tự quyết định.
    ? - "sync": Giải mã đồng bộ, có thể làm chậm trang.

Todo 2. fetchPriority?: "auto" | "high" | "low" | undefined
* Ý nghĩa: Quy định mức ưu tiên tải hình ảnh.
* Giá trị:
    ? - "auto": Trình duyệt tự quyết định.
    ? - "high": Tải hình với ưu tiên cao (hình quan trọng, ở đầu trang).
    ? - "low": Tải hình với ưu tiên thấp (hình ít quan trọng).

Todo 3. loading?: "eager" | "lazy" | undefined    
* Ý nghĩa: Quy định thời điểm tải hình ảnh.
* Giá trị:
    ? - "eager": Tải ngay khi trang được tải.
    ? - "lazy": Chỉ tải khi hình ảnh nằm trong vùng nhìn thấy của người dùng (viewport).

Todo 4. sizes?: string | undefined
* Ý nghĩa: Xác định kích thước hình ảnh phù hợp tùy vào kích thước màn hình (dùng với thuộc tính srcset).
sizes="(max-width: 600px) 100vw, 50vw"

Todo 5. srcSet?: string | undefined
* Ý nghĩa: Xác định các phiên bản khác nhau của hình ảnh (dùng cho responsive images).
srcset="image-320w.jpg 320w, image-480w.jpg 480w"
