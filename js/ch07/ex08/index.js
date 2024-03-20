export const reverse = (text) => {
  const segmenterFr = new Intl.Segmenter("ja", { granularity: "grapheme" });
  const segments = segmenterFr.segment(text)[Symbol.iterator]();
  let newText = "";
  for (const segment of segments) {
    newText = segment.segment + newText;
  }
  return newText;
};
