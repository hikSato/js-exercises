import { strToJson } from ".";

describe("Convert to escape character", () => {
  test("strToJson", () => {
    expect(strToJson('{"key1":"value1","key2":"value2"}')).toStrictEqual({
      success: true,
      data: { key1: "value1", key2: "value2" },
    });
    expect(strToJson("")).toStrictEqual({
      success: false,
      error: "SyntaxError",
    });
  });
});
