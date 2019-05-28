<template>
	<div class="hello">
		<div id="todo-list-example" class="container">
			<div class="row">
				<div class="col-md-6 mx-auto">
					<h1 class="text-center">Table List</h1>
					<form v-on:submit.prevent="addNewTask">
						<label for="tasknameinput">Task Name:</label>
						<input type="text" id="tasknameinput" class="form-control" placeholder="Add new Task">
						<button
							v-if="this.isEdit === false"
							type="submit"
							class="btn btn-outline-success btn-block mt-3"
						>Submit</button>

						<button v-else type="submit" class="btn btn-outline-primary btn-block mt-3">Update</button>
					</form>

					<table class="table">
						<tr v-for="todo in todos" :key="todo.id" :title="todo.task_name">
							<td class="text-left">{{todo.task_name}}</td>
							<td class="text-right">
								<button class="btn btn-info" :click="editTask(todo.task_name, todo.id)">Edit</button>
								<button class="btn btn-info" :click="deleteTask(todo.id)">Delete</button>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            todos: [],
            id: '',
            taskname: '',
            isEdit: false
        }
    },
    mounted(){
        this.getTasks();
    },
    methods:{
        getTasks(){
            axios.get("/api/tasks").then( result=>{
                console.log(result.data)
                this.todos = result.data
            })
        }
    }
};
</script>

<style>
</style>
