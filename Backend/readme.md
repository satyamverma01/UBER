# `/users/register` Endpoint Documentation

## Description
Registers a new user in the system.

## Endpoint
```
POST /users/register
```

## Request Body

Send a JSON object with the following required fields:
- `name`: string (User's full name)
- `email`: string (User's email address)
- `password`: string (User's password)

**Example:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourPassword123"
}
```

## Example Response

A successful registration returns a JSON object containing a token and user information:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60f7c2b8e1d2c80015e4c123",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com"
    // ...other user fields
  }
}
```

## Response Status Codes

- **201 Created**: User registered successfully.
- **400 Bad Request**: Missing or invalid input data.
- **409 Conflict**: Email already exists.
- **500 Internal Server Error**: Server error during registration.

## Notes

- All fields are required.
- The request body must be in JSON format.
