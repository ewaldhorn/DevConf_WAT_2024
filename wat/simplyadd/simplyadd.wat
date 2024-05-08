(;
  -----------------------------------------------------------------------------
  WebAssembly module written in WAT (text) format.
  For more context, see https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format
;)
(module
  (func $add (param $p1 i32) (param $p2 i32) (result i32)
    local.get $p1 ;; Push parameter $p1 and $p2 onto the stack
    local.get $p2 
    i32.add ;; Pop two values off the stack and push their sum
    ;; The top of the stack is the return value - we don't need to say return
  )

(;
  -----------------------------------------------------------------------------
  WAT functions can be a bit more compact than the above.

  The below code is functionally the same as the above, just more compact and a bit harder to read.
;)
  (func $whatevs (param i32 i32) (result i32)
    local.get 1 ;; parameters are numbered from 0, but you can change the sequence if you like
    local.get 0
    i32.add
   )

(;
  -----------------------------------------------------------------------------
  WAT functions can also be written in a slighty more err, functional, way.

  Again, the same result, but the code looks a tad different.
;)
  (func $addFunctional (param $p1 i32) (param $p2 i32) (result i32)
    (i32.add (local.get $p1) (local.get $p2))
  )
(;
  -----------------------------------------------------------------------------
  Remember to do your exports, or the functions won't be available from outside.
;)

  (export "add" (func $add)) ;; export the 'add' function so it's world-visible
  (export "alsoAdd" (func $whatevs)) ;; export our compact function as 'alsoAdd', so we can test it
  (export "addFunctional" (func $addFunctional)) ;; export our functional function as well
)