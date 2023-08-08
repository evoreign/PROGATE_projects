
# to-do app

A simple todo app, data stored in strapi description of each todo accomodate rich text.


## API Reference

#### Get all todos

```http
  GET /api/todos
```

#### Get spesific todos

```http
  POST /api/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int` | **Required**. Id of todos to fetch |

#### Update the data

```http
  PUT /api/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int` | **Required**. Id of todos to fetch |

#### Delete todos

```http
  DELETE /api/todos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int` | **Required**. Id of todos to fetch |

#### New todos

```http
  POST /api/todos
```
{
  "data": {
    "todo_title": "Test POST data",
    "todo_desc": "Test POST data",
    "todo_status": false,
    "todo_deadline": "2023-08-31T"
  }
}

## Run Locally

Clone the project

```bash
  git clone https://github.com/evoreign/PROGATE_projects
```

Go to the project directory

```bash
  cd todo-app
  cd client
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server (backend is in server)

```bash
  yarn develop
```

Start the webapp (frontend is in client)

```bash
  npm run dev
```

