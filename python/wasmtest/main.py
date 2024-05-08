from wasmtime import Store, Module, Instance

# Almost all operations in wasmtime require a contextual "store" argument to be shared amongst objects
store = Store()

# Load the Wasm modules
# We load a raw WAT file, a compiled C and a compiled Rust file.
wat_wasm_module = Module.from_file(store.engine, "../../wat/simplyadd/simplyadd.wat")
c_wasm_module = Module.from_file(store.engine, "../../c/simplemath/square.wasm")
rust_wasm_module = Module.from_file(store.engine, "../../rust/rustmath/target/wasm32-unknown-unknown/release/rustmath.wasm")

# Create instances of the modules
wat_instance = Instance(store, wat_wasm_module, [])
c_instance = Instance(store, c_wasm_module, [])
rust_instance = Instance(store, rust_wasm_module, [])

# Get references to the exported functions
wat_add_func = wat_instance.exports(store)["add"]
wat_also_add_func = wat_instance.exports(store)["alsoAdd"]
wat_functional_func = wat_instance.exports("store")["addFunctional"]
square_func = c_instance.exports(store)["square"]
add_func = rust_instance.exports(store)["add"]

# Call the functions and then print the results
wat_result = wat_add_func(store, 3, 120)
wat_also_result = wat_also_add_func(store, 3, 120)
wat_functional_result = wat_functional_func(store, 3, 120)
c_result = square_func(store, 25)
rust_result = add_func(store, 120, 3)

print("The square of 25:", c_result)
print("Adding 3 and 120:", wat_result)
print("Adding 3 and 120:", wat_also_result)
print("Adding 3 and 120:", wat_functional_result)
print("Adding 120 and 3:", rust_result)
