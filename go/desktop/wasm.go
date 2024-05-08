package main

import (
	"context"
	"log"
	"os"

	"github.com/tetratelabs/wazero"
	"github.com/tetratelabs/wazero/imports/wasi_snapshot_preview1"
)

// --------------------------------------------------------------- execRustWasm
func execRustWasm(ctx context.Context, val1 uint64, val2 uint64) uint64 {
	wasmBytes, readError := os.ReadFile("./wasm/rustmath.wasm")

	if readError != nil {
		log.Fatalf("failed to load Rust Wasm component: %v.\n", readError)
	}

	r := wazero.NewRuntime(ctx)
	defer r.Close(ctx)

	wasi_snapshot_preview1.MustInstantiate(ctx, r)
	// Instantiate the guest Wasm into the same runtime. It exports the `add`
	// function, implemented in WebAssembly.
	mod, err := r.Instantiate(ctx, wasmBytes)
	if err != nil {
		log.Panicf("failed to instantiate module: %v", err)
	}

	// Call the `add` function and print the results to the console.
	add := mod.ExportedFunction("add")
	results, err := add.Call(ctx, val1, val2)
	if err != nil {
		log.Panicf("failed to call add: %v", err)
	}

	return results[0]
}

// ------------------------------------------------------------- execTinyGoWasm
func execTinyGoWasm(ctx context.Context, val1 uint64) uint64 {
	goBytes, goBytesError := os.ReadFile("./wasm/tinygomath.wasm")
	if goBytesError != nil {
		log.Fatalf("failed to load TinyGo Wasm component: %v.\n", goBytesError)
	}

	r := wazero.NewRuntime(ctx)
	defer r.Close(ctx)

	wasi_snapshot_preview1.MustInstantiate(ctx, r)

	doubleMod, doubleErr := r.Instantiate(ctx, goBytes)
	if doubleErr != nil {
		log.Panicf("failed to instantiate tinygo module: %v", doubleErr)
	}

	double := doubleMod.ExportedFunction("double")
	doubled, doubledErr := double.Call(ctx, val1)
	if doubledErr != nil {
		log.Panicf("failed to call double: %v", doubledErr)
	}

	return doubled[0]
}
