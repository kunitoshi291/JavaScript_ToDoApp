const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];

// 追加ボタンを作成
const addTasks = (task)=> {
    // 入力したタスクを追加・表示
    const listItem = document.createElement('li');
    const showItem = document.appendChild(listItem);
    showItem.innerHTML = task;
    console.log(task);

    // タスクに削除ボタンを付与
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'DELETE';
    listItem.appendChild(deleteButton);

    // 削除ボタンをクリックし、イベントが発生
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
    });
};

// 削除ボタンにタスクを消す機能を付与
const deleteTasks = ()=> {
    const chosenTask = deleteButton.closet('li');
    taskList.removeChild(chosenTask);
};

// 追加ボタンをクリックし、イベントが発生
taskSubmit.addEventListener('click', evt =>{
    evt.preventDefault();
    const task = taskValue.value;
    addTasks(task);
    taskValue.value = '';
});










