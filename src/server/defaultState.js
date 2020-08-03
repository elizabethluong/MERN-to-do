export const defaultState = {
  users: [
    {
      id: "U1",
      name: "Liz",
    },
    {
      id: "U2",
      name: "Robert",
    },
  ],
  groups: [
    {
      name: "To Do",
      id: "G1",
      owner: "U1",
    },
    {
      name: "Doing",
      id: "G2",
      owner: "U1",
    },
    {
      name: "Done",
      id: "G3",
      owner: "U1",
    },
  ],
  tasks: [
    {
      name: "Refactor tests",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Meeting with x",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Make to-do list",
      id: "T3",
      group: "G2",
      owner: "U2",
      isComplete: false,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T2",
      content: "Great work!!",
    },
  ],
};
