export const defaultState = {
  users: [
    {
      id: "U1",
      name: "Liz",
      friends: [`U2`],
    },
    {
      id: "U2",
      name: "Robert",
      friends: [],
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
      name: "Book Car",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Buy Travel Insurance",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Check In",
      id: "T3",
      group: "G2",
      owner: "U2",
      isComplete: false,
    },
    {
      name: "Book Hotel",
      id: "T4",
      group: "G2",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Book Flights",
      id: "T5",
      group: "G3",
      owner: "U1",
      isComplete: false,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Book a 7 Seater",
    },
  ],
};
