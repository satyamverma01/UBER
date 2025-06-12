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

Send a JSON object with the following required fields:
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vechicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vechicleType": "car|motorcycle|auto"
  }
}
```

**Example:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.driver@example.com",
  "password": "password123",
  "vechicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vechicleType": "car"
  }
}
```

## Example Response

A successful registration returns a JSON object containing a token and captain information:

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

## Response Status Codes

- **201 Created**: Captain registered successfully.
- **400 Bad Request**: Missing or invalid input data.
  - Invalid email format
  - Name must be at least 3 characters long
  - Password must be at least 6 characters long
  - Color must be at least 3 characters long
  - Plate must be at least 3 characters long
  - Capacity must be at least 1
  - Invalid vehicle type
- **409 Conflict**: Email already exists.
- **500 Internal Server Error**: Server error during registration.

## Notes

- All fields are required.
- Vehicle type must be one of: 'car', 'motorcycle', 'auto'
- The request body must be in JSON format.
