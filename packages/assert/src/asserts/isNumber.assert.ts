import { assert } from "../utils/assert.util.js";

export function isNumber(
  value: any,
  message: string = "Value is not a number",
): asserts value is number {
  assert(typeof value === "number", message);
}