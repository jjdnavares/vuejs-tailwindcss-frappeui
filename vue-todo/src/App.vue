<template>
  <button @click="toggleForm">Toggle Form</button>

  <p>
    {{ displayForm ? "Form is visible" : "Form is hidden" }}
  </p>

  <div v-show="displayForm">
    <form @submit.prevent="createTodo">
      <label for="todo-description">Description</label>
      <input type="text" id="todo-description" v-model="data.todoDescription" />

      <input type="submit" value="Create">
    </form>

    <!-- <pre>{{ data.todoDescription }}</pre> -->

    <ol>
      <li v-for="(todo, index) in data.todos">
        <del v-if="todo.isCompleted">{{ todo.description }}</del>
        <span v-else>{{ todo.description }}</span>

        <button @click="deleteTodo(index)">🗑️ Delete</button>
        <button v-if="!todo.isCompleted" @click="markAsComplete(index)">✅ Complete</button>
      </li>
    </ol>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue';

  // const showTodoForm = ref(false);
  const displayForm = ref(false);

  const data = reactive({
    todos: [],
    todoDescription: "",
  });

  function createTodo() {
    data.todos.push({
      description: data.todoDescription,
      isCompleted: false
    });
    data.todoDescription = "";                                      ww
  }

  function deleteTodo(index) {
    data.todos.splice(index, 1);
  }

  function markAsComplete(index) {
    data.todos[index].isCompleted = true;
  }

  function toggleForm() {
    displayForm.value = !displayForm.value;
  }
</script>