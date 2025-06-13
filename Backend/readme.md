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

---

# `/users/login` Endpoint Documentation

## Description
Authenticates a user and returns a token if credentials are valid.

## Endpoint
```
POST /users/login
```

## Request Body

Send a JSON object with the following required fields:
- `email`: string (User's email address)
- `password`: string (User's password)

**Example:**
```json
{
  "email": "john@example.com",
  "password": "yourPassword123"
}
```

## Example Response

A successful login returns a JSON object containing a token and user information:

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

- **200 OK**: Login successful.
- **400 Bad Request**: Missing or invalid input data.
- **401 Unauthorized**: Invalid email or password.
- **500 Internal Server Error**: Server error during login.

## Notes

- All fields are required.
- The request body must be in JSON format.

---

# `/users/profile` Endpoint Documentation

## Description
Retrieves the profile information of the authenticated user.

## Endpoint
```
GET /users/profile
```

## Headers Required
```
Authorization: Bearer <token>
```

## Example Response

```json
{
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

- **200 OK**: Profile retrieved successfully.
- **401 Unauthorized**: No token provided or invalid token.
- **404 Not Found**: User not found.
- **500 Internal Server Error**: Server error while fetching profile.

---

# `/users/logout` Endpoint Documentation

## Description
Logs out the current user by invalidating their token.

## Endpoint
```
POST /users/logout
```

## Headers Required
```
Authorization: Bearer <token>
```

## Example Response

```json
{
  "message": "Logged out successfully"
}
```

## Response Status Codes

- **200 OK**: User logged out successfully.
- **401 Unauthorized**: No token provided or invalid token.
- **500 Internal Server Error**: Server error during logout.

## Notes

- The token must be included in the Authorization header.
- After logout, the token will be invalidated and can't be used for further requests.

---

# Captain Endpoints Documentation

# `/captain/register` Endpoint Documentation

## Description
Registers a new captain (driver) in the system.

## Endpoint
```
POST /captain/register
```

## Request Body
```json
{
  "fullname": {
    "firstname": "string (min 3 characters)",
    "lastname": "string"
  },
  "email": "string (valid email format)",
  "password": "string (min 6 characters)",
  "vechicle": {
    "color": "string (min 3 characters)",
    "plate": "string (min 3 characters)",
    "capacity": "number (min 1)",
    "vechicleType": "string (car|motorcycle|auto)"
  }
}
```

## Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60f7c2b8e1d2c80015e4c123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.driver@example.com",
    "vechicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vechicleType": "car"
    }
  }
}
```

## Status Codes
- **201**: Successfully registered
- **400**: Validation error
- **409**: Email already exists

---

# `/captain/login` Endpoint Documentation

## Description
Authenticates a captain and returns an access token.

## Endpoint
```
POST /captain/login
```

## Request Body
```json
{
  "email": "string (valid email format)",
  "password": "string (min 6 characters)"
}
```

## Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60f7c2b8e1d2c80015e4c123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.driver@example.com",
    "vechicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vechicleType": "car"
    }
  }
}
```

## Status Codes
- **200**: Successfully logged in
- **401**: Invalid credentials
- **400**: Validation error

---

# `/captain/profile` Endpoint Documentation

## Description
Get the authenticated captain's profile information.

## Endpoint
```
GET /captain/profile
```

## Headers Required
```
Authorization: Bearer <token>
```

## Example Response
```json
{
  "captain": {
    "_id": "60f7c2b8e1d2c80015e4c123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.driver@example.com",
    "vechicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vechicleType": "car"
    }
  }
}
```

## Status Codes
- **200**: Success
- **401**: Unauthorized

---

# `/captain/logout` Endpoint Documentation

## Description
Logs out the captain and invalidates the token.

## Endpoint
```
GET /captain/logout
```

## Headers Required
```
Authorization: Bearer <token>
```

## Example Response
```json
{
  "message": "Logged out successfully"
}
```

## Status Codes
- **200**: Successfully logged out
- **401**: Unauthorized

## Notes
- Token will be blacklisted after logout
- Cookie will be cleared if present
