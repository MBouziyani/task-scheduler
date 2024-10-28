Here’s a basic `README.md` for the project based on the code provided:

```markdown
# Task Scheduler

A simple task scheduler application built with JavaScript that assigns tasks to developers based on their skills, available hours, task preferences, task priority, and dependencies. This project demonstrates basic principles of object-oriented programming and algorithmic task allocation.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Logging](#logging)
- [Examples](#examples)
## Introduction

The Task Scheduler is a basic JavaScript application that dynamically assigns tasks to developers. It takes into account each developer's skill level, maximum working hours, task preferences, and the task dependencies and priorities to ensure tasks are allocated in an optimal order.

## Features

- Assigns tasks to developers based on:
  - Skill level
  - Maximum working hours
  - Preferred task types
  - Task priorities
  - Task dependencies
- Returns a summary of assigned and unassigned tasks.
- Implements basic logging for better tracking of information.

## Getting Started

### Prerequisites

- Node.js (v12 or above)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MBouziyani/task-scheduler
   ```

2. Navigate to the project directory:

   ```bash
   cd task-scheduler
   ```



## Usage

1. To run the task scheduler:

   ```bash
   node main.js
   or
   npm start
   ```

2. The results will be logged to the console, showing assigned tasks for each developer and any unassigned tasks.

## Project Structure

```
task-scheduler/
├── models/
│   ├── Developer.js       # Developer model
│   └── Task.js            # Task model
├── services/
│   └── taskAssigner.js    # Task assignment logic
├── utils/
│   └── logger.js          # Logging utility functions
├── main.js                # Main script to run the scheduler
├── package.json           # Project configuration
└── README.md              # Project documentation
```

### Logging

Logging is implemented using custom functions located in `utils/logger.js`. The functions are:

- `logInfo`: Logs informational messages.
- `logError`: Logs error messages.

You can customize the logging behavior by modifying the functions in `logger.js`.

## Examples

### Sample Data

```javascript
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
```

### Running the Task Scheduler

After running the script (`node main.js`), the output will display the task assignment summary, for example:

```
Assigned Tasks: {
  "developers": [
    {
      "name": "Alice",
      "assignedTasks": [
        { "taskName": "Feature A", ... },
        { "taskName": "Optimization D", ... }
      ],
      "totalAssignedHours": 35
    },
    ...
  ],
  "unassignedTasks": [
    { "taskName": "Refactor C", ... },
    { "taskName": "Upgrade E", ... }
  ]
}
```


```

### Notes
1. Update the `git clone` URL to your actual repository.
2. This `README.md` assumes a basic setup. You may expand it to include additional details or configuration as needed.

Let me know if you need further customization or any additional sections!
