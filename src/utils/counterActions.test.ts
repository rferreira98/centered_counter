import { beforeEach, describe, expect, test } from "vitest";
import { update_count, update_count_and_reset_counter } from "./counterActions";
import { factory } from "../factory";

let count: Function;

function getHTML() {
  const a = document.createElement("input");
  a.value = "0";
  const b = document.createElement("input");
  b.value = "1";
  const c = document.createElement("span");
  return { a, b, c };
}

describe("core functionality", () => {
  beforeEach(() => {
    count = factory(0, 1);
  });

  test("update count and reset counter default", () => {
    const { a, b, c } = getHTML();
    update_count_and_reset_counter(a, b, c);

    expect(c.textContent?.trim()).toBe("0");
  });

  test("update count and reset counter with value", () => {
    const { a, b, c } = getHTML();
    c.textContent = "5";

    update_count_and_reset_counter(a, b, c);

    expect(c.textContent?.trim()).toBe("0");
  });

  test("update count once", () => {
    const c = document.createElement("span");

    update_count(count, c);
    expect(c.textContent?.trim()).toBe("1");
  });

  test("update count more than 1 time", () => {
    const c = document.createElement("span");

    update_count(count, c);
    expect(c.textContent?.trim()).toBe("1");

    update_count(count, c);
    expect(c.textContent?.trim()).toBe("2");

    update_count(count, c);
    expect(c.textContent?.trim()).toBe("3");
  });
});
