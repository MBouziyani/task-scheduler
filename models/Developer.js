class Developer {
    #assignedTasks = [];
    #totalAssignedHours = 0;
  
    constructor(name, skillLevel, maxHours, preferredTaskType = null) {
      this.name = name;
      this.skillLevel = skillLevel;
      this.maxHours = maxHours;
      this.preferredTaskType = preferredTaskType;
    }
  
    canTakeTask = ({ difficulty, hoursRequired, taskType }) =>
      this.skillLevel >= difficulty &&
      this.#totalAssignedHours + hoursRequired <= this.maxHours &&
      (this.preferredTaskType === taskType || !this.preferredTaskType);
  
    assignTask = (task) => {
      this.#assignedTasks.push(task);
      this.#totalAssignedHours += task.hoursRequired;
    };
  
    get summary() {
      return {
        name: this.name,
        assignedTasks: this.#assignedTasks,
        totalAssignedHours: this.#totalAssignedHours,
      };
    }
}
  
  export default Developer;
