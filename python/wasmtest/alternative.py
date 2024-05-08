# There's an alternative way to import wasm modules once you have the wasmtime loader imported.
# By placing the directory that contains the wasm module in the system path, you can just import it.
import wasmtime.loader
import sys

# Tell Python where to find our wasm modules
sys.path.append("../../wat/gcd/")
sys.path.append("../../c/smallest/")

import gcd
import smallest

# And now the functions contained in the gdc module are available
print("wat gcd(270, 109) =", gcd.gcd(270, 108))
print("Which is smaller, 12 or 19?", smallest.smallestOf(19, 12))


