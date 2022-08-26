const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 76000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 96000,
    kategori: "Sepatu Sport",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 36000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 120000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
];

function hitungTotalPenjualan(dataPenjualanPakAldi) {
  if (
    typeof dataPenjualanPakAldi == null ||
    dataPenjualanPakAldi === undefined
  ) {
    return "Error";
  } else if (Array.isArray(dataPenjualanPakAldi)) {
    const jumlahArray = dataPenjualanPakAldi.length;
    let i;
    let total = 0;
    for (i = 0; i < jumlahArray; i++) {
      total = dataPenjualanPakAldi[i].totalTerjual + total;
    }
    return total;
  } else {
    return "INVALID";
  }
}
console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
