"use strict";

// Batas dan persentase disalin dari tarif-ter.md (Lampiran PP 58 Tahun 2023, bagian A, B, dan C).
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

const terKategoriB = [
  { batasMaksimum: 6_200_000, tarif: 0 },
  { batasMaksimum: 6_500_000, tarif: 0.25 },
  { batasMaksimum: 6_850_000, tarif: 0.5 },
  { batasMaksimum: 7_300_000, tarif: 0.75 },
  { batasMaksimum: 9_200_000, tarif: 1 },
  { batasMaksimum: 10_750_000, tarif: 1.5 },
  { batasMaksimum: 11_250_000, tarif: 2 },
  { batasMaksimum: 11_600_000, tarif: 2.5 },
  { batasMaksimum: 12_600_000, tarif: 3 },
  { batasMaksimum: 13_600_000, tarif: 4 },
  { batasMaksimum: 14_950_000, tarif: 5 },
  { batasMaksimum: 16_400_000, tarif: 6 },
  { batasMaksimum: 18_450_000, tarif: 7 },
  { batasMaksimum: 21_850_000, tarif: 8 },
  { batasMaksimum: 26_000_000, tarif: 9 },
  { batasMaksimum: 27_700_000, tarif: 10 },
  { batasMaksimum: 29_350_000, tarif: 11 },
  { batasMaksimum: 31_450_000, tarif: 12 },
  { batasMaksimum: 33_950_000, tarif: 13 },
  { batasMaksimum: 37_100_000, tarif: 14 },
  { batasMaksimum: 41_100_000, tarif: 15 },
  { batasMaksimum: 45_800_000, tarif: 16 },
  { batasMaksimum: 49_500_000, tarif: 17 },
  { batasMaksimum: 53_800_000, tarif: 18 },
  { batasMaksimum: 58_500_000, tarif: 19 },
  { batasMaksimum: 64_000_000, tarif: 20 },
  { batasMaksimum: 71_000_000, tarif: 21 },
  { batasMaksimum: 80_000_000, tarif: 22 },
  { batasMaksimum: 93_000_000, tarif: 23 },
  { batasMaksimum: 109_000_000, tarif: 24 },
  { batasMaksimum: 129_000_000, tarif: 25 },
  { batasMaksimum: 163_000_000, tarif: 26 },
  { batasMaksimum: 211_000_000, tarif: 27 },
  { batasMaksimum: 374_000_000, tarif: 28 },
  { batasMaksimum: 459_000_000, tarif: 29 },
  { batasMaksimum: 555_000_000, tarif: 30 },
  { batasMaksimum: 704_000_000, tarif: 31 },
  { batasMaksimum: 957_000_000, tarif: 32 },
  { batasMaksimum: 1_405_000_000, tarif: 33 },
  { batasMaksimum: Number.POSITIVE_INFINITY, tarif: 34 },
];

const terKategoriC = [
  { batasMaksimum: 6_600_000, tarif: 0 },
  { batasMaksimum: 6_950_000, tarif: 0.25 },
  { batasMaksimum: 7_350_000, tarif: 0.5 },
  { batasMaksimum: 7_800_000, tarif: 0.75 },
  { batasMaksimum: 8_850_000, tarif: 1 },
  { batasMaksimum: 9_800_000, tarif: 1.25 },
  { batasMaksimum: 10_950_000, tarif: 1.5 },
  { batasMaksimum: 11_200_000, tarif: 1.75 },
  { batasMaksimum: 12_050_000, tarif: 2 },
  { batasMaksimum: 12_950_000, tarif: 3 },
  { batasMaksimum: 14_150_000, tarif: 4 },
  { batasMaksimum: 15_550_000, tarif: 5 },
  { batasMaksimum: 17_050_000, tarif: 6 },
  { batasMaksimum: 19_500_000, tarif: 7 },
  { batasMaksimum: 22_700_000, tarif: 8 },
  { batasMaksimum: 26_600_000, tarif: 9 },
  { batasMaksimum: 28_100_000, tarif: 10 },
  { batasMaksimum: 30_100_000, tarif: 11 },
  { batasMaksimum: 32_600_000, tarif: 12 },
  { batasMaksimum: 35_400_000, tarif: 13 },
  { batasMaksimum: 38_900_000, tarif: 14 },
  { batasMaksimum: 43_000_000, tarif: 15 },
  { batasMaksimum: 47_400_000, tarif: 16 },
  { batasMaksimum: 51_200_000, tarif: 17 },
  { batasMaksimum: 55_800_000, tarif: 18 },
  { batasMaksimum: 60_400_000, tarif: 19 },
  { batasMaksimum: 66_700_000, tarif: 20 },
  { batasMaksimum: 74_500_000, tarif: 21 },
  { batasMaksimum: 83_200_000, tarif: 22 },
  { batasMaksimum: 95_600_000, tarif: 23 },
  { batasMaksimum: 110_000_000, tarif: 24 },
  { batasMaksimum: 134_000_000, tarif: 25 },
  { batasMaksimum: 169_000_000, tarif: 26 },
  { batasMaksimum: 221_000_000, tarif: 27 },
  { batasMaksimum: 390_000_000, tarif: 28 },
  { batasMaksimum: 463_000_000, tarif: 29 },
  { batasMaksimum: 561_000_000, tarif: 30 },
  { batasMaksimum: 709_000_000, tarif: 31 },
  { batasMaksimum: 965_000_000, tarif: 32 },
  { batasMaksimum: 1_419_000_000, tarif: 33 },
  { batasMaksimum: Number.POSITIVE_INFINITY, tarif: 34 },
];

const kategoriPerStatus = {
  "TK/0": "A",
  "TK/1": "A",
  "TK/2": "B",
  "TK/3": "B",
  "K/0": "A",
  "K/1": "B",
  "K/2": "B",
  "K/3": "C",
};

const tarifPerKategori = {
  A: terKategoriA,
  B: terKategoriB,
  C: terKategoriC,
};

const salaryInput = document.querySelector("#gross-salary");
const statusInput = document.querySelector("#ptkp-status");
const statusHint = document.querySelector("#status-hint");
const errorMessage = document.querySelector("#salary-error");
const calculateButton = document.querySelector("#calculate-button");
const bpjsToggle = document.querySelector("#include-bpjs");
const results = document.querySelector("#results");
const bpjsBreakdown = document.querySelector("#bpjs-breakdown");
const grossResult = document.querySelector("#gross-result");
const taxResult = document.querySelector("#tax-result");
const netResult = document.querySelector("#net-result");
const rateResult = document.querySelector("#rate-result");
const jkkResult = document.querySelector("#jkk-result");
const jkmResult = document.querySelector("#jkm-result");
const companyHealthResult = document.querySelector("#company-health-result");
const taxableGrossResult = document.querySelector("#taxable-gross-result");
const jhtResult = document.querySelector("#jht-result");
const jpResult = document.querySelector("#jp-result");
const employeeHealthResult = document.querySelector("#employee-health-result");

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
  return "Rp\u00a0" + new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(amount);
}

function updateResults(showEmptyError = false) {
  errorMessage.textContent = "";
  const digits = salaryInput.value.replace(/\D/g, "");

  if (!digits) {
    results.hidden = true;
    if (showEmptyError) {
      errorMessage.textContent = "Masukkan gaji kotor terlebih dahulu.";
      salaryInput.focus();
    }
    return;
  }

  const gajiKotor = Number(digits);
  if (!Number.isSafeInteger(gajiKotor)) {
    results.hidden = true;
    errorMessage.textContent = "Masukkan jumlah Rupiah yang valid.";
    return;
  }

  const status = statusInput.value;
  const kategori = kategoriPerStatus[status];
  const includeBpjs = bpjsToggle.checked;
  const jkk = includeBpjs ? Math.round(gajiKotor * 0.0024) : 0;
  const jkm = includeBpjs ? Math.round(gajiKotor * 0.003) : 0;
  const basisBpjsKesehatanPerusahaan = Math.min(gajiKotor, 12_000_000);
  const bpjsKesehatanPerusahaan = includeBpjs
    ? Math.round(basisBpjsKesehatanPerusahaan * 0.04)
    : 0;
  const brutoPph21 = gajiKotor + jkk + jkm + bpjsKesehatanPerusahaan;
  const jht = includeBpjs ? Math.round(gajiKotor * 0.02) : 0;
  const jp = includeBpjs ? Math.round(Math.min(gajiKotor, 11_086_300) * 0.01) : 0;
  const bpjsKesehatanKaryawan = includeBpjs
    ? Math.round(Math.min(gajiKotor, 12_000_000) * 0.01)
    : 0;
  const tingkat = tarifPerKategori[kategori].find(
    (baris) => brutoPph21 <= baris.batasMaksimum,
  );
  const pph21 = Math.round(brutoPph21 * (tingkat.tarif / 100));
  const gajiBersih = gajiKotor - jht - jp - bpjsKesehatanKaryawan - pph21;

  grossResult.textContent = formatRupiah(gajiKotor);
  taxResult.textContent = formatRupiah(pph21);
  netResult.textContent = formatRupiah(gajiBersih);
  jkkResult.textContent = formatRupiah(jkk);
  jkmResult.textContent = formatRupiah(jkm);
  companyHealthResult.textContent = formatRupiah(bpjsKesehatanPerusahaan);
  taxableGrossResult.textContent = formatRupiah(brutoPph21);
  jhtResult.textContent = formatRupiah(jht);
  jpResult.textContent = formatRupiah(jp);
  employeeHealthResult.textContent = formatRupiah(bpjsKesehatanKaryawan);
  bpjsBreakdown.hidden = !includeBpjs;
  rateResult.textContent =
    "Status PTKP " +
    status +
    " · TER kategori " +
    kategori +
    " · Bruto PPh 21 " +
    formatRupiah(brutoPph21) +
    " · Tarif yang dipakai: " +
    String(tingkat.tarif).replace(".", ",") +
    "% · " +
    (includeBpjs ? "Iuran BPJS aktif" : "Tanpa iuran BPJS");
  results.hidden = false;
}

function updateStatusHint() {
  statusHint.textContent =
    "TER kategori " +
    kategoriPerStatus[statusInput.value] +
    " dipilih. Tekan Hitung untuk memakai status ini.";
}

salaryInput.addEventListener("input", () => {
  formatInputAsRupiah();
  updateResults();
});

statusInput.addEventListener("change", () => {
  updateStatusHint();
});

calculateButton.addEventListener("click", () => updateResults(true));

updateStatusHint();
