import Developer from './models/Developer.js';
import Task from './models/Task.js';
import assignTasksWithPriorityAndDependencies from './services/taskAssigner.js';

const developers = [
  new Developer('Alice', 7, 40, 'feature'),
  new Developer('Bob', 9, 30, 'bug'),
  new Developer('Charlie', 5, 35, 'refactor'),
];

const tasks = [
  new Task({ taskName: 'Feature A', difficulty: 7, hoursRequired: 15, taskType: 'feature', priority: 4 }),
  new Task({ taskName: 'Bug Fix B', difficulty: 5, hoursRequired: 10, taskType: 'bug', priority: 5 }),
  new Task({ taskName: 'Refactor C', difficulty: 9, hoursRequired: 25, taskType: 'refactor', priority: 3, dependencies: ['Bug Fix B'] }),
  new Task({ taskName: 'Optimization D', difficulty: 6, hoursRequired: 20, taskType: 'feature', priority: 2 }),
  new Task({ taskName: 'Upgrade E', difficulty: 8, hoursRequired: 15, taskType: 'feature', priority: 5, dependencies: ['Feature A'] }),
];

const result = assignTasksWithPriorityAndDependencies(developers, tasks);
console.log('Assigned Tasks:', JSON.stringify(result, null, 2));
