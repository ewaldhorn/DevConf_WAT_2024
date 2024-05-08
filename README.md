# DevConf2024

My DevConf 2024 talk about Web Assembly and how you can use different languages to build solutions that work together in the Wasm runtime of your choice, or if you are truly deranged, your embedded runtime of choice!

## Languages used

Rust, Go, Zig, JavaScript, Python, C are all used in some way shape or form in the demos.

## Convenience tool

I use [Task](https://taskfile.dev/) to manage my build scripts and steps. You don't have to, you can use whatever works for you. There's a `Task.yml` file in most directories that contain the various instructions to build / copy etc. various parts of the project.

## Projects using WebAssembly

### [v86](https://copy.sh/v86/)

The v86 project is interesting in that it takes x86 code and compiles it to wasm, then runs it in the browser! See [v86 source](https://github.com/copy/v86) for details on this great Rust and JavaScript project.

### [Kong Gateway](https://konghq.com/blog/product-releases/gateway-3-4-oss)

Extend Kong Gateway with wasm plugins.

### [Spin and SpinKube](https://www.spinkube.dev/)

Develop serverless applications using WebAssembly as well as use wasm in Kubernetes. Also see [Spin](https://developer.fermyon.com/spin/v2/index) for information about the Spin runtime and the languages it supports.

### [wasmCloud](https://wasmcloud.com/)

A universal platform for deploying and executing wasm applications on any cloud.

### [Tarmac](https://tarmac.gitbook.io/tarmac-framework)

Framework for building functions, microservices and monoliths, all in WebAssembly.

### [Onyx](https://wasmer.io/posts/onyxlang-powered-by-wasmer)

A new WebAssembly focused programming language.
