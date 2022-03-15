// Set values for the task in this script.  Use the variable 'task' when setting additional values.
// Note: This script is run after the task values are set using the Fields, Template or Values you have specified.
//
// For example:
//     task.short_description = current.short_description;

task.type = "standard";
task.state = "-5";

task.short_description += " - " + current.variables.request.getDisplayValue();

task.description = "Requested for:  " + current.variables.u_requested_for.name + "\n\n";

if (current.variables.request == "add") {
  task.short_description += " - " + current.variables.location;

  if (current.variables.location == "external") {
    task.description += "Username: " + current.variables.username + "\n\n";    
  }
}

task.description += "Filename: " + current.variables.filename + "\n\n"
+ "Source: " + current.variables.source + "\n\n"
+ "Destination: " + current.variables.destination + "\n\n"
+ "Date to be completed: " + current.variables.date.getDisplayValue() + "\n\n"
+ "Priority: " + current.variables.priority.getDisplayValue() + "\n\n"
+ "Details: " + current.variables.details + "\n\n"
+ "Additional Information: " + current.variables.info;
