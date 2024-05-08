from wasmtime import Store, Module, Instance, Func, FuncType, ValType

store = Store()

# Load the Wasm module with the function that calls us when we call it
wat_wasm_module = Module.from_file(store.engine, "../../wat/callbacks/callback.wat")

# Define our callback function
def log():
    print("Log function called in host environment.")

# Define a callback function that takes a number
def logNumber(num):
    print("Logging:", num)

logCallback = Func(store, FuncType([], []), log)
logNumberCallback = Func(store, FuncType([ValType.i32()],[]), logNumber)

# Create instance of the module
wat_instance = Instance(store, wat_wasm_module, [logCallback, logNumberCallback])

# Get references to the functions
doLog = wat_instance.exports(store)["doLog"]
doLogNumber = wat_instance.exports(store)["doLogNumber"]

# Now call doLog which should in turn call our local log function
doLog(store)

# Call the doLogNumber function and pass it a value
doLogNumber(store, 42)

