// بيانات المهام (فارغة)
const tasks = {
    daily: [],
    personal: [],
    work: []
};

// دالة لعرض المهام
function showTask(type) {
    const taskContent = document.getElementById("task-content");
    taskContent.innerHTML = ""; // تفريغ المحتوى السابق

    // عرض قائمة المهام
    const list = document.createElement("ul");

    tasks[type].forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = task;

        // زر حذف المهمة
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "حذف";
        deleteButton.onclick = () => deleteTask(type, index);

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    });

    taskContent.appendChild(list);

    // زر إضافة مهمة
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "إضافة مهمة";
    addTaskButton.onclick = () => addTask(type);
    taskContent.appendChild(addTaskButton);
}

// دالة لإضافة مهمة
function addTask(type) {
    const taskContent = document.getElementById("task-content");

    // إنشاء حقل إدخال للمهمة الجديدة
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "أدخل المهمة الجديدة";
    input.id = "new-task-input";

    // زر حفظ المهمة الجديدة
    const saveButton = document.createElement("button");
    saveButton.textContent = "حفظ المهمة";
    saveButton.onclick = () => {
        const newTaskInput = document.getElementById("new-task-input");
        const newTask = newTaskInput.value.trim();

        if (newTask !== "") {
            tasks[type].push(newTask);
            showTask(type); // تحديث القائمة
        } else {
            alert("الرجاء إدخال مهمة صالحة.");
        }
    };

    taskContent.innerHTML = ""; // تفريغ المحتوى
    taskContent.appendChild(input);
    taskContent.appendChild(saveButton);
}

// دالة لحذف مهمة
function deleteTask(type, index) {
    tasks[type].splice(index, 1); // حذف المهمة من القائمة
    showTask(type); // تحديث العرض
}

// دالة للتنقل بين الأقسام
function navigateTo(sectionId) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? "block" : "none";
    });
}

// إظهار القسم الأول بشكل افتراضي
document.addEventListener("DOMContentLoaded", () => {
    navigateTo("tasks");
});
