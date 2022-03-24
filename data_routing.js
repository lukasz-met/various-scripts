// Set values for the task in this script.  Use the variable 'task' when setting additional values.
// Note: This script is run after the task values are set using the Fields, Template or Values you have specified.
//
// For example:
//     task.short_description = current.short_description;

task.type = "standard";
task.state = "-5";

task.short_description += " - " + current.variables.request.getDisplayValue();

task.description = "Requested for:  " + current.variables.u_requested_for.name + "\n\n";

if (current.variables.request == "add_amend") {
  task.description += "DATA SOURCE\nFilename(s): " + current.variables.filename + "\n"
  + "Source: " + current.variables.source + "\n"
  + "Data collection: " + current.variables.data_collection.getDisplayValue() + "\n\n"
  + "DATA DELIVERY/DESTINATION\nRouting Type: " + current.variables.routing_type.getDisplayValue() + "\n"
  + "Destination: " + current.variables.destination + "\n"
  + "Delivery: " + current.variables.delivery.getDisplayValue() + "\n"
  + "Credentials: " + current.variables.credentials + "\n\n"
  + "ABOUT DATA ROUTING\nDetails: " + current.variables.add_amend_details + "\n\n";
}

else {
  task.description += "What to remove: " + current.variables.remove_what.getDisplayValue() + "\n"
  + "Details: " + current.variables.remove_details + "\n\n";
}

task.description += "Date to be completed: " + current.variables.date.getDisplayValue() + "\n"
+ "Priority: " + current.variables.priority.getDisplayValue();
