Hướng dẫn deploy lên Render

Có hai cách để deploy repository này lên Render:

1. Sử dụng `render.yaml` (tự động)

   - File `render.yaml` đã được thêm vào repo. Nó chỉ định Render build bằng lệnh `npm ci && npm run build` và publish thư mục `dist/`.
   - Trên Render, tạo một Service kiểu "Static Site" hoặc kết nối repository, Render sẽ tự nhận `render.yaml` và áp cấu hình.

2. Thủ công (nếu bạn không dùng `render.yaml`)
   - Trên Render, tạo một Static Site.
   - Build Command: `npm ci && npm run build`
   - Publish Directory: `dist`

Lưu ý và kiểm tra cục bộ

- Đã thêm script `start` vào `package.json`: `vite preview --port $PORT`. Render sử dụng biến môi trường `PORT` khi chạy preview (chỉ cần khi cần chạy server preview). Static Site thông thường sẽ không cần script `start`.
- Để kiểm tra local build nhanh:
  - Trên Windows PowerShell:
    ```powershell
    npm ci
    npm run build
    npm run start
    ```
  - Mở trình duyệt vào http://localhost:5173 (hoặc cổng mà `vite preview` in ra).

Nếu bạn muốn deploy as a Web Service (ví dụ cần server Node cho SSR), mình có thể thêm Dockerfile hoặc một server nhỏ `server.js` và chuyển cấu hình Render sang Web Service.
