# Лабораторная работа №3

## Описание API User

### SignIn
#### Метод: 
POST
#### Описание: 
Эндпоинт для авторизации пользователя и получения JWT токена
#### Параметры:
- Query: -
- Params: -
- Body:
  - email: string (адрес электронной почты)
  - password: string (пароль)
#### Ответы:
1. Ok(200)
   - Body:
     - token: string (JWT токен)
2. Bad Request(400)
   - Body:
     - message: string (Текст ошибки)

### SignUp
#### Метод:
POST
#### Описание:
Эндпоинт для регистрации пользователя и получения JWT токена
#### Параметры:
- Query: -
- Params: -
- Body:
  - email: string (адрес электронной почты)
  - password: string (пароль)
  - fullName: string (ФИО)
#### Ответы:
1. Ok(200)
  - Body:
    - token: string (JWT токен)
2. Bad Request(400)
  - Body:
    - message: string (Текст ошибки)
3. Internal Server Error(500)

### CheckJWT
#### Метод:
GET
#### Описание:
Эндпоинт для генерации нового JWT-токена
#### Параметры:
- Headers:
    - Authorization: string (Bearer <<JWT Token>>)
- Query: -
- Params: -
- Body: -
#### Ответы:
1. Ok(200)
  - Body:
    - token: string (JWT токен)
2. Unauthorized (401)
  - Body:
    - message: string (Текст ошибки)

### UpdateUserInfo
#### Метод:
PUT
#### Описание:
Эндпоинт для обновления пользовательских данных
#### Параметры:
- Headers:
    - Authorization: string (Bearer <<JWT Token>>)
- Query: -
- Params: -
- Body: 
  - password: string (пароль)
  - fullName: string (ФИО)
#### Ответы:
1. Ok(200)
- Body:
    - token: string (JWT токен)
2. Bad Request(400)
- Body:
    - message: string (Текст ошибки)
3. Unauthorized (401)
- Body:
    - message: string (Текст ошибки)

### DeleteAccount
#### Метод:
DELETE
#### Описание:
Эндпоинт для удаления пользователя из системы
#### Параметры:
- Headers:
  - Authorization: string (Bearer <<JWT Token>>)
- Query: -
- Params: -
- Body: -
#### Ответы:
1. Ok(200)
2. Unauthorized (401)
- Body:
    - message: string (Текст ошибки)

## Описание API Project

### CreateProject
#### Метод:
POST
#### Описание:
Эндпоинт для создания нового проекта
#### Параметры:
- Headers:
    - Authorization: string (Bearer <<JWT Token>>)
- Query: -
- Params: -
- Body:
  - name: string (название проекта)
#### Ответы:
1. Ok(200)
- Body:
    - projectId: number (id проекта)
2. Unauthorized (401)
- Body:
    - message: string (Текст ошибки)

### GetProject
#### Метод:
GET
#### Описание:
Эндпоинт для получения данных проекта
#### Параметры:
- Headers:
    - Authorization: string (Bearer <<JWT Token>>)
- Query: -
- Params: -
- Body: -
#### Ответы:
1. Ok(200)
- Body:
    - id: number (Текст ошибки)
    - name: string (Название проекта)
    - ownerId: number (id пользователя)
2. Bad Request(400)
- Body:
    - message: string (Текст ошибки)
3. Unauthorized (401)
- Body:
    - message: string (Текст ошибки)
4. NotFound (404)
- Body:
    - message: string (Текст ошибки)


## Тестирование API User

