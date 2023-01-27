# API Design

# Methods

Accounts
* Post

In
{
  "email": "string",
  "password": "string",
  "username": "string"
}
Out
{
  "access_token": "string",
  "token_type": "Bearer",
  "account": {
    "id": 0,
    "email": "string",
    "username": "string"
  }
}


Reviews
* Get
* Post
* Delete

Get

In
{"id": int}
Out
 {
      "id": int,
      "subject": "str",
      "description": "str",
      "account_id": int,
      "game_id": int,
      "game_title": "str",
      "username": "str"
},

Post
In
 {
      "subject": "str",
      "description": "str",
      "account_id": int,
      "game_id": int,
      "game_title": "str",
      "username": "str"
},

Out
{
      "id": int,
      "subject": "str",
      "description": "str",
      "account_id": int,
      "game_id": int,
      "game_title": "str",
      "username": "str"
},

Delete

In
{"id": int}
Out
{bool:bool}
