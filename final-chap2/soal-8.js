// Informasi Total Keuntungan

// Data
const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  let untungJual = 0;
  let modalBeli = 0;
  let persentase = 0;
  let temp = 0;
  let result = 0;

  for (i = 0; i < dataPenjualan.length; i++) {
    untungJual +=
      (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) *
      dataPenjualan[i].totalTerjual;
    modalBeli +=
      (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok) *
      dataPenjualan[i].hargaBeli;
    persentase = Math.round((untungJual / modalBeli) * 100);

    if (temp < dataPenjualan[i].totalTerjual) {
      temp = dataPenjualan[i].totalTerjual;
      result = dataPenjualan[i];
    }
  }
  return {
    totalTerjual: "Rp." + untungJual.toLocaleString(),
    totalModal: "Rp." + modalBeli.toLocaleString(),
    PersentaseKeuntungan: persentase.toString() + "%",
    produkTerlaris: result.namaProduk,
    penulisTerlaris: result.penulis,
  };
};

console.log(getInfoPenjualan(dataPenjualanNovel));
