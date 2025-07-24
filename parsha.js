/*
 * Functions to compute the weekly Torah portion (parsha) for a given
 * Gregorian date.  This file contains a JavaScript port of the
 * algorithm implemented in parsha_calculator.py.  It is self‑contained
 * and does not rely on any external libraries.  See that Python
 * module for detailed comments explaining the math.  The implementation
 * here follows the same structure to make it easy to compare.
 */

// List of parsha names in Ashkenazic transliteration.  Indices
// correspond to values produced by the algorithm.  Double portions
// will return two indices.
const PARSHIOS = [
  'Bereshit',      // 0
  'Noach',         // 1
  'Lech-Lecha',    // 2
  'Vayera',        // 3
  'Chayei Sara',   // 4
  'Toldot',        // 5
  'Vayetzei',      // 6
  'Vayishlach',    // 7
  'Vayeshev',      // 8
  'Miketz',        // 9
  'Vayigash',      // 10
  'Vayechi',       // 11
  'Shemot',        // 12
  "Va'eira",      // 13
  'Bo',            // 14
  'Beshalach',     // 15
  'Yitro',         // 16
  'Mishpatim',     // 17
  'Terumah',       // 18
  'Tetzaveh',      // 19
  'Ki Tisa',       // 20
  'Vayakhel',      // 21
  'Pekudei',       // 22
  'Vayikra',       // 23
  'Tzav',          // 24
  'Shmini',        // 25
  'Tazria',        // 26
  'Metzora',       // 27
  'Achrei Mot',    // 28
  'Kedoshim',      // 29
  'Emor',          // 30
  'Behar',         // 31
  'Bechukotai',    // 32
  'Bamidbar',      // 33
  'Naso',          // 34
  "Beha'alotcha", // 35
  'Sh’lach',       // 36
  'Korach',        // 37
  'Chukat',        // 38
  'Balak',         // 39
  'Pinchas',       // 40
  'Matot',         // 41
  'Masei',         // 42
  'Devarim',       // 43
  'Vaetchanan',    // 44
  'Eikev',         // 45
  'Re’eh',         // 46
  'Shoftim',       // 47
  'Ki Teitzei',    // 48
  'Ki Tavo',       // 49
  'Nitzavim',      // 50
  'Vayeilech',     // 51
  'Ha’azinu',      // 52
  'Vezot Haberakhah'  // 53 (not used for weekly reading but included for completeness)
];

// Utility functions for Gregorian calendar
function leapGregorian(year) {
  return (year % 4 === 0) && ([100, 200, 300].indexOf(year % 400) === -1);
}

function lastDayOfGregorianMonth(month, year) {
  if (month === 2 && leapGregorian(year)) {
    return 29;
  }
  const lengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return lengths[month - 1];
}

function gregorianToAbsDate(year, month, day) {
  // Convert a Gregorian date to the absolute day count used by our algorithm.
  let absdate = day;
  for (let m = 1; m < month; m++) {
    absdate += lastDayOfGregorianMonth(m, year);
  }
  absdate += 365 * (year - 1);
  absdate += Math.floor((year - 1) / 4);
  absdate -= Math.floor((year - 1) / 100);
  absdate += Math.floor((year - 1) / 400);
  return absdate;
}

// Hebrew calendar helper functions
function hebrewLeap(year) {
  return (((year * 7) + 1) % 19) < 7;
}

function hebrewYearMonths(year) {
  return hebrewLeap(year) ? 13 : 12;
}

function hebrewCalendarElapsedDays(year) {
  let monthsElapsed = 235 * Math.floor((year - 1) / 19);
  monthsElapsed += 12 * ((year - 1) % 19);
  monthsElapsed += Math.floor((((year - 1) % 19) * 7 + 1) / 19);
  let partsElapsed = ((monthsElapsed % 1080) * 793) + 204;
  let hoursElapsed = 5 + (monthsElapsed * 12) + Math.floor((monthsElapsed / 1080)) * 793 + Math.floor(partsElapsed / 1080);
  let day = 1 + (29 * monthsElapsed) + Math.floor(hoursElapsed / 24);
  let parts = ((hoursElapsed % 24) * 1080) + (partsElapsed % 1080);
  let alternative_day;
  // Apply postponement rules
  if (
    parts >= 19440 ||
    ((day % 7) === 2 && parts >= 9924 && !hebrewLeap(year)) ||
    ((day % 7) === 1 && parts >= 16789 && hebrewLeap(year - 1))
  ) {
    alternative_day = day + 1;
  } else {
    alternative_day = day;
  }
  // Further postponements
  if ([0, 3, 5].includes(alternative_day % 7)) {
    alternative_day += 1;
  }
  return alternative_day;
}

function daysInHebrewYear(year) {
  return hebrewCalendarElapsedDays(year + 1) - hebrewCalendarElapsedDays(year);
}

function longHeshvan(year) {
  return (daysInHebrewYear(year) % 10) === 5;
}

function shortKislev(year) {
  return (daysInHebrewYear(year) % 10) === 3;
}

function hebrewMonthDays(year, month) {
  // Months are numbered with Tishrei=7 ... Adar I=12, Adar II=13 (if leap), then Nisan=1, Iyar=2, etc.
  if ([2, 4, 6, 10, 13].indexOf(month) !== -1) {
    return 29;
  }
  if (month === 12 && !hebrewLeap(year)) {
    return 29;
  }
  if (month === 8 && !longHeshvan(year)) {
    return 29;
  }
  if (month === 9 && shortKislev(year)) {
    return 29;
  }
  return 30;
}

function hebrewToAbsDate(year, month, day) {
  let absdate = day;
  if (month < 7) {
    // months Tishrei(7) through end of the year
    for (let m = 7; m <= hebrewYearMonths(year); m++) {
      absdate += hebrewMonthDays(year, m);
    }
    for (let m = 1; m < month; m++) {
      absdate += hebrewMonthDays(year, m);
    }
  } else {
    for (let m = 7; m < month; m++) {
      absdate += hebrewMonthDays(year, m);
    }
  }
  absdate += hebrewCalendarElapsedDays(year);
  // Offset to align with Gregorian epoch.  See parsha_calculator.py for details.
  absdate -= 1373429;
  return absdate;
}

function absDateToHebrew(absdate) {
  const approx = Math.floor((absdate + 1373429) / 366);
  let year = approx;
  while (true) {
    if (absdate < hebrewToAbsDate(year + 1, 7, 1)) break;
    year += 1;
  }
  let startMonth;
  if (absdate < hebrewToAbsDate(year, 1, 1)) {
    startMonth = 7;
  } else {
    startMonth = 1;
  }
  let month = startMonth;
  while (true) {
    if (absdate <= hebrewToAbsDate(year, month, hebrewMonthDays(year, month))) break;
    month += 1;
  }
  let day = absdate - hebrewToAbsDate(year, month, 1) + 1;
  return { year: year, month: month, day: day };
}

function getWeekdayFromAbsDate(absdate) {
  // Return weekday with Sunday=0, Saturday=6.  Adjust for negative numbers.
  let wd = absdate % 7;
  if (wd < 0) wd += 7;
  return wd;
}

class HebrewDate {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  get jd() {
    return hebrewToAbsDate(this.year, this.month, this.day);
  }
  weekday() {
    return getWeekdayFromAbsDate(this.jd) + 1; // 1=Sunday .. 7=Saturday
  }
  addDays(days) {
    const newAbs = this.jd + days;
    const h = absDateToHebrew(newAbs);
    return new HebrewDate(h.year, h.month, h.day);
  }
  shabbos() {
    const wday = this.weekday();
    const distance = (7 - wday) % 7;
    return this.addDays(distance);
  }
  key() {
    return `${this.year}-${this.month}-${this.day}`;
  }
}

function parshaless(date, israel) {
  // Determine if the Shabbat has no weekly parsha because it coincides with a holiday.
  // In Israel, Simchat Torah (7-23), Pesach VII (1-22) and Shavuot II (3-7) still get a parsha.
  if (israel) {
    const tail = `${date.month},${date.day}`;
    if (tail === '7,23' || tail === '1,22' || tail === '3,7') {
      return false;
    }
  }
  // Tishrei: Rosh Hashanah (1/2), Yom Kippur (10), Sukkot and Shemini Atzeret (15–23)
  if (date.month === 7 && ([1, 2, 10].includes(date.day) || (date.day >= 15 && date.day <= 23))) {
    return true;
  }
  // Nisan (1): first two days of Pesach (15–22 inclusive)
  if (date.month === 1 && (date.day >= 15 && date.day <= 22)) {
    return true;
  }
  // Sivan (3): first two days of Shavuot (6–7)
  if (date.month === 3 && (date.day === 6 || date.day === 7)) {
    return true;
  }
  return false;
}

// Cache for generated year tables to avoid recomputing.
const gentableCache = {};

function gentable(year, israel = false) {
  const cacheKey = `${year}-${israel ? 1 : 0}`;
  if (gentableCache[cacheKey]) {
    return gentableCache[cacheKey];
  }
  // Build the deque of parsha indices: [51, 52, 0, 1, 2, ..., 51]
  const parshalist = [];
  parshalist.push(51, 52);
  for (let i = 0; i < 52; i++) {
    parshalist.push(i);
  }
  // pointer index for popping from front
  let idx = 0;
  const table = new Map();
  const leap = hebrewLeap(year);
  // Weekday of Pesach 15 Nissan
  const pesachDay = new HebrewDate(year, 1, 15).weekday();
  // First Shabbat on or after Rosh Hashanah
  const roshHashana = new HebrewDate(year, 7, 1);
  let shabbos = roshHashana.shabbos();
  // If Rosh Hashanah falls on Thu/Fri/Sat (weekday > 4), skip the first parsha
  if (roshHashana.weekday() > 4) {
    idx += 1;
  }
  while (shabbos.year === year) {
    if (parshaless(shabbos, israel)) {
      table.set(shabbos.key(), null);
    } else {
      const parsha = parshalist[idx++];
      const list = [parsha];
      // Determine if this parsha should be doubled
      // Conditions mirror those in the Python version
      const cond1 = (parsha === 21 && Math.floor((new HebrewDate(year, 1, 14).jd - shabbos.jd) / 7) < 3);
      const cond2 = ((parsha === 26 || parsha === 28) && !leap);
      const cond3 = (parsha === 31 && !leap && (!israel || pesachDay !== 7));
      const cond4 = (parsha === 38 && !israel && pesachDay === 5);
      const cond5 = (parsha === 41 && Math.floor((new HebrewDate(year, 5, 9).jd - shabbos.jd) / 7) < 2);
      const cond6 = (parsha === 50 && new HebrewDate(year + 1, 7, 1).weekday() > 4);
      if (cond1 || cond2 || cond3 || cond4 || cond5 || cond6) {
        list.push(parshalist[idx++]);
      }
      table.set(shabbos.key(), list);
    }
    // Move to next Shabbat
    shabbos = shabbos.addDays(7);
  }
  gentableCache[cacheKey] = table;
  return table;
}

function getParshaIndices(hebDate, israel = false) {
  const shabbos = hebDate.shabbos();
  const table = gentable(shabbos.year, israel);
  return table.get(shabbos.key());
}

/**
 * Compute the parsha name(s) for the Shabbat on or after the given
 * Gregorian date.  Returns a comma‑separated string or null if the
 * Shabbat coincides with a holiday and has no weekly parsha.
 *
 * @param {number} gYear Gregorian year
 * @param {number} gMonth Gregorian month (1–12)
 * @param {number} gDay Gregorian day (1–31)
 * @param {boolean} israel Set true for Israeli reading schedule
 * @returns {string|null}
 */
function getParshaName(gYear, gMonth, gDay, israel = false) {
  const absdate = gregorianToAbsDate(gYear, gMonth, gDay);
  const h = absDateToHebrew(absdate);
  const hebDate = new HebrewDate(h.year, h.month, h.day);
  const indices = getParshaIndices(hebDate, israel);
  if (indices === null || indices === undefined) {
    return null;
  }
  const names = indices.map(i => PARSHIOS[i]);
  return names.join(', ');
}

// Export functions for use in other scripts (for Node and browser)
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { getParshaName };
}