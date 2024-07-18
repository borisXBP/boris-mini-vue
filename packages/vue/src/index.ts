// mini-vue的出口
export * from "@boris-mini-vue/runtime-dom";
import { baseCompiler } from "@boris-mini-vue/compiler-core";
import * as runtimeDom from "@boris-mini-vue/runtime-dom";
import { registerRuntimeCompiler } from "@boris-mini-vue/runtime-dom";

function compilerToFunction(template) {
  const { code } = baseCompiler(template);
  const render = new Function("Vue", code)(runtimeDom);
  return render;
}

registerRuntimeCompiler(compilerToFunction);
