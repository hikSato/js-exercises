// 特定の年と月(1-12)を数値の引数で受け取り、その月の日数を返す関
export const getDaysOfMonth = (year, month) => {
  new Date(year, month);
  return new Date(year, month, 0).getDate();
};
// console.log(getDaysOfMonth(2023, 2));

// 期間の開始日と終了日を'YYYY-MM-DD'形式の日付で二つ引数で受け取り、その期間(開始日と終了日を含む)の土日以外の日数を返す関数
export const getWeekdayCount = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const ONE_DAY = 24 * 60 * 60 * 1000;
  const DAYS_OF_WEEK = ["日", "月", "火", "水", "木", "金", "土"];
  const days = (end - start) / ONE_DAY;
  let count = 0;
  for (let i = 0; i <= days; i++) {
    const day = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate() + i
    );
    if (
      DAYS_OF_WEEK[day.getDay()] === "土" ||
      DAYS_OF_WEEK[day.getDay()] === "日"
    )
      continue;
    count++;
  }
  return count;
};
// console.log(getWeekdayCount("2024-05-10", "2024-06-1"));

// 'YYYY-MM-DD'形式の日付とロケールを引数で受け取り、その日の曜日をロケールの形式の文字列で返す関数
export const getDayOfWeek = (dateString, locale) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, { weekday: "long" });
};

// ローカルのタイムゾーンにおいて先月 1 日 0 時 0 分 0 秒の Date オブジェクトを返す関数。ただし getMonth、setMonth は利用してはいけない。
export const getDateObj = (dateString) => {
  const now = dateString ? new Date(dateString) : new Date();
  const regex = /^[A-Za-z]{3}\s([A-Za-z]{3})\s\d{2}\s(\d{4})$/;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = now.getFullYear();
  const month = months.findIndex(
    (e) => e === regex.exec(now.toDateString())[1]
  );
  return new Date(year, month - 1, 1, 0, 0, 0);
};

// console.log(getDateObj("2024-10-10"));
