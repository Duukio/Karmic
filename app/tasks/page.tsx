async function TaskPage() {

const response = await fetch("http://localhost:300/api/tasks", {
    cache:"no-store"
})
const tasks = await response.json();

console.log(tasks)
return (
    <div>page</div>
  )
}

export default TaskPage