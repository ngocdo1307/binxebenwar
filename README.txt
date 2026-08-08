WAR3 MAPS V2

Đây là bản static website theo yêu cầu:
- 10 map mỗi trang
- Prev / Next
- Số trang ở dưới: 1 2 3 ... 20 21
- Trang danh sách chỉ ảnh + tên
- Trang chi tiết chỉ ảnh + tên + ghi chú + Download
- Không có upload cho khách
- Bạn tự quản lý ảnh, tên, ghi chú và link Google Drive

THÊM MAP:
1. Đặt ảnh vào thư mục assets/
2. Mở maps.js
3. Thêm:

{
  id: "map-013",
  name: "Tên map",
  image: "assets/map-013.jpg",
  notes: "Ghi chú về map...",
  downloadUrl: "LINK GOOGLE DRIVE"
}

4. Không cần sửa app.js.

THỨ TỰ MAP:
Map ở đầu MAPS sẽ xuất hiện trước. Muốn map mới nằm đầu danh sách,
đặt object map mới lên đầu mảng MAPS.

PAGINATION:
Website tự tính số trang. Ví dụ 21 map = 3 trang.
Nếu có 201 map = 21 trang.
Khi nhiều trang, website tự thu gọn số trang thành dạng:
1 2 3 ... 20 21
và vẫn có Prev / Next.

GOOGLE DRIVE:
Bạn tự upload file .w3x lên Drive rồi đặt link vào downloadUrl.
