import Assignment from "./Assignment";

export const assignments: Assignment[] = [];
let nextId: number = 1;
export function addAssignment(assignment: Assignment):void {
  assignment.id = nextId++;
  assignments.push(assignment);
}

  { assignment: "Walrus Worksheet", score: 9, total: 10,completed: true}
  },
  {
    id: 2,
    assignment: "Jellyfish Project",
    score: 15,
    total: 15, 
    completed: true
  },
  {
    id: 3,
    assignment: "Dolphin Quiz",
    score: 8,
    total: 10, 
    completed: true
  },
  {
    id: 4,
    assignment: "Oceans Unit Test",
    score: 0,
    total: 25, 
    completed: false
  }
]

