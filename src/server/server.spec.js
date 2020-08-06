import { addNewTask, updateTask } from "./server";

(async function myFunc() {
  await addNewTask({
    name: "MY task",
    id: "435543534",
  });

  await updateTask({
    id: "435543534",
    name: "MY TASK - UPDATED!!",
  });
})();
