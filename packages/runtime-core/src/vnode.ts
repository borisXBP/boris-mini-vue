import { ShapeFlags } from "@boris-mini-vue/shared";

export const Fragment = Symbol("Fragment");
export const Text = Symbol("Text");

export { createVNode as createElementVNode };

export function createVNode(type, props?, children?) {
  const vnode = {
    type,
    props,
    children,
    component: null,
    shapeFlags: getShapeFlags(type),
    key: props?.key,
    el: null,
  };

  // children
  if (typeof children === "string") {
    vnode.shapeFlags |= ShapeFlags.TEXT_CHILDREN;
  } else if (Array.isArray(children)) {
    vnode.shapeFlags |= ShapeFlags.ARRAY_CHILDREN;
  }

  // slot children  条件 首先是组件类型 + children 必须是object
  if (vnode.shapeFlags & ShapeFlags.STATEFUL_COMPONENT) {
    if (typeof children === "object") {
      vnode.shapeFlags |= ShapeFlags.SLOT_CHILDREN;
    }
  }

  return vnode;
}

function getShapeFlags(type) {
  return typeof type === "string"
    ? ShapeFlags.ELEMENT
    : ShapeFlags.STATEFUL_COMPONENT;
}

export function createTextVNode(text: string) {
  return createVNode(Text, {}, text);
}
