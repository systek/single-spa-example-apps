import "./set-public-path";

// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction() {
  // eslint-disable-next-line no-console
  console.log("public called!");
}
