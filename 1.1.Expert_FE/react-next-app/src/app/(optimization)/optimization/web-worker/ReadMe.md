# Web Workers

Web Workers là một tính năng của JavaScript, cho phép bạn thực thi mã JavaScript trên một luồng riêng biệt, tách biệt với main thread (luồng chính). Điều này giúp tránh tình trạng UI bị giật lag khi thực hiện các tác vụ nặng như:

    - Xử lý dữ liệu lớn
    - Thuật toán phức tạp
    - Giao tiếp với máy chủ (qua WebSocket, API...)
    - Các tính toán khác tiêu tốn thời gian.

Web Workers hoạt động dựa trên mô hình message passing, nơi main thread và worker thread giao tiếp qua các thông điệp (messages).

## Đặc điểm của Web Workers

1. Chạy trên luồng riêng biệt: Không ảnh hưởng đến hiệu năng của UI.
2. Không truy cập DOM trực tiếp: Web Workers không có quyền truy cập các API liên quan đến DOM.
3. Giao tiếp qua postMessage và onmessage:

    - Main thread gửi thông điệp bằng worker.postMessage(data).
    - Worker trả về kết quả qua self.postMessage(result).

4. Chạy độc lập: Cần tạo file .js riêng để viết code cho Web Worker.

=====

## Nếu để mặc định JS hoạt động đơn luồng

```typescript
 "use client";

import React, { useState } from "react";

export default function PageClient() {
  const [showMessage, setShowMessage] = useState(false);

  const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const handleNewButtonClick = () => {
    alert("Button clicked!");
    setShowMessage(true);
  };

  return (
    <div>
      <h1>PageClient</h1>
      <div style={{ padding: "50px" }}>
        <button onClick={handleNewButtonClick}>Show Message</button>
        {showMessage && <p style={{ color: "green" }}>Button clicked!</p>}
      </div>
    </div>
  );
```
- Khi click vào button Show Message thì sẽ thực thi function handleNewButtonClick thì:
  - alert("Button clicked!") sẽ được thưc thi và block luôn nhiệm vụ ở dưới là setShowMessage(true); nếu ta không nhấn ok được show trên UI
  
=====
