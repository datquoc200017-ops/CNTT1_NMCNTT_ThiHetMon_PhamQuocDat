const danhSachBangGia = [
  { ma: "LEU-2", ten: "Leu 2 nguoi", gia: 80000 },
  { ma: "LEU-4", ten: "Leu 4 nguoi", gia: 120000 },
  { ma: "TUI-NGU", ten: "Tui ngu", gia: 30000 },
  { ma: "BEP-GAS", ten: "Bep gas da ngoai", gia: 40000 },
];

function hienThiBangGiaThue() {
  const bang = document.getElementById("bang-gia");
  for (const muc of danhSachBangGia) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = muc.ma;
    dong.insertCell().textContent = muc.ten;
    dong.insertCell().textContent = muc.gia.toLocaleString("vi-VN");
  }
}

hienThiBangGiaThue();
