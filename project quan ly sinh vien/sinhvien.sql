
CREATE TABLE dangnhap(
  TenDangNhap VARCHAR(50) PRIMARY KEY,
  HoTen nvarchar(100),
  MatKhau VARCHAR(50),
  Quyen NVARCHAR(50)
);
GO

CREATE TABLE sinhvien(
  maso INT PRIMARY KEY,
  hoten NVARCHAR(100),
  ngaysinh DATETIME,
  gioitinh BIT,
  diachi NVARCHAR(100),
  dienthoai VARCHAR(20) UNIQUE,
  makhoa varchar(50)
);
GO

CREATE TABLE khoa(
  makhoa varchar(50) PRIMARY KEY,
  tenkhoa NVARCHAR(100)
);
GO

CREATE TABLE monhoc(
  mamh varchar(50) PRIMARY KEY,
  tenmh NVARCHAR(100),
  sotiet INT
);
GO

CREATE TABLE ketqua(
  maso int,
  mamh VARCHAR(50),
  diem DECIMAL,
  PRIMARY KEY(maso,mamh)
);
GO



