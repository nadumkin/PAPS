# Лабораторная работа №3

## Диаграмма компонентов
![Component diagram.png](..%2Fsrc%2FComponent%20diagram.png)
## Диаграмма последовательностей
![Sequence Diagram1.jpg](..%2Fsrc%2FSequence%20Diagram1.jpg)
## Модель БД
![TundraDB.jpg](..%2Fsrc%2FTundraDB.jpg)
## Применение основных принципов разработки
Пример кода сервера на JavaScript, который реализует простейшую логику создания пользователя и получения его данных

    const express = require('express');
    const bodyParser = require('body-parser');

    class UserController {
        constructor() {
            this.users = [];
        }
    
        addUser(user) {
            this.users.push(user);
        }
    
        getUsers() {
            return this.users;
        }
    }

    class App {
        constructor() {
            this.app = express();
            this.userController = new UserController();
        
            this.setupMiddleware();
            this.setupRoutes();
        }
    
        setupMiddleware() {
            this.app.use(bodyParser.json());
        }
    
        setupRoutes() {
            this.app.get('/users', this.getUsers.bind(this));
            this.app.post('/users', this.addUser.bind(this));
        }
    
        getUsers(req, res) {
            const users = this.userController.getUsers();
            res.json(users);
        }
    
        addUser(req, res) {
            const user = req.body;
            this.userController.addUser(user);
            res.status(201).send('User added successfully');
        }
    
        start(port) {
            this.app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        }
    }

    const app = new App();
    app.start(3000);

Принципы KISS, YAGNI, DRY и SOLID используются следующим образом:

- KISS: Код прост и легко понимаем. Нет избыточной сложности или излишней функциональности.
- YAGNI: Код предоставляет минимально необходимую функциональность для удовлетворения текущих требований.
- DRY: Код использует класс UserController для управления пользователями, избегая повторения кода.
- SOLID:
  - Single Responsibility Principle (Принцип единственной ответственности): Классы разделены на App и UserController, каждый из которых отвечает за свою область.
  - Open/Closed Principle (Принцип открытости/закрытости): Классы App и UserController могут быть расширены для добавления новой функциональности без изменения существующего кода.
  - Liskov substitution principle (Принцип подстановки Лисков): Принцип, которые гласит о том, что дочерние классы должны дополнять, а не замещать поведение родительского. В моем случае наследующие классы не предусмотрены.
  - Interface Segregation Principle (Принцип разделения интерфейса): В данном примере интерфейс класса UserController предоставляет только те методы, которые необходимы для управления пользователями.
  - Dependency Inversion Principle (Принцип инверсии зависимостей): Класс App зависит от абстракции UserController, а не от конкретной реализации.

## Дополнительные принципы разработки

### BDUF (Big Design Up Front):
BDUF представляет собой подход к разработке, при котором вся система полностью проектируется и документируется до начала фазы разработки. Это подразумевает создание подробного технического задания и плана работ еще на ранних этапах проекта.
- **Не использую**, потому что при использовании данного подхода теряется гибкость в разработке.

### SoC (Separation of Concerns):
Принцип, согласно которому сложные системы разделяются на отдельные модули (слои, компоненты), каждый из которых отвечает за определенный аспект функциональности. Это повышает читаемость, управляемость и повторное использование кода.
- **Использую**, потому что данный принцип позволит улучшить читаемость кода.
### MVP (Minimum Viable Product):
MVP представляет собой первоначальную версию продукта, содержащую минимальный набор функций, необходимых для удовлетворения базовых потребностей пользователей. Это помогает быстро запустить продукт на рынок и собрать обратную связь.
- **Использую**, потому что создание MVP позволит быстро выйти на рынок с базовым функционалом, а уже потом разрабатывать фичи.
### PoC (Proof of Concept):
PoC представляет собой короткий проект или прототип, разработанный для демонстрации технической или концептуальной осуществимости определенной идеи или метода. Это используется для проверки, насколько реальным и эффективным будет предлагаемый подход.
- **Использую**, потому что данный подход позволит протестировать гипотезы и принять решения о дальнейшей судьбе как проекта в целом, так и отдельных технических решений.