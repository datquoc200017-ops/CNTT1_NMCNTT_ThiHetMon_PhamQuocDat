# BÀI LÀM –(CHỦ ĐỀ QUẢN LÝ MODEL AI)

- **Mã đề:**Đề thi 05
- **Họ tên:** Phạm Quốc Đạt 
- **Lớp:** CNTT1
- **Link repository:**
- **Hệ điều hành (Windows/macOS):** Windows

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
# Ghi lần lượt các lệnh đã chạy, mỗi lệnh một dòng
pwd    
get-childitem -Recurse -Force
move .\quy_dinh_thue.txt ./docs
mkdir backup 
cp .\data\don_thue_thang_5.xlsx ./backup
rm "*.tmp"
cd logs   
ls 
cd .. 

```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text
(
    Directory: D:\on thi cuoi ki\starter-kit\starter-kit\thue-do-cam-trai-website


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/11/2026   7:41 AM                backup
d-----        11/11/2026   7:36 AM                data
d-----        11/11/2026   7:40 AM                docs
d-----        11/11/2026   7:35 AM                evidence
d-----        11/11/2026   7:36 AM                logs
d-----         11/3/2026   7:07 AM                web
-a----         11/3/2026   7:07 AM             72 .env
-a----         11/3/2026   7:07 AM           2409 bai_lam.md


    Directory: D:\on thi cuoi ki\starter-kit\starter-kit\thue-do-cam-trai-website\backup


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM           6132 don_thue_thang_5.xlsx


    Directory: D:\on thi cuoi ki\starter-kit\starter-kit\thue-do-cam-trai-website\data


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM           6132 don_thue_thang_5.xlsx


    Directory: D:\on thi cuoi ki\starter-kit\starter-kit\thue-do-cam-trai-website\docs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM            159 quy_dinh_thue.txt


    Directory: D:\on thi cuoi ki\starter-kit\starter-kit\thue-do-cam-trai-website\logs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM            934 rental.log


    Directory: D:\on thi cuoi ki\starter-kit\starter-kit\thue-do-cam-trai-website\web


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         11/3/2026   7:07 AM                images
-a----         11/3/2026   7:07 AM            582 app.js
-a----         11/3/2026   7:07 AM            534 index.html
-a----         11/3/2026   7:07 AM            460 style.css


    Directory: D:\on thi cuoi
    ki\starter-kit\starter-kit\thue-do-cam-trai-website\web\images


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM           3090 logo-campgo.png
)

```

## 4.3. Lọc log vận hành Model AI

### a) Lệnh lọc các dòng status=500

```shell
# logs\rental.log:6:2026-05-28 08:17:12 POST /api/kho-do status=500
logs\rental.log:7:2026-05-28 08:20:23 POST /api/thue-do status=500
logs\rental.log:9:2026-05-28 08:27:45 POST /api/kho-do status=500
logs\rental.log:13:2026-05-28 08:38:29 POST /api/kho-do status=500
logs\rental.log:15:2026-05-28 08:42:51 POST /api/thanh-toan status=500
logs\rental.log:20:2026-05-28 08:57:46 POST /api/kho-do status=500

```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
logs\rental.log:6:2026-05-28 08:17:12 POST /api/kho-do status=500
logs\rental.log:7:2026-05-28 08:20:23 POST /api/thue-do status=500

```

### b) Lệnh đếm số dòng status=404 và kết quả

```shell
#  Select-String "status=404" logs/rental.log | Measure-Object

```

```text


Count    : 4
Average  :
Sum      :
Maximum  :
Minimum  :
Property :


```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
# 
Write-Host "Dang tao bao cao...."
"=== BAO CAO SU CO WEBSITE ===" > logs/tong_hop.txt
Get-content logs/rental.log | Select-String "status=404" >> logs/tong_hop.txt
Get-Content logs/rental.log | Select-String "status=500" | Measure-Object >> logs/tong_hop.txt
Write-Host "Hoan thanh!"
```

### Nội dung file logs/tong_hop.txt

```text
=== BAO CAO SU CO WEBSITE ===

2026-05-28 08:13:01 GET /combo-cu status=404
2026-05-28 08:30:56 GET /images/leu-6.jpg status=404
2026-05-28 08:33:07 GET /images/leu-6.jpg status=404
2026-05-28 08:49:24 GET /combo-cu status=404




Count    : 6
Average  : 
Sum      : 
Maximum  : 
Minimum  : 
Property : 


"Hoan thanh!"



```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [X] README.md: Heading 1, hình ảnh (`![Alt](path)`), mô tả có **in đậm**, _in nghiêng_ và `inline code`, bảng, code block, task list, blockquote
- [X] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [X] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | -------------------------- | --------------------------- | -------------- |
| 1   |     Vào f12 vào network sẽ thấy lỗi hình ảnh.                       |  http://127.0.0.1:5500/web/images/logo.png                           |    Vào Vs code vào file web/index sửa lại đúng logo file ảnh images/logo-campgo.png            |
| 2   |    Vào f12 vào console sẽ thấy lỗi file.js.                     |      index.html:10  GET http://127.0.0.1:5500/web/images/logo.png 404 (Not Foundapp.js:18 Uncaught ReferenceError: hienThiBangThue is not defined at app.js:18:1 (anonymous) @ app.js:18   |   Vào vs code vào đường dẫn  app.js sửa thiếu chữ Gia thêm vào là được        |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:** Trong file trên đã gặp lỗi rồi chúng ta phải tìm cách khắc phục ngay
- **Expected:** Lỗi web
- **Actual:** Tôi muốn các bạn khắc phục càng sớm càng tôi để hoàn thiện bài làm.
- **Log:** Tôi đã gửi lên nhật ký bài làm rôi mọi người vào check logs xem lỗi hiện tại là lỗi gì.

### Câu tìm kiếm Google

``` văn bản 
"lỗi 404" trang web: stackoverflow.com ```


#* cái đó
## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/don_thue_thang_5.xlsx`, không cần ghi vào đây.
