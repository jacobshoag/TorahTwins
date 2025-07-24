/*
 * Functions to compute the weekly Torah portion (parsha) for a given
 * Gregorian date.  This file contains a pure‑JavaScript port of the
 * algorithm in parsha_calculator.py, so it needs no external libraries.
 *
 *  ────────────────────────────────────────────────────────────────
 *  NEW (July 2025):  getBarMitzvahParshaName() – correct halachic method
 *  ────────────────────────────────────────────────────────────────
 */

/* ---------------- Parsha list ---------------- */
const PARSHIOS = [
  'Bereshit', 'Noach', 'Lech-Lecha', 'Vayera', 'Chayei Sara', 'Toldot',
  'Vayetzei', 'Vayishlach', 'Vayeshev', 'Miketz', 'Vayigash', 'Vayechi',
  'Shemot', "Va'eira", 'Bo', 'Beshalach', 'Yitro', 'Mishpatim', 'Terumah',
  'Tetzaveh', 'Ki Tisa', 'Vayakhel', 'Pekudei', 'Vayikra', 'Tzav', 'Shmini',
  'Tazria', 'Metzora', 'Achrei Mot', 'Kedoshim', 'Emor', 'Behar',
  'Bechukotai', 'Bamidbar', 'Naso', "Beha'alotcha", 'Sh’lach', 'Korach',
  'Chukat', 'Balak', 'Pinchas', 'Matot', 'Masei', 'Devarim', 'Vaetchanan',
  'Eikev', 'Re’eh', 'Shoftim', 'Ki Teitzei', 'Ki Tavo',
  'Nitzavim', 'Vayeilech', 'Ha’azinu', 'Vezot Haberakhah'
];

/* ---------------- Gregorian helpers ---------------- */
function leapGregorian(y) {
  return (y % 4 === 0) && ([100, 200, 300].indexOf(y % 400) === -1);
}
function lastDayOfGregorianMonth(m, y) {
  return (m === 2 && leapGregorian(y)) ? 29 :
         [31,28,31,30,31,30,31,31,30,31,30,31][m - 1];
}
function gregorianToAbsDate(y, m, d) {
  let abs = d;
  for (let i = 1; i < m; i++) abs += lastDayOfGregorianMonth(i, y);
  abs += 365 * (y - 1)
       + Math.floor((y - 1) / 4)
       - Math.floor((y - 1) / 100)
       + Math.floor((y - 1) / 400);
  return abs;
}

/* ---------------- Hebrew‑calendar core ---------------- */
function hebrewLeap(y)           { return (((y * 7) + 1) % 19) < 7; }
function hebrewYearMonths(y)     { return hebrewLeap(y) ? 13 : 12; }

function hebrewCalendarElapsedDays(y) {
  let months = 235 * Math.floor((y - 1) / 19)
             + 12  * ((y - 1) % 19)
             + Math.floor((((y - 1) % 19) * 7 + 1) / 19);
  let parts  = ((months % 1080) * 793) + 204;
  let hours  = 5 + (months * 12) + Math.floor(parts / 1080);
  let day    = 1 + (29 * months) + Math.floor(hours / 24);
  let remain = ((hours % 24) * 1080) + (parts % 1080);

  // Rosh‑Hashanah postponement rules
  if (
    remain >= 19440 ||
    (day % 7 === 2 && remain >= 9924 && !hebrewLeap(y)) ||
    (day % 7 === 1 && remain >= 16789 && hebrewLeap(y - 1))
  ) {
    day += 1;
  }
  if ([0, 3, 5].includes(day % 7)) day += 1;

  return day;
}
function daysInHebrewYear(y) { return hebrewCalendarElapsedDays(y + 1) - hebrewCalendarElapsedDays(y); }
function longHeshvan(y)      { return (daysInHebrewYear(y) % 10) === 5; }
function shortKislev(y)      { return (daysInHebrewYear(y) % 10) === 3; }

function hebrewMonthDays(y, m) {
  // Tishrei=7 … Adar II=13, then Nisan=1
  if ([2, 4, 6, 10, 13].includes(m)) return 29;
  if (m === 12 && !hebrewLeap(y))    return 29;
  if (m === 8 && !longHeshvan(y))    return 29;
  if (m === 9 &&  shortKislev(y))    return 29;
  return 30;
}

function hebrewToAbsDate(y, m, d) {
  let abs = d;
  if (m < 7) {
    for (let i = 7; i <= hebrewYearMonths(y); i++) abs += hebrewMonthDays(y, i);
    for (let i = 1; i < m; i++) abs += hebrewMonthDays(y, i);
  } else {
    for (let i = 7; i < m; i++) abs += hebrewMonthDays(y, i);
  }
  abs += hebrewCalendarElapsedDays(y);
  // offset to align with Gregorian epoch
  return abs - 1373429;
}

function absDateToHebrew(abs) {
  const approx = Math.floor((abs + 1373429) / 366);
  let y = approx;
  while (abs >= hebrewToAbsDate(y + 1, 7, 1)) y += 1;

  let startMonth = abs < hebrewToAbsDate(y, 1, 1) ? 7 : 1;
  let m = startMonth;
  while (abs > hebrewToAbsDate(y, m, hebrewMonthDays(y, m))) m += 1;

  const d = abs - hebrewToAbsDate(y, m, 1) + 1;
  return { year: y, month: m, day: d };
}

function weekday(abs) { let w = abs % 7; if (w < 0) w += 7; return w; }

/* ---------------- HebrewDate class ---------------- */
class HebrewDate {
  constructor(y, m, d) { this.year = y; this.month = m; this.day = d; }
  get jd()      { return hebrewToAbsDate(this.year, this.month, this.day); }
  weekday()     { return weekday(this.jd) + 1; } // 1=Sun…7=Sat
  addDays(n)    { const h = absDateToHebrew(this.jd + n); return new HebrewDate(h.year, h.month, h.day); }
  shabbos()     { return this.addDays((7 - this.weekday()) % 7); }
  key()         { return `${this.year}-${this.month}-${this.day}`; }
}

/* ---------------- parsha lookup engine ---------------- */
function parshaless(hDate, israel) {
  // holiday Shabbatot with no weekly portion
  const m = hDate.month, d = hDate.day;
  if (m === 7 && ([1,2,10].includes(d) || (d >= 15 && d <= 23))) return true;          // RH, YK, Sukkot
  if (m === 1 &&  d >= 15 && d <= 22)                               return true;      // Pesach
  if (m === 3 && (d === 6 || d === 7) && !israel)                  return true;      // Shavuot (Diaspora second day)
  return false;
}

const gencache = new Map();
function gentable(y, israel = false) {
  const key = `${y}-${israel ? 1 : 0}`;
  if (gencache.has(key)) return gencache.get(key);

  // Build parsha cycle list
  const cycle = [51,52, ...Array.from({length:52}, (_,i)=>i)];
  let ptr = 0;
  const tbl = new Map();
  const leap = hebrewLeap(y);
  const pesachWday = new HebrewDate(y,1,15).weekday();
  let shabbos = new HebrewDate(y,7,1).shabbos();
  if (new HebrewDate(y,7,1).weekday() > 4) ptr += 1; // skip if RH Thu/Fri/Sat

  while (shabbos.year === y) {
    if (parshaless(shabbos,israel)) {
      tbl.set(shabbos.key(), null);
    } else {
      const p1 = cycle[ptr++];
      const list = [p1];

      const cond1 = (p1===21 && Math.floor((new HebrewDate(y,1,14).jd - shabbos.jd)/7) < 3);
      const cond2 = ((p1===26 || p1===28) && !leap);
      const cond3 = (p1===31 && !leap && (!israel || pesachWday!==7));
      const cond4 = (p1===38 && !israel && pesachWday===5);
      const cond5 = (p1===41 && Math.floor((new HebrewDate(y,5,9).jd - shabbos.jd)/7) < 2);
      const cond6 = (p1===50 && new HebrewDate(y+1,7,1).weekday()>4);

      if (cond1||cond2||cond3||cond4||cond5||cond6) list.push(cycle[ptr++]);
      tbl.set(shabbos.key(), list);
    }
    shabbos = shabbos.addDays(7);
  }

  gencache.set(key,tbl);
  return tbl;
}
function getParshaIndices(hDate,israel=false) {
  const shabbos = hDate.shabbos();
  return gentable(shabbos.year,israel).get(shabbos.key());
}

/* ---------------- Parsha for any Gregorian date ---------------- */
function getParshaName(gYear,gMonth,gDay,israel=false){
  const abs  = gregorianToAbsDate(gYear,gMonth,gDay);
  const h    = absDateToHebrew(abs);
  const idxs = getParshaIndices(new HebrewDate(h.year,h.month,h.day),israel);
  if (!idxs) return null;
  return idxs.map(i => PARSHIOS[i]).join(', ');
}

/* ================================================================
 * NEW helper:  Bar/Bat‑Mitzvah parsha (halachic)
 * ================================================================ */
function getBarMitzvahParshaName(gYear,gMonth,gDay,israel=false,gender='m'){
  const absBirth = gregorianToAbsDate(gYear,gMonth,gDay);
  const hBirth   = absDateToHebrew(absBirth);      // {year,month,day}
  const hYearBM  = hBirth.year + (gender==='f'?12:13);
  const hebBM    = new HebrewDate(hYearBM, hBirth.month, hBirth.day);
  const shabbos  = hebBM.shabbos();                // next Shabbat
  const idxs     = getParshaIndices(shabbos,israel);
  return idxs ? idxs.map(i=>PARSHIOS[i]).join(', ') : null;
}

/* ---------------- exports ---------------- */
if (typeof window !== 'undefined') {
  window.getParshaName           = getParshaName;
  window.getBarMitzvahParshaName = getBarMitzvahParshaName;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getParshaName,
    getBarMitzvahParshaName
  };
}
