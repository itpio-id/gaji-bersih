"use strict";

// Batas dan persentase disalin dari tarif-ter.md (Lampiran PP 58 Tahun 2023, bagian A).
const terKategoriA = [
  { batasMaksimum: 5_400_000, tarif: 0 },
  { batasMaksimum: 5_650_000, tarif: 0.25 },
  { batasMaksimum: 5_950_000, tarif: 0.5 },
  { batasMaksimum: 6_300_000, tarif: 0.75 },
  { batasMaksimum: 6_750_000, tarif: 1 },
  { batasMaksimum: 7_500_000, tarif: 1.25 },
  { batasMaksimum: 8_550_000, tarif: 1.5 },
  { batasMaksimum: 9_650_000, tarif: 1.75 },
  { batasMaksimum: 10_050_000, tarif: 2 },
  { batasMaksimum: 10_350_000, tarif: 2.25 },
  { batasMaksimum: 10_700_000, tarif: 2.5 },
  { batasMaksimum: 11_050_000, tarif: 3 },
  { batasMaksimum: 11_600_000, tarif: 3.5 },
  { batasMaksimum: 12_500_000, tarif: 4 },
  { batasMaksimum: 13_750_000, tarif: 5 },
  { batasMaksimum: 15_100_000, tarif: 6 },
  { batasMaksimum: 16_950_000, tarif: 7 },
  { batasMaksimum: 19_750_000, tarif: 8 },
  { batasMaksimum: 24_150_000, tarif: 9 },
  { batasMaksimum: 26_450_000, tarif: 10 },
  { batasMaksimum: 28_000_000, tarif: 11 },
  { batasMaksimum: 30_050_000, tarif: 12 },
  { batasMaksimum: 32_400_000, tarif: 13 },
  { batasMaksimum: 35_400_000, tarif: 14 },
  { batasMaksimum: 39_100_000, tarif: 15 },
  { batasMaksimum: 43_850_000, tarif: 16 },
  { batasMaksimum: 47_800_000, tarif: 17 },
  { batasMaksimum: 51_400_000, tarif: 18 },
  { batasMaksimum: 56_300_000, tarif: 19 },
  { batasMaksimum: 62_200_000, tarif: 20 },
  { batasMaksimum: 68_600_000, tarif: 21 },
  { batasMaksimum: 77_500_000, tarif: 22 },
  { batasMaksimum: 89_000_000, tarif: 23 },
  { batasMaksimum: 103_000_000, tarif: 24 },
  { batasMaksimum: 125_000_000, tarif: 25 },
  { batasMaksimum: 157_000_000, tarif: 26 },
  { batasMaksimum: 206_000_000, tarif: 27 },
  { batasMaksimum: 337_000_000, tarif: 28 },
  { batasMaksimum: 454_000_000, tarif: 29 },
  { batasMaksimum: 550_000_000, tarif: 30 },
  { batasMaksimum: 695_000_000, tarif: 31 },
  { batasMaksimum: 910_000_000, tarif: 32 },
  { batasMaksimum: 1_405_000_000, tarif: 33 },
  { batasMaksimum: Number.POSITIVE_INFINITY, tarif: 34 },
];

const form = document.querySelector("#salary-form");
const salaryInput = document.querySelector("#gross-salary");
const errorMessage = document.querySelector("#salary-error");
const results = document.querySelector("#results");
const taxResult = document.querySelector("#tax-result");
const netResult = document.querySelector("#net-result");
const rateResult = document.querySelector("#rate-result");

function formatInputAsRupiah() {
  const cursorPosition = salaryInput.selectionStart ?? salaryInput.value.length;
  const digitsBeforeCursor = salaryInput.value
    .slice(0, cursorPosition)
    .replace(/\D/g, "").length;
  const digits = salaryInput.value.replace(/\D/g, "");
  const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  salaryInput.value = formatted;

  let nextCursor = 0;
  let countedDigits = 0;
  while (nextCursor < formatted.length && countedDigits < digitsBeforeCursor) {
    if (/\d/.test(formatted[nextCursor])) countedDigits += 1;
    nextCursor += 1;
  }
  salaryInput.setSelectionRange(nextCursor, nextCursor);
}

function formatRupiah(amount) {
  return `Rp ${new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(amount)}`;
}

salaryInput.addEventListener("input", () => {
  formatInputAsRupiah();
  errorMessage.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorMessage.textContent = "";

  const digits = salaryInput.value.replace(/\D/g, "");
  if (!digits) {
    errorMessage.textContent = "Masukkan gaji kotor per bulan.";
    salaryInput.focus();
    return;
  }

  const gajiKotor = Number(digits);
  if (!Number.isSafeInteger(gajiKotor)) {
    errorMessage.textContent = "Masukkan jumlah Rupiah yang valid.";
    salaryInput.focus();
    return;
  }

  const tingkat = terKategoriA.find((baris) => gajiKotor <= baris.batasMaksimum);
  const pph21 = Math.round(gajiKotor * (tingkat.tarif / 100));
  const gajiBersih = gajiKotor - pph21;

  taxResult.textContent = formatRupiah(pph21);
  netResult.textContent = formatRupiah(gajiBersih);
  rateResult.textContent = `Tarif yang dipakai: ${String(tingkat.tarif).replace(".", ",")}% (TER kategori A)`;
  results.hidden = false;
});
