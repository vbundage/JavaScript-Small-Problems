"use strict";

function encode(string) {
  if (!string) return "";
  return string.replace(/([A-Za-z ])\1+/g, (match, p1) => `${match.length}${p1}`);
}

function decode(string) {
  if (!string) return "";
  return string.replace(/(\d+)([A-Za-z ])/g, (_, p1, p2) => p2.repeat(p1));
}

module.exports = {
  encode,
  decode
};