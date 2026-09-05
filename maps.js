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
    name: "Lưu Lạc Thiên Nhai",
    image: "assets/11luulacthiennhai.jpg",
    notes: `MAP đã edit : Lưu Lạc Thiên Nhai
Hero defen

Fix nâng nhà chính x100 lần chỉ số
gốc 2,20,100 lên 200,2000,10.000
Bug khi nâng mà không đủ điểm + 500.000 vàng
Bug mua thạch 10% được 500 gỗ ( xem video sẽ rõ )


mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/1m1pVvnMQFFZ2tLLJmjwLB1rKGxYkqKtX/view?usp=sharing",
    videoUrl: "https://youtu.be/lXus2wOpkn0"
  },
  {
    id: "map-012",
    name: "Tam Giới Hiệp Đồ",
    image: "assets/12tamgioihiepdo.jpg",
    notes: `MAP đã edit : Tam Giới Hiệp Đồ


Map này hơi nhàm.
mình thêm trực tiếp lệnh: binxeben
mỗi lần + 1000 gỗ. rồi thích làm gì làm =))


mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/1OpaNiJYE1cKOtuLqY1VsRkImr9zP41Qy/view?usp=sharing",
    videoUrl: "https://youtu.be/VdO1d3RtGZ0"
  },
  {
    id: "map-013",
    name: "Thủ hộ jaina",
    image: "assets/13thuhojaina.jpg",
    notes: `MAP đã edit : Thủ hộ jaina
Hero desfen
lệnh mở khóa mọi điều kiện của hero: unlockfix
gõ trước khi trọn hero nhé.
mình thêm lệnh này để các pro thử độ khó khi chơi không bật fix =))

Mỗi khi chết nhận được (500 x lever) vàng
gốc khi chết bị trừ (50x lever) vàng

vàng thu hoạch từ nhà dân x100 lần
vàng x100 lần ( với đồ + vàng )
gỗ x100 lần với boss

nhiều cái khác nữa mà chỉnh nhiều quá không nhớ @@
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/1NHxFjZ0RQ6WBQedZB27iEhBUdh93XvJt/view?usp=sharing",
    videoUrl: "https://youtu.be/cAlteJcK-r8"
  },
  {
    id: "map-014",
    name: "Thần Dụ Chương Cuối Luân Hồi Phi Thăng",
    image: "assets/14thanduchuongcuoi.jpg",
    notes: `MAP đã edit : Thần Dụ Chương Cuối Luân Hồi Phi Thăng

Map này mình không hiểu cách chơi nên chỉ chơi cơ bản các bạn tự mò nhé
vip làm bố rồi nên fix 1 tỷ điểm tích lũy dùng tẹt ga
gỗ x100 lần

mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/1FLXO7hqPEgGTozFbIH7ueYlm57Vr4ng8/view?usp=sharing",
    videoUrl: "https://youtu.be/Yg-YStkEO2U"
  },
  {
    id: "map-015",
    name: "Thứ nguyên truyền tụng",
    image: "assets/15thunguyentruyentung.jpg",
    notes: `MAP đã edit : Thứ nguyên truyền tụng

code binxebenwar1 : Mở khóa Toàn bộ Tướng Ẩn + Đặc quyền
code binxebenwar2 : Mở khóa Toàn bộ VIP / Special Feature
code binxebenwar3 : Nhận Phúc lợi : 100k vàng 1000 gỗ 1000 chỉ số

code unlockfix : Mở khóa toàn bộ tướng
và x10 phần thưởng ở nv Bắt lấy hồ điệp
( không liên quan tới chính tuyến cho pro chơi chay )

mình đã x10 cho người chơi chay rồi khi nhập code sẽ x10 nữa là 100 lần
( PRO CHƠI CHAY KHÔNG CẦN NHẬP GÌ CẢ VÌ ĐÃ CHỈNH X10 RỒI )
CHƠI THỬ ĐI NẾU KHÓ QUÁ HÃY QUAY LẠI VÀ NHẬP CODE =))
MAP LÊN ĐỒ ĐƠN GIẢN NHƯNG TƯƠNG ĐỐI KHÓ LÊN
TUI NHẬP FULL CODE MÀ END GAME KHÔNG MAX ĐƯỢC ĐỒ

mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/1Rcf5YOnNatlu9MlIViky7nidL04dPTK6/view?usp=drive_link",
    videoUrl: "https://youtu.be/Dc2dYqB12Z8"
  },
  {
    id: "map-016",
    name: "Một Kiếm Nổ Tung Thiên Môn",
    image: "assets/16motkiemnotung.jpg",
    notes: `MAP đã edit : Một Kiếm Nổ Tung
Hero defens
map sẽ mở độ khó tiếp theo mỗi khi bạn win chế độ trước đó
càng sau càng mạnh càng nhiều boss hơn

Map chỉ load tên 1 lần duy nhất để trao vip nên không can thiệp sau khi vào game được
muốn max vip các bạn đặt tên khi tạo map, vào map bạn bè ( chơi nhiều người 1 tên cũng được )
chính xác viết hoa viết thường nhé : BinXeBen
max vip là làm Bố của map rồi.

code unlockfix : Bật chế độ ông nội của map =))
vàng, gỗ, thịt dùng không bao giờ hết

nên chơi chay trước cho vui khó quá thì bật vip thôi . còn phá map thì hãy bật fix :v

mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác`,
    downloadUrl: "https://drive.google.com/file/d/12fAnqj1PVmlrl9G7YVa4FcPNQPV95DeO/view?usp=drive_link",
    videoUrl: "https://youtu.be/Swu7Ueku93c"
  },
  {
    id: "map-017",
    name: "Vân Giới Chi Loạn",
    image: "assets/17vangioichiloan.jpg",
    notes: `MAP đã edit : Vân Giới Chi Loạn
Hero defens

code: unlockfix
tăng nv giết sâu từ 3000 vàng 
lên 50k vàng 3k exp 100 điểm thủ nhà 100 điểm tiên ma 100 chỉ số all
xem video để biết cách làm nếu chưa hiểu. map quái yếu nên không tăng nhiều
sau khi chơi 1 tiếng thì thấy 100 all hơi ít nên tăng lên 1000 all nhé
map khá rộng và nhiều nv, đồ boss
lên đồ đều có hướng dẫn cụ thể đánh con boss nào

nên chơi chay trước cho vui khó quá thì bật hãy bật fix :v

mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/1-TUp1Sb5iArGaxz0CIoYzqz8PKqt3l5Z/view?usp=drive_link",
    videoUrl: "https://youtu.be/ck5jOaYISuE"
  },
  {
    id: "map-018",
    name: "Tru Tiên Thế Giới",
    image: "assets/18trutienthegioi.jpg",
    notes: `MAP đã edit : Tru Tiên Thế Giới
Hero defens

code: unlockfix : giết địch +10k gold 100 gỗ 10 tích lũy
code: binxebenwar : kích hoạt 100 cái đặc quyền.nhiều quá liệt kê không hết. Gần như làm bố map
lưu ý : gõ trước khi trọn tướng.

Bố map chơi mà không thắng nổi map thì chuyển qua bản vip2 nhé =))
Bản v2 Kích full Thành tựu. mở khóa all giới hạn, thăng cấp lên Ông nội map :v

nên chơi chay trước cho vui khó quá thì bật hãy bật fix :v

mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/1nb7g4oEe9aVyGpyzgGAS2YXlbs7znMK-/view?usp=drive_link/",
    downloadUrl2: "https://drive.google.com/file/d/1KYh7XdaBQub_chdaGxY5vVOKSX8IlPYP/view?usp=drive_link",
    videoUrl: "https://youtu.be/csHfK3-xjpg"
  },
  {
    id: "map-019",
    name: "Phòng Tuyến Cuối Cùng",
    image: "assets/19phongtuyencuoicung.jpg",
    notes: `MAP đã edit : Phòng tuyến cuối cùng
hero defens

code: unlockfix : mỗi kill 10k vàng 10 chỉ số

nên chơi chay trước cho vui khó quá thì bật hãy bật fix :v
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/1epDceD8kqxHYUtqV3-as7sW0UJLsECVt/view?usp=drive_link",
    videoUrl: "https://youtu.be/78zn7KfH5Os"
  },
  {
    id: "map-020",
    name: "Trái Bưởi Phòng Thủ",
    image: "assets/20traibuoiphongthu.jpg",
    notes: `MAP đã edit : Trái Bưởi Phòng Thủ
hero defens

code: unlockfix : mỗi kill 10k vàng 10 gỗ 200 chỉ số
Không phải tất cả quái. xem video để tối ưu nhất
map này nặng về model vip chứ cơ bản map khá đơn giản, lên đồ cũng dễ.

Mình chỉ share file w3x các file model, music thì dùng của bác trường nhé
có thể chỉ cần tải mỗi file w3x là chơi được còn muốn hiển thị tốt thì tải full
bản full ~5gb đây chỉ là bản thiếu 250mb.
link full: Ở Download 2 tải hết về ném vào trong thư mục war
nào mà sếp trường đóng link thì ib xin nhé :v  fb: trường nguyễn

nên chơi chay trước cho vui khó quá thì bật hãy bật fix :v
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/1rEIvMdmfuN2uhYvfawKzbEETpmOF5Mp-/view?usp=drive_link",
    downloadUrl2: "https://drive.google.com/drive/u/0/folders/1FQacEG8kNiCbqgDbZqDdluAdpBkD96ae?fbclid",
    videoUrl: "https://youtu.be/scgeST7_33Y"
  },
  {
    id: "map-021",
    name: "Thiên Giác Thành",
    image: "assets/21thiengiacthanh.jpg",
    notes: `MAP đã edit : Thiên Giác Thành
Chơi như plants and zombie

code: unlockfix : mỗi kill sẽ nhận được 200 ánh sáng ( 200 vàng )


nên chơi chay trước cho vui khó quá thì bật hãy bật fix :v
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/1Bcz_PZs-BmfsXgHltZAXlo3F5vnw17MI/view?usp=drive_link",
    videoUrl: "https://youtu.be/_8W5sXZ2eCk"
  },
  {
    id: "map-022",
    name: "Dục Hỏa Trùng Sinh",
    image: "assets/22duchoatrungsinh.jpg",
    notes: `MAP đã edit : Dục Hỏa Trùng Sinh
Hero Defens

mở full thương thành đi cùng là các hero thương thành

code: unlockfix
mỗi kill sẽ nhận được 10K gold 100 ma tinh 500 chỉ số
map đồ quá nhiều mà là riêng lẻ chứ không lên 1 cái từ đầu


nên chơi chay trước cho vui khó quá thì bật hãy bật fix :v
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/1-zcswpSwlSb8IMwvI6ICTiqBLD000hDx/view?usp=drive_link",
    videoUrl: "https://youtu.be/wLDPvbkHelg"
  },
  {
    id: "map-023",
    name: "Thần Chi Lăng",
    image: "assets/23thanchilang.jpg",
    notes: `MAP đã edit : Thần Chi Lăng
Hero Defens

mở full tướng
99999 điểm tích lũy

code: unlockfix
mỗi kill sẽ nhận được 10K gold 10 gỗ 200 chỉ số

nên chơi chay trước cho vui khó quá thì bật hãy bật fix :v
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/1WxKARablJB576syc6_xEV0izpHzHnnjj/view?usp=drive_link",
    videoUrl: "https://youtu.be/aj9pYfDuTlA"
  },
  {
    id: "map-024",
    name: "Võ Hiệp Kiếm Các",
    image: "assets/24vohiepkiemcac.jpg",
    notes: `MAP đã edit : Võ Hiệp Kiếm Các
Hero Defens

mở full tướng vip, nhận quà vip

nhà chính là hero người chơi ảo nên không tăng chỉ số mỗi kill
tránh mất cân bằng cho người muốn chơi chay

thay vào đó fix nhiện vụ giết gà x100 lần
80000 exp, 120k gold
kèm fix + 1000 tất cả chỉ số
auto nhận và trả nhiện vụ luôn ( cần nhận lần đầu )
cơ bản thì cứ fam gà là win rồi còn đồ khó quá các bạn tự mò

nên chơi chay trước cho vui khó quá thì bật hãy bật fix :v
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/1Qv6Gwn0Cpd8C5KiZcjDoogHI30rjqQ_r/view?usp=drive_link",
    videoUrl: "https://youtu.be/mT9QlFhwHZY"
  },
  {
    id: "map-025",
    name: "Cương Thi Đảo 2026",
    image: "assets/25cuongthidao2026.jpg",
    notes: `MAP đã edit : Cương Thi Đảo 2026
sinh tồn zombie

game mở thêm độ khó mỗi lần win map
đã unlock full tướng và thông thạo tướng ( mở khóa skill )

code: binxeben
100k gold 1 lần nhập

fix rất nhiều thứ linh tinh nữa
như giảm 10 lần số lượng nâng cấp kiếm, tăng chỉ số nhận được khi fam
cho người chơi vào danh sách vip ..vân..vân..và..mây..mây..

nên chơi chay trước cho vui khó quá thì hãy bật fix :v
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/1ohQkQPCgfQQwI556p8OqqpGfFSuQJxMh/view?usp=drive_link",
    videoUrl: "https://youtu.be/vYBRk-HRHBM"
  },
  {
    id: "map-026",
    name: "Ngạo Đấu Lăng Thiên II",
    image: "assets/26ngaodaulangthien.jpg",
    notes: `MAP đã edit : Ngạo Đấu Lăng Thiên II
Hero Defens

để ý mấy con boss wave kill one hit nát nhà chủ
quái ra thì def cao tí không nó đánh sập nhà là thua

code: unlockfix
10k gold 10 gỗ 50 all chỉ số

map có rất nhiều đồ, không lên hết được các bạn tự mò

nên chơi chay trước cho vui khó quá thì hãy bật fix :v
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/1dp-BWqh7B0ExZGXI1z6uIs2gfDvsF5m5/view?usp=drive_link",
    videoUrl: "https://youtu.be/mNKKik254DA"
  },
  {
    id: "map-027",
    name: "Tinh Cầu Chiến Đội",
    image: "assets/27tinhcauchiendoi.jpg",
    notes: `MAP đã edit : Tinh Cầu Chiến Đội
sinh tồn

code: unlockfix
1 kill 500 gold 5 all chỉ số

nên chơi chay trước cho vui khó quá thì hãy bật fix :v
mình chơi và test trên 1.27dz các bạn có thể thử ở các bản war khác.`,
    downloadUrl: "https://drive.google.com/file/d/16GBU2m4ND5fcsIcCsuqDWOknDSAi8ojG/view?usp=drive_link",
    videoUrl: "https://youtu.be/DCsoUJ6kkE0"
  }
];
