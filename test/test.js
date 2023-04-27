// Require Node.js Dependencies
import { test } from "node:test";
import assert from "node:assert";

// Require Internal Dependencies
import wcwidth from "../index.js";

test("handles regular strings", () => {
  assert.strictEqual(wcwidth("abc"), 3);
});

test("handles multibyte strings", () => {
  assert.strictEqual(wcwidth("字的模块"), 8);
});

test("handles multibyte characters mixed with regular characters", () => {
  assert.strictEqual(wcwidth("abc 字的模块"), 12);
});

test("ignores control characters e.g. \\n", () => {
  assert.strictEqual(wcwidth("abc\n字的模块\ndef"), 14);
});

test("ignores bad input", () => {
  assert.strictEqual(wcwidth(""), 0);
  assert.strictEqual(wcwidth(3), 0);
  assert.strictEqual(wcwidth({}), 0);
  assert.strictEqual(wcwidth([]), 0);
  assert.strictEqual(wcwidth(), 0);
});

test("ignores nul (charcode 0)", () => {
  assert.strictEqual(wcwidth(String.fromCharCode(0)), 0);
});

test("ignores nul mixed with chars", () => {
  assert.strictEqual(wcwidth(`a${String.fromCharCode(0)}\n字的`), 5);
});

test("can have custom value for nul", () => {
  assert.strictEqual(wcwidth(`${String.fromCharCode(0)}a字的`, {
    nul: 10
  }), 15);
});

test("can have custom control char value", (tape) => {
  assert.strictEqual(wcwidth("abc\n字的模块\ndef", {
    control: 1
  }), 16);
});

test("negative custom control chars == -1", (tape) => {
  assert.strictEqual(wcwidth("abc\n字的模块\ndef", {
    control: -1
  }), -1);
});
