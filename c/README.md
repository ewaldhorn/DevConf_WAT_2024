# DevConf 2024 - C

This directory contains the C source code for the talk live code demo.

## CLang

Please install [clang](https://clang.llvm.org/) for your environment.

## lld-14

You also need [lld-14](https://releases.llvm.org/14.0.0/tools/lld/docs/ReleaseNotes.html) to build the wasm binary.

## Verify

Run `llc --version` and make sure you have the `wasm32` and `wasm64` targets registered, something like:

``` text
...
    wasm32      - WebAssembly 32-bit
    wasm64      - WebAssembly 64-bit
...
```

## Compiling

The following command outputs a wasm binary:

`clang --target=wasm32 --no-standard-libraries -Wl,--export-all -Wl,--no-entry -o <target>.wasm <source>.c`

For a working example, see the `Task.yml` file in one of the C directories.

## Task

I use [Task](https://taskfile.dev/) to make my life easier, but this is not required. Every sub-directory should have a `Task.yml` file that contains the build and various other instructions for that sub-project.
