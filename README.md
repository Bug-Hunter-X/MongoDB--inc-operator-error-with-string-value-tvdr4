# MongoDB $inc operator error
This example demonstrates an incorrect usage of the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numeric field by a specified value.  However, in this case, a string value is passed, leading to an error.  The solution shows the correct usage with a numeric value.

## Bug
The original code attempts to increment the `counter` field with a string value ('1'). This will result in an error because `$inc` expects a number.

## Solution
The corrected code uses a number (1) instead of a string ('1') to increment the `counter` field, resolving the issue.