const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("./useForm");

describe("useForm", () => {
  const initialForm = { name: "Jeisson", email: "jeissonmgz@gmail.com" };
  test("should return form default", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("should change value in form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Jase",
        },
      });
    });
    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: "Jase" });
  });

  test("should reset form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Jase",
        },
      });
      reset();
    });
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
