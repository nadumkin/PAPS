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
1. Ok(201)
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


## Тестирование API микросервиса User

### SignUp
#### POST
```http://localhost:3000/signUp```
#### Body
![signUp_Body.png](..%2Fsrc%2Fimg%2FsignUp_Body.png)
#### Headers
![signUp_Headers.png](..%2Fsrc%2Fimg%2FsignUp_Headers.png)
#### Params & Authorization
Отсутствуют
#### Автотесты
```
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
})

pm.test("Body is correct", function () {
    const responseData = pm.response.json()
    pm.expect(responseData).to.have.property("token")
})
```
![signUp_Test.png](..%2Fsrc%2Fimg%2FsignUp_Test.png)

### SignIn
#### POST
```http://localhost:3000/signIn```
#### Body
![signIn_Body.png](..%2Fsrc%2Fimg%2FsignIn_Body.png)
#### Headers
![signIn_Headers.png](..%2Fsrc%2Fimg%2FsignIn_Headers.png)
#### Params & Authorization
Отсутствуют
#### Автотесты
```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
})

pm.test("Body is correct", function () {
    const responseData = pm.response.json()
    pm.expect(responseData).to.have.property("token")
})
```
![signIn_Test.png](..%2Fsrc%2Fimg%2FsignIn_Test.png)

### CheckJWT
#### GET
```http://localhost:3000/auth```
#### Body
![GetJWT_Body.png](..%2Fsrc%2Fimg%2FGetJWT_Body.png)
#### Headers
![CheckJWT_Headers.png](..%2Fsrc%2Fimg%2FCheckJWT_Headers.png)
#### Params & Authorization
Отсутствуют
#### Автотесты
```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
})

pm.test("Body is correct", function () {
    const responseData = pm.response.json()
    pm.expect(responseData).to.have.property("token")
})
```
![CheckJWT_Test.png](..%2Fsrc%2Fimg%2FCheckJWT_Test.png)

### UpdateUserInfo
#### PUT
```http://localhost:3000/updateUserInfo```
#### Body
![ChangeData_Body.png](..%2Fsrc%2Fimg%2FChangeData_Body.png)
#### Headers
![ChangeData_Headers.png](..%2Fsrc%2Fimg%2FChangeData_Headers.png)
#### Params & Authorization
Отсутствуют
#### Автотесты
```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
})

pm.test("Body is correct", function () {
    const responseData = pm.response.json()
    pm.expect(responseData).to.have.property("token")
})
```
![ChangeData_Test.png](..%2Fsrc%2Fimg%2FChangeData_Test.png)

### DeleteAccount
#### DELETE
```http://localhost:3000/deleteAccount```
#### Body
![DeleteAccount_Body.png](..%2Fsrc%2Fimg%2FDeleteAccount_Body.png)
#### Headers
![DeleteAccount_Headers.png](..%2Fsrc%2Fimg%2FDeleteAccount_Headers.png)
#### Params & Authorization
Отсутствуют
#### Автотесты
```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
})

pm.test("Body is correct", function () {
    const responseData = pm.response.json()
    pm.expect(responseData).to.have.property("message")
})
```
![DeleteAccount_Test.png](..%2Fsrc%2Fimg%2FDeleteAccount_Test.png)

### GetUser
#### GET
```http://localhost:3000/getUser/:userId```
#### Body
![getUser_Body.png](..%2Fsrc%2Fimg%2FgetUser_Body.png)
#### Headers
![getUser_Headers.png](..%2Fsrc%2Fimg%2FgetUser_Headers.png)
#### Params & Authorization
![getUser_Params.png](..%2Fsrc%2Fimg%2FgetUser_Params.png)
#### Автотесты
```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
})

pm.test("Body is correct", function () {
    const responseData = pm.response.json()
    pm.expect(responseData).to.have.property("id")
    pm.expect(responseData).to.have.property("fullName")
    pm.expect(responseData).to.have.property("email")
})
```
![getUser_Test.png](..%2Fsrc%2Fimg%2FgetUser_Test.png)