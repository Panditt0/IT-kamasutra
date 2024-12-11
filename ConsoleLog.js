let dialogsData = [
    { id: 1, name: 'Alex', },
    { id: 2, name: 'Olga', },
    { id: 3, name: 'Ivan', },
    { id: 4, name: 'Nikita', },
    { id: 5, name: 'Pavel', },
]

let messageData = [
    { id: 1, message: 'Привет, как дела?', },
    { id: 2, message: 'Уехал в отпуск', },
    { id: 2, message: 'Сейчас уже дома', },

]

let dialogsElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)


console.log(dialogsElements);
