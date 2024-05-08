// Partially stolen from https://nodejs.org/en/learn/getting-started/nodejs-with-webassembly
const fs = require("node:fs");

// Rust
const rustBuffer = fs.readFileSync(
  "../../rust/rustmath/target/wasm32-unknown-unknown/release/rustmath.wasm",
);

WebAssembly.instantiate(rustBuffer).then((wasmModule) => {
  const { add } = wasmModule.instance.exports;

  const left = 120;
  const right = 3;

  console.log(
    `Rust : Turns out, adding ${left} to ${right} gives ${add(left, right)}! Who'd have thunk?`,
  );
});

// TinyGo
const goBuffer = fs.readFileSync("../../go/tinygo/tinygomath.wasm");

WebAssembly.instantiate(goBuffer).then((wasmModule) => {
  const { double } = wasmModule.instance.exports;
  const value = 111;
  console.log(`Go   : If you double ${value}, you get ${double(value)}. No jokes.`);
});

// Zig
const zigBuffer = fs.readFileSync("../../zig/zigmath/zigmath.wasm");

WebAssembly.instantiate(zigBuffer).then((wasmModule) => {
  const { product } = wasmModule.instance.exports;
  const left = 21;
  const right = 2;
  console.log(`Zig  : If you multiply ${left} with ${right}, you get ${product(left, right)}. No cap.`);
});

// C
const cBuffer = fs.readFileSync("../../c/simplemath/square.wasm");

WebAssembly.instantiate(cBuffer).then((wasmModule) => {
  const { square } = wasmModule.instance.exports;
  const value = 4;
  console.log(`C    : If you square ${value}, you get ${square(value)}. Wasted.`);
});