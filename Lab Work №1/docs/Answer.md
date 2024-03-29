# Лабораторная работа 1
## Перечень заинтересованных лиц
| Наименование группы лиц                        | Тип        | Описание                                                                                                                                                                                                                                           |
|------------------------------------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Разработчики приложения                        | внутренний | Разработчики самого ПО.                                                                                                                                                                                                                            |
| Разработчики (пользователи)                    | внешний    | Пользователи, занимаются разработкой и использую ПО для получения рабочих задач. Заинтересованы в беспроблемной и слаженной работе. Нуждаются в своевременном информировании о задчах. Хотят, чтобы все необходимое для работы было в одном месте. |
| Руководитель команды разработки (пользователь) | внешний    | Заинтересован в эффективной работе подчиненных и в отсутсвии путанницы в рабочих элементах. Хочет видеть наглядно, на каком этапе находятся задачи.                                                                                                |

## Перечень сделанных предположений

1. Для эффективной работы коллектива необходимо предоставить возможность управлять проектами на основе методологий Agile с инструментами Kanban, Scrum и Scrumban.
2. Чтобы обеспечить прозрачность процессов в разработке, необходимо предоставить пользователям возможность создавать несколько Kanban-досок в рамках одного Kanban-проекта.

## Перечень функциональных требований

1. Предоставлять пользователю возможность регистрации и авторизации с помощью электронной почты, на которую высылается код доступа, или аккаунта мессенджера Telegram;
2. Требовать у пользователя согласие на обработку персональных данных;
3. Предоставлять возможность изменить в личном кабинете персональные данные, такие как: имя, фамилия, отчество, дата рождения, электронный адрес, пароль;
4. Предоставлять неавторизированному пользователю возможность просмотра ограниченного числа функций в приложении, таких как: просмотр главной страницы веб-приложения, авторизация, регистрация;
5. Предоставлять пользователю информацию о веб-приложении на главной странице;
6. Предоставлять авторизованному пользователю возможность создавать проекты;
7. Предоставлять авторизованному пользователю возможность редактировать параметры собственных проектов;
8. Предоставлять авторизованному пользователю возможность удалять собственные проекты;
9. Предоставлять авторизованному пользователю возможность выбирать тип создаваемого проекта;
10. Предоставлять авторизованному пользователю возможность просматривать оценку состояния проекта;
11. Предоставлять авторизованному пользователю возможность просматривать прогресс проекта в процентном эквиваленте;
12. Предоставлять авторизованному пользователю возможность создавать задачи в выбранном проекте;
13. Предоставлять авторизованному пользователю возможность просматривать собственные задачи в календаре;
14. Предоставлять авторизованному пользователю возможность редактировать задачи в выбранном проекте;
15. Предоставлять авторизованному пользователю возможность прикреплять к задаче файлы;
16. Предоставлять авторизованному пользователю возможность добавлять комментарии к задаче;
17. Предоставлять авторизованному пользователю возможность менять статус задачи в выбранном проекте;
18. Предоставлять авторизованному пользователю возможность поиска по проектам, тегам и ключевым словам;
19. Предоставлять авторизованному пользователю возможность просматривать изменения проектов и задач в режиме реального времени;
20. Предоставлять авторизованному пользователю возможность получать уведомления;
21. Предоставлять авторизованному пользователю возможность использовать Kanban-доску;
22. Предоставлять авторизованному пользователю возможность управлять бэклогом;
23. Предоставлять авторизованному пользователю возможность начинать выполнение задачи;
24. Предоставлять авторизованному пользователю возможность заканчивать выполнение задачи;
25. Предоставлять авторизованному пользователю возможность просматривать общее время выполнения задачи;
26. Предоставлять авторизованному пользователю возможность делегировать задачу;
27. Предоставлять авторизованному пользователю возможность просматривать диаграмму Ганта проекта;
28. Предоставлять авторизованному пользователю возможность просматривать дашборд проекта;
29. Предоставлять авторизованному пользователю возможность составлять личное расписание из его задач;
30. Предоставлять авторизованному пользователю возможность прикреплять к проекту чат из мессенджера Telegram;
31. Предоставлять авторизованному пользователю возможность просматривать прогнозы относительно выполнения задач проекта;
32. Предоставлять авторизованному пользователю возможность создавать несколько Kanban-досок в один проект;
33. Предоставлять авторизованному пользователю возможность связывать git-ветки и коммиты с задачами проекта;

## USE CASE DIAGRAM

![UseCase.png](..%2Fsrc%2FUseCase.png)