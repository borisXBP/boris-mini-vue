import { computed } from "../computed";
import { reactive } from "../reactive";
import { vi } from "vitest";

describe("computed", () => {
  it("happy path", () => {
    // 与ref类似  .value
    // 但是它有一个强大的功能 缓存
    const user = reactive({ age: 1 });

    const age = computed(() => {
      return user.age;
    });

    expect(age.value).toBe(1);
  });

  it("should compute lazily", () => {
    const value = reactive({ foo: 1 });

    const getter = vi.fn(() => {
      return value.foo;
    });

    const cValue = computed(getter);

    // lazy
    expect(getter).not.toHaveBeenCalled();

    expect(cValue.value).toBe(1);

    expect(getter).toHaveBeenCalledTimes(1);

    // should not compute again
    cValue.value;
    expect(getter).toHaveBeenCalledTimes(1);

    // should not compute until needed
    value.foo = 2;
    expect(getter).toHaveBeenCalledTimes(1);

    // now it should compute
    expect(cValue.value).toBe(2);
    expect(getter).toHaveBeenCalledTimes(2);

    // should not compute again
    cValue.value;
    expect(getter).toHaveBeenCalledTimes(2);
  });
});
