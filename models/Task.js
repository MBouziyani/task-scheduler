class Task {
    constructor({
      taskName,
      difficulty = 1,
      hoursRequired = 1,
      taskType = 'general',
      priority = 1,
      dependencies = [],
    } = {}) {
      this.taskName = taskName;
      this.difficulty = difficulty;
      this.hoursRequired = hoursRequired;
      this.taskType = taskType;
      this.priority = priority;
      this.dependencies = dependencies;
    }
  }
  
  export default Task;
