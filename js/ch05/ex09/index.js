export const strToJson = (str) => {
  try {
    return { success: true, data: JSON.parse(str) };
  } catch (e) {
    return { success: false, error: e.name };
  }
};
