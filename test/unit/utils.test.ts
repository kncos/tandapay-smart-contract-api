import { bigIntJsonReplacer } from "utils";

test("big int json replacer", () => {
  const example1 = {
    i: 100n,
    arr: [1n, 1n, 2n, 3n, 5n, 8n, 13n],
    arr2: ["a", "b", 1n],
    somestr: "hello, world",
  };

  const json = JSON.stringify(example1, bigIntJsonReplacer);
  expect(json).toBe(
    `{"i":"100n","arr":["1n","1n","2n","3n","5n","8n","13n"],"arr2":["a","b","1n"],"somestr":"hello, world"}`,
  );
});
