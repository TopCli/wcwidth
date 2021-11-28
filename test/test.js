// Require Third-party Dependencies
import test from "tape";

// Require Internal Dependencies
import wcwidth from "../index.js";

test("handles regular strings", (tape) => {
  tape.strictEqual(wcwidth("abc"), 3);
  tape.end();
});

test("handles multibyte strings", (tape) => {
  tape.strictEqual(wcwidth("字的模块"), 8);
  tape.end();
});

test("handles multibyte characters mixed with regular characters", (tape) => {
  tape.strictEqual(wcwidth("abc 字的模块"), 12);
  tape.end();
});

test("ignores control characters e.g. \\n", (tape) => {
  tape.strictEqual(wcwidth("abc\n字的模块\ndef"), 14);
  tape.end();
});

test("ignores bad input", (tape) => {
  tape.strictEqual(wcwidth(""), 0);
  tape.strictEqual(wcwidth(3), 0);
  tape.strictEqual(wcwidth({}), 0);
  tape.strictEqual(wcwidth([]), 0);
  tape.strictEqual(wcwidth(), 0);
  tape.end();
});

test("ignores nul (charcode 0)", (tape) => {
  tape.strictEqual(wcwidth(String.fromCharCode(0)), 0);
  tape.end();
});

test("ignores nul mixed with chars", (tape) => {
  tape.strictEqual(wcwidth(`a${String.fromCharCode(0)}\n字的`), 5);
  tape.end();
});

test("can have custom value for nul", (tape) => {
  tape.strictEqual(wcwidth(`${String.fromCharCode(0)}a字的`, {
    nul: 10
  }), 15);
  tape.end();
});

test("can have custom control char value", (tape) => {
  tape.strictEqual(wcwidth("abc\n字的模块\ndef", {
    control: 1
  }), 16);
  tape.end();
});

test("negative custom control chars == -1", (tape) => {
  tape.strictEqual(wcwidth("abc\n字的模块\ndef", {
    control: -1
  }), -1);
  tape.end();
});
