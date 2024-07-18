# boris-mini-vue

vue3源码重写

实现最简 vue3 模型，用于深入学习 vue3， 更轻松的理解 vue3 的核心逻辑

实现 Vue3 中的核心三大模块

# reactivity 响应式

- [X] reactive， isReactive 实现
- [X] track 收集依赖
- [X] trigger 触发依赖
- [X] effect 实现
- [X] effect 的 scheduler, stop, onStop 实现
- [X] readonly， isReadonly 实现
- [X] shallowReadonly 实现
- [X] isProxy 实现
- [X] ref, isRef, unRef, proxyRefs实现
- [X] computed的实现

# runtime运行时

- [X] 支持组件类型
- [X] 支持element类型
- [X] 初始化props
- [X] setup可获取props和context
- [X] 支持component的emit
- [X] 支持proxy
- [X] 可以在render函数中获取setup返回的对象
- [X] 支持$el api
- [X] 支持 getCurrentInstance
- [X] 支持最基础的 slots
- [X] 支持 Text 类型节点 Fragment 类型
- [X] 支持 provide/inject
- [X] nextTick 的实现
- [X] 支持 watchEffect

# compiler-core

- [X] 解析插值
- [X] 解析 element
- [X] 解析 text

# infrastructure

support monorepo with pnpm

# build

  pnpm build

# 单元测试 vitest

# example

  通过serve的方式打开 packages/vue/example/* 下的 index.html 即可
