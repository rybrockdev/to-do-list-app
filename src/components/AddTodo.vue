<template>
  <div class="addTodo">
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" class="input" placeholder="Add Todo........" />
        <input type="submit" value="submit" class="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(event) {
      event.preventDefault();
      this.addTodo(this.title)
    }
  },

  data() {
    return {
      title: ""
    };
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input {
  border: 1px solid #41b883;
  padding: 5px;
}
.submit {
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
  width: 150px;
  height: 46px;
}
</style>
