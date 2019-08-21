<template>
  <div>
    <h1>Todos</h1>
    <div class="todos">
      <div class="todos">
        <div v-for="todo in allTodos" :key="todo.id" class="todo">{{ todo.title }}
            <i @click="deleteTodo(todo.id)" class="fas fa-trash"></i>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",

  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"])
  },

  computed: mapGetters(["allTodos"]),

  created() {
    this.fetchTodos();
  },

  data() {
    return {};
  }
};
</script>


<style scoped>
body {
  width: 100%
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 22px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  width: 324px;
}
i {
  position: absolute;
  bottom: 10px;
  right: 30px;
}
</style>
