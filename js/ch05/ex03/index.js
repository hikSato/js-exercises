export const checkHoliday = (day) => {
  if (
    day === "月" ||
    day === "火" ||
    day === "水" ||
    day === "木" ||
    day === "金"
  ) {
    return false;
  } else if (day === "土" || day === "日") {
    return true;
  }
  throw new Error("Error: invalid input");
};

export const checkHoliday2 = (day) => {
  switch (day) {
    case "月":
    case "火":
    case "水":
    case "木":
    case "金":
      return false;
    case "土":
    case "日":
      return true;
    default:
      throw new Error("Error: invalid input");
  }
};
