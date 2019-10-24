-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th10 24, 2019 lúc 01:24 AM
-- Phiên bản máy phục vụ: 5.7.26
-- Phiên bản PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qlnv`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dsnhanvien`
--

DROP TABLE IF EXISTS `dsnhanvien`;
CREATE TABLE IF NOT EXISTS `dsnhanvien` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `MaNV` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TenNV` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MaPB` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Hinh` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `dsnhanvien`
--

INSERT INTO `dsnhanvien` (`id`, `MaNV`, `TenNV`, `MaPB`, `Hinh`) VALUES
(1, 'NV01', 'Nguyen Van An', 'KT', 'https://bootdey.com/img/Content/avatar/avatar7.png'),
(2, 'NV02', 'Tran Van B', 'NS', 'https://bootdey.com/img/Content/avatar/avatar6.png'),
(3, 'NV03', 'Doan Cong', 'NS', 'https://bootdey.com/img/Content/avatar/avatar5.png'),
(4, 'NV04', 'Vo Thanh', 'BV', 'https://bootdey.com/img/Content/avatar/avatar4.png'),
(5, 'NV05', 'Dinh Phi', 'NS', 'https://bootdey.com/img/Content/avatar/avatar2.png'),
(6, 'NV06', 'Nguyen Nhan', 'KT', 'https://bootdey.com/img/Content/avatar/avatar3.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
CREATE TABLE IF NOT EXISTS `nhanvien` (
  `idnv` int(11) NOT NULL AUTO_INCREMENT,
  `MaNV` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TenNV` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Sdt` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DiaChi` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ChucVu` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Hinh` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MaPb` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idnv`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`idnv`, `MaNV`, `TenNV`, `Sdt`, `DiaChi`, `ChucVu`, `Hinh`, `MaPb`) VALUES
(1, 'NV01', 'Nguyễn Văn A', '012312312', 'HCM', 'Quản lý', 'https://bootdey.com/img/Content/avatar/avatar7.png', 'KT'),
(2, 'NV02', 'Nguyễn Bá Minh', '054896546', 'HN', 'Tạp vụ', 'https://bootdey.com/img/Content/avatar/avatar6.png', 'KT'),
(3, 'NV03', 'Nguyễn Công Nhân', '09645481556', 'HCM', 'Bảo vệ', 'https://bootdey.com/img/Content/avatar/avatar5.png', 'NS'),
(4, 'NV04', 'Phan Văn Tiến', '07465463123', 'DN', 'Trưởng phòng', 'https://bootdey.com/img/Content/avatar/avatar4.png', 'KT1'),
(5, 'NV05', 'Cao Văn C', '054651321', 'BD', 'Phó phòng', 'https://bootdey.com/img/Content/avatar/avatar3.png', 'KT1'),
(6, 'NV06', 'Trần Thanh B', '045512318', 'Thủ Đức, HCM', 'Kế toán', 'https://bootdey.com/img/Content/avatar/avatar2.png', 'KT1'),
(13, 'NV07', 'Nguyễn Văn An', '0854654545', 'DT', 'Nhân Viên ', 'https://bootdey.com/img/Content/avatar/avatar1.png', 'KT1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phong`
--

DROP TABLE IF EXISTS `phong`;
CREATE TABLE IF NOT EXISTS `phong` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `MaPB` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TenPB` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `phong`
--

INSERT INTO `phong` (`id`, `MaPB`, `TenPB`) VALUES
(23, '123sadsadd', 'Phong b'),
(24, 'dsad', 'Phong casd'),
(27, 'NS', 'B'),
(28, 'KT', 'A'),
(30, 'KT1', 'C');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phongban`
--

DROP TABLE IF EXISTS `phongban`;
CREATE TABLE IF NOT EXISTS `phongban` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tenphongban` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `phongban`
--

INSERT INTO `phongban` (`id`, `tenphongban`) VALUES
(1, 'Phòng Nhân Sự'),
(2, 'Phong Ke Toan');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
CREATE TABLE IF NOT EXISTS `taikhoan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`id`, `username`, `password`) VALUES
(1, 'phuong', '123'),
(2, 'phuong1', '123'),
(16, ' user', '123'),
(17, 'phong', '111'),
(18, ' user1', '111'),
(19, ' phong', '123'),
(21, 'phong', '456');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
