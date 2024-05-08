(;
  -----------------------------------------------------------------------------
  While it's all fine to call wasm functions, it would be great if wasm could 
  call functions in the host environment.
  
  Turns out, with a bit of effort, it can!
;)
(module
  ;; --------------------------------------------------------------------------
  ;; First, our imports
  (import "funcs" "log" (func $log)) ;; Expect a function called `log` on the `funcs` module
  (import "funcs" "logNumber" (func $logNumber(param i32) (result))) ;; And one that takes a parameter

  ;; --------------------------------------------------------------------------
  ;; Now define our own functions that call the provided ones

  ;; Our function with no parameters and no return value.
  (func $justDoStuffAlreadySheesh (param) (result)
    call $log
  )

  ;; Our function with one parameter and no return value.
  ;; Gets called and in turn calls the runtime provided `logNumber` function
  (func $doLogNumberFunc (param $val1 i32)(result)
    local.get $val1
    call $logNumber
  )

  ;; --------------------------------------------------------------------------
  ;; Remember to export the functions
  (export "doLog" (func $justDoStuffAlreadySheesh))
  (export "doLogNumber" (func $doLogNumberFunc))
)
