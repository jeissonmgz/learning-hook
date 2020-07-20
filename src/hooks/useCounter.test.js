const { useCounter } = require("./useCounter");
const { renderHook, act } = require("@testing-library/react-hooks");

describe("useCounter", () => {
  test("should return default value", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(1);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });
  test("should return asign value", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });
  test("should increment", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(101);
  });
  test("should decrement", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(99);
  });
  test("should reset", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;
    act(() => {
      increment();
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
