function add(num1: number, num2: number) {
  return num1 + num2;
}

it("init", () => {
  expect(add(1, 1)).toBe(2);
});
