export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Bulan Ramadan adalah bulan ke berapa dalam kalender Hijriyah?",
    options: ["Bulan ke-7", "Bulan ke-8", "Bulan ke-9", "Bulan ke-10"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "Apa nama malam istimewa yang lebih baik dari seribu bulan?",
    options: ["Lailatul Qadr", "Lailatul Barat", "Lailatul Miraj", "Lailatul Nuzul"],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "Shalat sunnah yang dilakukan pada malam hari selama Ramadan disebut?",
    options: ["Shalat Dhuha", "Shalat Tahajud", "Shalat Tarawih", "Shalat Istikharah"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Waktu berbuka puasa disebut?",
    options: ["Sahur", "Iftar", "Imsak", "Subuh"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "Berapa rakaat shalat Tarawih yang biasa dilakukan?",
    options: ["8 atau 20 rakaat", "10 atau 22 rakaat", "12 atau 24 rakaat", "6 atau 18 rakaat"],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "Apa yang dimakan Rasulullah SAW untuk berbuka puasa?",
    options: ["Roti dan susu", "Kurma dan air", "Nasi dan lauk", "Buah-buahan"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "Kapan waktu sahur berakhir?",
    options: ["Saat adzan Maghrib", "Saat adzan Isya", "Saat imsak/adzan Subuh", "Saat terbit matahari"],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: "Apa nama zakat yang wajib dikeluarkan di bulan Ramadan?",
    options: ["Zakat Mal", "Zakat Fitrah", "Zakat Penghasilan", "Zakat Emas"],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "Pada tanggal berapa biasanya Lailatul Qadr terjadi?",
    options: ["Malam genap terakhir Ramadan", "Malam ganjil 10 terakhir Ramadan", "Malam pertama Ramadan", "Setiap malam Ramadan"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "Hari raya yang merayakan berakhirnya puasa Ramadan disebut?",
    options: ["Idul Adha", "Idul Fitri", "Maulid Nabi", "Isra Miraj"],
    correctAnswer: 1,
  },
];
