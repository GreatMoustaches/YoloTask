# Test assignment

## Functional Test Cases

### create_user endpoint:

1. Verify that a user can be created with valid details.
2. Verify that creating a user with an existing username returns an appropriate error.
3. Verify that creating a user with invalid input (e.g., missing required fields) returns an appropriate error.

### deposit endpoint:

1. Verify that a user can deposit a valid amount to their account.
2. Verify that depositing a negative amount returns an appropriate error.
3. Verify that depositing zero amount returns an appropriate error.
4. Verify that depositing to a non-existent user returns an appropriate error.

### withdraw endpoint:

1. Verify that a user can withdraw a valid amount from their account.
2. Verify that withdrawing an amount greater than the balance returns an appropriate error.
3. Verify that withdrawing from a non-existent user returns an appropriate error.

### get_balance endpoint:

1. Verify that a user can retrieve their current balance.
2. Verify that retrieving the balance of a non-existent user returns an appropriate error.

### send endpoint:

1. Verify that a user can send a valid amount to another user.
2. Verify that sending an amount greater than the balance (including service fees) returns an appropriate error.
3. Verify that sending to a non-existent user returns an appropriate error.

## Non-Functional Test Cases

1. Measure the response time for creating a user.
2. Measure the response time for depositing an amount.
3. Measure the response time for withdrawing an amount.
4. Measure the response time for retrieving balance.
5. Measure the response time for sending an amount.
6. Test the system's behavior when 1000 users are created concurrently.
7. Test the system's behavior when 1000 deposits are made concurrently.
8. Test the system's behavior when 1000 withdrawals are made concurrently.

## Automation

### How to execute tests

1. Run `npm i && npm test`
2. Check the results in terminal
