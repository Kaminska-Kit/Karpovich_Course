
export class Team {
    constructor(name, sprintDuration, releaseDate, dailyStandupTime) {
        this.name = name;
        this.sprint_duration = sprintDuration;
        this.release_date = releaseDate;
        this.daily_standup_time = dailyStandupTime;
        this.teammates = [];
        this.tasks = [];
      };
    
      get teamName() {
        return `The name of our team is ${this.name}`;
      };
    
      set teamName(newTeamName) {
        this.name = newTeamName;
      };
    
      get sprintDuration() {
        return `The sprint duration is ${this.sprint_duration} weeks`;
      };
    
      set sprintDuration(numberOfWeeks) {
        this.sprint_duration = numberOfWeeks;
      };
    
      get plannedReleaseDate() {
        return `The planned release date is ${this.release_date}`;
      };
    
      get dailyStandupTime() {
        return `Daily meetings usually start at ${this.daily_standup_time}`;
      };
    
      set dailyStandupTime(time) {
        this.daily_standup_time = time;
      };
    
      get numberOfTeammates() {
        return `${this.name} consists of ${this.teammates.length} members`;
      };
    
      addTeammate(teammate) {
        this.teammates.push(teammate);
      };
    
      removeTeammate(teammate) {
        const index = this.teammates.indexOf(teammate);
        if (index !== -1) {
          this.teammates.splice(index, 1);
        };
      };
    
      editTeammate(oldTeammate, newTeammate) {
        const index = this.teammates.indexOf(oldTeammate);
        if (index !== -1) {
          this.teammates[index] = newTeammate;
        };
      };
    
      addTask(task) {
        if (task && !this.tasks.includes(task)) {
          this.tasks.push(task);
        };
      };
    
      removeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
          this.tasks.splice(index, 1);
        };
      };
    
      editTask(oldTask, newTask) {
        const index = this.tasks.indexOf(oldTask);
        if (index !== -1) {
          this.tasks[index] = newTask;
        };
      };
    
      showAllTeammates() {
        return `Our teammates are: \n${this.teammates.map(teammate => {return ` ${teammate.name} - ${teammate.grade} ${teammate.specialization}`})}`;
      };
    
      showTeammatesBySpecialization(specialization) {
        const teammatesBySpecialization = this.teammates.filter(teammate => teammate.specialization == specialization)
        return `Our ${specialization}s are: ${teammatesBySpecialization.map(teammate => {return ` ${teammate.name}`})}`;
      };
    
      showAllTasks() {
        return `Now we have following tasks: ${this.tasks.map(task => {return ` "${task.featureName}"(user story №${task.userStoryNumber}, estimated about ${task.estimations} story points)`})}`;
      };
    };
    



