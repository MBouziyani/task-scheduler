const assignTasksWithPriorityAndDependencies = (developers, tasks) => {
    const completedTasks = new Set();
    const unassignedTasks = [];
  
    const sortedTasks = [...tasks].sort((a, b) => b.priority - a.priority);
  
    sortedTasks.forEach((task) => {
      const allDependenciesMet = task.dependencies.every(dep => completedTasks.has(dep));
  
      if (!allDependenciesMet) {
        unassignedTasks.push(task);
        return;
      }
  
      const developer = developers.find(dev => dev.canTakeTask(task));
  
      if (developer) {
        developer.assignTask(task);
        completedTasks.add(task.taskName);
      } else {
        unassignedTasks.push(task);
      }
    });
  
    return {
      developers: developers.map(dev => dev.summary),
      unassignedTasks,
    };
  };
  
  export default assignTasksWithPriorityAndDependencies;
  