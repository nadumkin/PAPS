# Лабораторная работа №6

## Порождающие шаблоны

### Фабричный метод (Factory Method):
Описание: Определяет интерфейс для создания объекта, но оставляет подклассам решение о том, какой класс инстанциировать.

![Снимок экрана 2024-03-21 в 12.52.56.png](..%2Fsrc%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-03-21%20%D0%B2%2012.52.56.png)
Пример на TypeScript:

```typescript
class ProjectCreator {
    createProject(type: string, name: string, creatorId: string): Project{
        switch(type){
            case 'Kanban': return new KanbanProject(name, creatorId);
            case 'Scrum': return new ScrumProject(name, creatorId);
            default: throw new Error('Типа проекта не существует');
        }
    }
}

abstract class Project {
    abstract getData(): void;
    abstract name: string;
    abstract creatorId: string;
}

class KanbanProject extends Project {
    name;
    creatorId;
    boardId: string = ''; //

    constructor(name: string, creatorId: string) {
        super();
        this.name = name;
        this.creatorId = creatorId;
    }

    getData(): Record<string, any> {
        return {
            name: this.name,
            creatorId: this.creatorId,
            boardId: this.boardId,
        }
    }
}

class ScrumProject extends Project {
    name;
    creatorId;
    backlogId: string = ''; //

    constructor(name: string, creatorId: string) {
        super();
        this.name = name;
        this.creatorId = creatorId;
    }

    getData(): Record<string, any> {
        return {
            name: this.name,
            creatorId: this.creatorId,
            backlogId: this.backlogId,
        }
    }
}
```

### Прототип (Prototype):
Прототип — позволяет создавать новые объекты путем клонирования уже существующих. По сути данный паттерн предлагает технику клонирования объектов.

![Снимок экрана 2024-03-21 в 13.04.03.png](..%2Fsrc%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-03-21%20%D0%B2%2013.04.03.png)
```typescript
interface ITask {
    clone() : ITask;
}

class Task implements ITask {

    name: string = '';
    description: string = '';

    constructor(name: string, description: string) {
        this.description = description;
        this.name = name;
    }

    clone() : Task{
        return new Task(this.name, this.description);
    }

}
```

### Синглтон (Singleton):
Синглтон гарантирует, что у класса есть только один экземпляр, и предоставляет глобальную точку доступа к нему

![Снимок экрана 2024-03-21 в 15.25.27.png](..%2Fsrc%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-03-21%20%D0%B2%2015.25.27.png)
```typescript
class SocketService {
    private static instance: SocketService;

    socket: any;

    private constructor() {
        //Socket init//
    }

    static getSocket(): SocketService {
        if (!SocketService.instance) {
            SocketService.instance = new SocketService();
        }
        return SocketService.instance;
    }

    sendNotification() {
        //Notifivation code//
    }
}
```

## Структурные шаблоны

### Компоновщик (Composite):
Компонует объекты в древовидные структуры для представления иерархий «часть — целое». Позволяет клиентам единообразно трактовать индивидуальные и составные объекты.

![Снимок экрана 2024-03-21 в 15.28.33.png](..%2Fsrc%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-03-21%20%D0%B2%2015.28.33.png)

```typescript
interface IFolder {
    children: IFolder[];
}

class Folder implements IFolder {

    children: IFolder[] = [];

    constructor() {
    }

    addNewFolder(newFolder: IFolder) {
        this.children.push(newFolder);
    }
}
```

### Адаптер (Adapter):
Преобразует интерфейс одного класса в интерфейс другого, который ожидают клиенты. Адаптер делает возможной совместную работу классов с несовместимыми интерфейсами.

![Снимок экрана 2024-03-21 в 15.34.10.png](..%2Fsrc%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-03-21%20%D0%B2%2015.34.10.png)

```typescript
abstract class IQueryInterpretator{
    abstract objectToQuery(query: Object): void;
}

class DBConnector{

    sendDBQuery(query: string){
        console.log('Query succeeded')
    }

}

class QueryInterpretator extends IQueryInterpretator{

    dbConnector: DBConnector;

    constructor(connector: DBConnector){
        super();
        this.dbConnector = connector;
    }

    setDBConnector(connector: DBConnector){
        this.dbConnector = connector;
    }

    objectToQuery(query: Object) {
        let outputQuery = '';
        for(let data of Object.values(query)) outputQuery += data;
        this.dbConnector.sendDBQuery(outputQuery);
    }
}
```

### Фасад (Facade):
Предоставляет унифицированный интерфейс вместо набора интерфейсов некоторой подсистемы. Фасад определяет интерфейс более высокого уровня, который упрощает использование подсистемы.

![Снимок экрана 2024-03-21 в 15.39.41.png](..%2Fsrc%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-03-21%20%D0%B2%2015.39.41.png)

```typescript
class KanbanProject {

    createProject() {
        //DB QUery//
    }
}

class KanbanBoard {

    createBoard() {

    }
}

class KanbanController{
    project: KanbanProject;
    board: KanbanBoard;

    constructor(project: KanbanProject, board: KanbanBoard){
        this.board = board;
        this.project = project;
    }

    createKanban() {
        this.project.createProject();
        this.board.createBoard();
    }
}
```

### Прокси (Proxy):
Является суррогатом другого объекта и контролирует доступ к нему.

![Снимок экрана 2024-03-21 в 15.46.31.png](..%2Fsrc%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202024-03-21%20%D0%B2%2015.46.31.png)

```typescript
abstract class IUserService{
    abstract auth(jwt: string): void;
}

class UserMiddleware implements IUserService{
    userService: IUserService;

    constructor() {
        this.userService = new UserService();
    }

    auth(jwt: string){
        if(jwt) this.userService.auth(jwt);
    }
}

class UserService implements IUserService{
    auth(jwt: string) {
        
    }
}
```

## Поведенческие шаблоны

### Интерпретатор
Интерпретирует изсходные данные в новом виде.

```typescript
class DateRange{
    from: number;
    to: number;
    current: number | undefined;

    constructor(from: number, to: number){
        this.from = from;
        this.to = to;
    }

    toArray(): number[] {
        const output: number[] = [];
        for(const day of this) output.push(day);
        return output;
    }

    [Symbol.iterator](){
        return this;
    }

    next() {
    //...//
  }
}
```

### Итератор
Представляет доступ ко всем элементам составного объекта, не раскрывая его внутреннего представления
Паттерн Итератор используется, когда нужно предоставить доступ ко всем элементам составного объекта, не раскрывая его внутреннего представления. Обычно такое происходит в следующих случаях:
1. Когда необходимо осуществить обход объекта без раскрытия его внутренней структуры.
2. Когда имеется набор составных объектов, и надо обеспечить единый интерфейс для их перебора.
3. Когда необходимо предоставить несколько альтернативных вариантов перебора одного и того же объекта.

```typescript
class DateRange{
    from: number;
    to: number;
    current: number | undefined;

    constructor(from: number, to: number){
        this.from = from;
        this.to = to;
    }

    [Symbol.iterator](){
        return this;
    }

    next() {
    if (this.current === undefined) {
      this.current = this.from;
    }

    if (this.current <= this.to) {
      return {
        done: false,
        value: this.current++
      };
    } else {
      delete this.current;
      return {
        done: true
      };
    }
  }
}
```

### Наблюдатель
Определяет зависимость "один ко многим" между объектами таким образом, что при изменении состояния одного объекта все зависящие от него объекты уведомляются и обновляются автоматически.

```typescript
interface Observer{
    update(): any;
}

class User{
    observers: Observer[] = [];

    observe(observer: Observer){
        this.observers.push(observer);
    }

    private notify() {
        this.observers.forEach(observer => observer.update());
    }
}
```

### Стратегия
Определяет семейство алгоритмов, инкапсулирует каждый из них и делает их взаимозаменяемыми. Позволяет изменять алгоритмы независимо от клиентов, которые их используют.

```typescript
abstract class Project{
    abstract create(): void;
}

class KanbanProject extends Project{
    create() {
        //db query
    }
}

class ScrumProject extends Project{
    create() {
        //db query
    }
}

class ProjectController{
    project: Project;

    constructor(project: Project){
        this.project = project;
    }

    create() {
        this.project.create();
    }

}

const controller1 = new ProjectController(new KanbanProject());
const controller2 = new ProjectController(new ScrumProject());
controller1.create();
controller2.create();
```

### Хранитель
Позволяет выносить внутреннее состояние объекта за его пределы для последующего возможного восстановления объекта без нарушения принципа инкапсуляции.

```typescript
class HistoryPoint{
    state: string;
    constructor(state: string){
        this.state = state;
    }
}

class Project{
    name: string;
    constructor(name: string){
        this.name = name;
    }

    backup(){
        return new HistoryPoint(this.name);
    }
}

class ProjectBackUp{
    project: Project;
    #backups: HistoryPoint[] = [];

    constructor(project: Project){
        this.project = project;
    }

    createBackup() {
        this.#backups.push(this.project.backup());
    }
}
```