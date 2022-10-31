test("test toBE", () => {
    const name = "Eko";
    const hello = `hello ${name}`;

    expect(hello).toBe('hello Eko');
});

test("test Equal", () => {
    let person = { id: "eko" };
    Object.assign(person, { name: "Eko" });

    expect(person).toEqual({ id: "eko", name: "Eko" });
});