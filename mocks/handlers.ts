import { http, HttpResponse } from "msw";

type response = { amount: number } | { error: string };

const userIds = ["SDCS3243YGD"];

export const handlers = [
  http.post<undefined, { amount: number; userId: string }, response>(
    "https://api.example.com/deposit",
    async ({ request }) => {
      const deposit = await request.json();

      let responseBody: response = {
        amount: deposit.amount,
      };

      let status = 200;

      if (deposit.amount <= 0) {
        const error =
          deposit.amount === 0
            ? "You can't deposit zero amount"
            : "You can't deposit negative amount";

        responseBody = { error };
        status = 400;
      } else if (!userIds.includes(deposit.userId)) {
        responseBody = { error: "User doesn't exist" };
        status = 400;
      }

      return HttpResponse.json(responseBody, { status });
    }
  ),
];
