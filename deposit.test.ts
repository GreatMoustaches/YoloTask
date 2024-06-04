/**
 * @vitest-environment node
 */

it("deposits valid amount", async () => {
  const data = { amount: 2, userId: "SDCS3243YGD" };

  const response = await fetch("https://api.example.com/deposit", {
    method: "POST",
    body: JSON.stringify(data),
  });

  expect(response.status).toBe(200);
  expect(await response.json()).toEqual({
    amount: 2,
  });
});

it("reject deposit with negative amount", async () => {
  const data = { amount: -2, userId: "SDCS3243YGD" };

  const response = await fetch("https://api.example.com/deposit", {
    method: "POST",
    body: JSON.stringify(data),
  });

  expect(response.status).toBe(400);
  expect(await response.json()).toEqual({
    error: "You can't deposit negative amount",
  });
});

it("reject deposit with zero amount", async () => {
  const data = { amount: 0, userId: "SDCS3243YGD" };

  const response = await fetch("https://api.example.com/deposit", {
    method: "POST",
    body: JSON.stringify(data),
  });

  expect(response.status).toBe(400);
  expect(await response.json()).toEqual({
    error: "You can't deposit zero amount",
  });
});

it("User doesn't exist", async () => {
  const data = { amount: 999, userId: "NonExistingId" };

  const response = await fetch("https://api.example.com/deposit", {
    method: "POST",
    body: JSON.stringify(data),
  });

  expect(response.status).toBe(400);
  expect(await response.json()).toEqual({
    error: "User doesn't exist",
  });
});
