console.log("=== catch ===");
try {
  console.log("try");
  throw Error();
} catch {
  console.log("catch");
} finally {
  console.log("finally");
}
console.log("=== no catch ===");
try {
  console.log("try");
} catch {
  console.log("catch");
} finally {
  console.log("finally");
}
