# Go Desktop Application - DevConf 2024

This is the desktop component for my live code demo at DevConf 2024.

You should install an up-to-date version of [Go](https://go.dev/) before proceeding. I used `1.22` for the demo.

## Fyne

I use [Fyne](https://fyne.io/) to present the graphical component of the demo. Please follow the instructions on the website for your operating system to configure the appropriate libraries and dependencies.

## Running Wasm in Go

The [WaZero](https://github.com/tetratelabs/wazero) project provides a WebAssembly runtime for Go. This allows you to load Wasm modules compiled in other languages into your Go application.

The desktop app loads several Wasm modules and then makes calls to them, extending the Go functionality without rewriting the entire solution in Go.
