"use strict";

// Require Third-party Dependencies
const test = require("japa");

// Require Internal Dependencies
const wcwidth = require("..");

test("handles regular strings", function(t) {
    t.strictEqual(wcwidth("abc"), 3);
});

test("handles multibyte strings", function(t) {
    t.strictEqual(wcwidth("字的模块"), 8);
});

test("handles multibyte characters mixed with regular characters", function(t) {
    t.strictEqual(wcwidth("abc 字的模块"), 12);
});

test("ignores control characters e.g. \\n", function(t) {
    t.strictEqual(wcwidth("abc\n字的模块\ndef"), 14);
});

test("ignores bad input", function(t) {
    t.strictEqual(wcwidth(""), 0);
    t.strictEqual(wcwidth(3), 0);
    t.strictEqual(wcwidth({}), 0);
    t.strictEqual(wcwidth([]), 0);
    t.strictEqual(wcwidth(), 0);
});

test("ignores nul (charcode 0)", function(t) {
    t.strictEqual(wcwidth(String.fromCharCode(0)), 0);
});

test("ignores nul mixed with chars", function(t) {
    t.strictEqual(wcwidth(`a${String.fromCharCode(0)}\n字的`), 5);
});

test("can have custom value for nul", function(t) {
    t.strictEqual(wcwidth.config({
        nul: 10
    })(`${String.fromCharCode(0)}a字的`), 15);
});

test("can have custom control char value", function(t) {
    t.strictEqual(wcwidth.config({
        control: 1
    })("abc\n字的模块\ndef"), 16);
});

test("negative custom control chars == -1", function(t) {
    t.strictEqual(wcwidth.config({
        control: -1
    })("abc\n字的模块\ndef"), -1);
});
