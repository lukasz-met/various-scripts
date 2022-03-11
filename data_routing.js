// Set values for the task in this script.  Use the variable 'task' when setting additional values.
// Note: This script is run after the task values are set using the Fields, Template or Values you have specified.
//
// For example:
//     task.short_description = current.short_description;

task.type = "standard";
task.state = "-5";

task.short_description = task.short_description + " - " + current.variables.what_would.getDisplayValue();

task.description = "Requested for:  " + current.variables.u_requested_for.name + "\n\n"
+ "Details:\n" + current.variables.details.getDisplayValue() + "\n\n"
+ "Source:\n" + current.variables.source.getDisplayValue() + "\n\n"
+ "Filename:\n" + current.variables.filename.getDisplayValue();
