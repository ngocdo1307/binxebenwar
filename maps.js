/*
========================================================
THÊM / SỬA MAP Ở FILE NÀY
========================================================

Mỗi map chỉ cần:

id          : ID duy nhất, không trùng nhau
name        : Tên map
image       : Ảnh bạn tự làm, đặt trong thư mục assets
notes       : Ghi chú / mô tả map
downloadUrl : Link Google Drive

========================================================
*/

const MAPS = [
  {
    id: "map-001",
    name: "Cổ Thần Vãn Ca",
    image: "assets/1cothanvanca.jpg",

    notes: `MAP đã edit : Cổ Thần Vãn Ca
nhận quà vip free
điểm tích lũy ( giết địch ) x100 lần
max vàng max gỗ x100 lần với bãi fam
(hack vàng bấm nâng cấp đồ max sẽ + 30000 vàng 1 lần)
FAM mọi quái đều có gỗ
code gốc gần không có gỗ nếu như không có vip và fam gỗ rất khó
unlock hero vip hero ẩn
vào game gõ chat trước khi trọn trướng
binxebenvip1-24
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,

    downloadUrl: "https://drive.google.com/file/d/1L-tCJufo_FEr-VRke-l5iKlW9PcUOato/view?usp=drive_link",
    videoUrl: "https://youtu.be/3-ng55uVdUQ"
  },
  {
    id: "map-002",
    name: "Bạo Chiến Sư Đà Lĩnh Tiến Hóa",
    image: "assets/2baochiensudalinhtienhoa.jpg",
    notes: `MAP: Bạo Chiến Sư Đà Lĩnh Tiến Hóa
map 4 người chơi
vàng x1000 lần
gỗ x100 lần
thịt x20 lần
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/1-b_4L8NTUvtrXT2PinJaMGp3UTnZUok1/view?usp=drive_link",
    videoUrl: "https://youtu.be/sbxUTtf0dr0"
  },
  {
    id: "map-003",
    name: "Hắc Ám Xâm Nhập",
    image: "assets/3hacamxamnhap.jpg",
    notes: `MAP: Hắc Ám Xâm Nhập
map này dễ chơi quá nên không chỉnh gì
chỉ khổ mò ép đồ khó kinh vì toàn đồ ẩn kkk
vì thế mình chỉ add cheats vào thôi
mã kích hoạt: -binxebenwar
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/1CuWS2ik0Rps7wsQ9B6MpjEQc-bkpRiLo/view?usp=drive_link",
    videoUrl: "https://youtu.be/XZXrkm2wh5U"
  },
  {
    id: "map-004",
    name: "Mục Tiêu Là 999 Cấp",
    image: "assets/4muctieula999cap.jpg",
    notes: `MAP: Mục Tiêu Là 999 Cấp
map 4 người đua nhau fam và đánh nhau + đánh boss
map này vip làm bố nên mình đã chỉnh max vip
vip 1.000.000
fam và nâng cấp thôi khá dễ
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/1sZQlFuArjwzXBPaKvIsVBMEp7v-GlwtP/view?usp=drive_link",
    videoUrl: "https://youtu.be/eK1S7weAPHc"
  },
  {
    id: "map-005",
    name: "Thần Đế Khôi Phục",
    image: "assets/5thandekhoiphuc.jpg",
    notes: `MAP: Thần Đế Khôi Phục
vàng x1000 lần
gỗ x40 lần
đã mở full hero vip
max vip lv300 đã nâng vip 5000 ( nó cộng dồn vip )
đánh boss lên đồ theo thứ tự. đã max vip nên rất dễ
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/1HSk_1AW3i9Zk61F9b9t7xByMpcQRIObO/view?usp=drive_link",
    videoUrl: "https://youtu.be/BP4YC2flgnU"
  },
  {
    id: "map-006",
    name: "Thứ Nguyên Tu Tiên Truyện",
    image: "assets/6thunguyentutientruyen.jpg",
    notes: `MAP: Thứ Nguyên Tu Tiên Truyện
Mở full hero vip
chỉ số lên ầm ầm chỉ việc lên đồ. hehe
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/1Ct4oKY6ETQTicrev1KZ1SxzbZhXWQzHg/view?usp=drive_link",
    videoUrl: "https://youtu.be/kDu6ijNR4nY"
  },
  {
    id: "map-007",
    name: "Tu Hành Thế Giới",
    image: "assets/7tuhanhthegioi.jpg",
    notes: `MAP: Tu Hành Thế Giới
Thủy tinh x10 lần
giết địch số x10 lần
mở full hero vip
vào chỉ việc bem nhau. có 1 số đồ và bản đồ ẩn
mình chỉ biết 1 vài cái các bạn tự mò nhé vậy mới hay =))
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/13GjxrvyeRieoscB5nmbEmeH0NDVV3ssI/view?usp=drive_link",
    videoUrl: "https://youtu.be/fqFc0ncdAQY"
  },
  {
  id: "map-008",
  name: "Hạo Kiếp Quãng Đời Còn Lại II",
  image: "assets/8haokiepquangdoiconlai.jpg",
  notes: ` MAP đã edit : Hạo Kiếp Quãng Đời Còn Lại II
thể loại sinh tồn nhặt đồ + súng + đạn
đồ sẽ rơi ngẫu nhiên mỗi vòng

map này không có gì để fix
mình đã thêm cheats. mã : -binxebenwar

khuyến nghị chỉ nên dùng lệnh -autoh 100 ( để auto bơm 100% máu )
mỗi khi đổi súng sẽ reset chỉ số nên lưu ý kẻo chết

mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
  downloadUrl: "https://drive.google.com/file/d/1MS9OFAfkpQIrQTkW6b4HJ4WVBAHyCkvm/view?usp=drive_link",
  videoUrl: "https://youtu.be/tAlf57X7OMI"
 },
 {
    id: "map-009",
    name: "Hồi ức chi phong",
    image: "assets/9hoiucchiphong.jpg",
    notes: `MAP đã edit : Hồi ức chi phong
Hero defen

gốc bãi fam gỗ mỗi con +2 gỗ
không tìm đc trigger fam gỗ nên tăng tất cả
mỗi kill tăng 10 gỗ 
giết địch số x10 ( các mốc có quà )

map có ăn sách nên 10 gỗ mỗi kill đã là quá nhiều rồi
hệ thống ép đồ hơi phức tạp mọi người tự mò nhé
mình chỉ test thôi chứ không dõ kkk

mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/11xgePuF1qCLxghE0jJjQPAY-Ddz9AoqD/view?usp=sharing",
    videoUrl: "https://youtu.be/KoCYdv0xltw"
  },
  {
    id: "map-010",
    name: "Luân Hồi Chi Ngục",
    image: "assets/10luanhoichinguc.jpg",
    notes: `MAP đã edit : Luân Hồi Chi Ngục
Thể Loại: Hero defen

unlock tất cả hero, tất cả chế độ xóa mọi giới hạn và cấm

vàng x50
điểm giết địch x50
điểm thủ nhà x50
map này cơ bản là không dùng gỗ
dùng rất ít nên x vàng rồi đổi ra là được rồi nên mình không chỉnh gỗ

vào game trọn chế độ xong gõ chat ## rồi bấm theo thứ tự : binxebenwar
rồi mới trọn tướng sẽ được 1 cục đá tăng 100% tỷ lệ ép đồ ( xem video sẽ rõ )

mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/1yNLenImciWTSY8ptpQMyBKDl9JwwglTi/view?usp=drive_link",
    videoUrl: "https://youtu.be/Wz2ZAoNL8gc"
  },
  {
    id: "map-011",
    name: "Map 11",
    image: "assets/map-011.jpg",
    notes: "Ghi chú mẫu.",
    downloadUrl: "https://drive.google.com/",
    videoUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  },
  {
    id: "map-012",
    name: "Map 12",
    image: "assets/map-012.jpg",
    notes: "Ghi chú mẫu.",
    downloadUrl: "https://drive.google.com/",
    videoUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  },
  {
    id: "map-012",
    name: "Map 12",
    image: "assets/map-012.jpg",
    notes: "Ghi chú mẫu.",
    downloadUrl: "https://drive.google.com/",
    videoUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  },
  {
    id: "map-012",
    name: "Map 12",
    image: "assets/map-012.jpg",
    notes: "Ghi chú mẫu.",
    downloadUrl: "https://drive.google.com/",
    videoUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  }
];
