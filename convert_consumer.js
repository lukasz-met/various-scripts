var gr = current.variables.consumer_email;
var grid = new GlideRecord('sys_user');
  grid.addQuery('email', gr);
   grid.query();
    if (grid.next()) {
// Convert Consumer User to Customer Contact
var record_id = grid.sys_id; // sys_id of the consumer_user you want to reclassify

if(record_id){

    var consumer_user = new GlideRecord('sys_user');
    if(consumer_user.get(record_id)){
        // locate the linked csm_consumer record and delete it
        var consumer = new GlideRecord('csm_consumer');
        if(consumer.get(consumer_user.getUniqueValue())){
            gs.info('Linked Consumer record ' + consumer.getUniqueValue() + ' deleted');
            consumer.deleteRecord();
        }

        consumer_user.setValue('sys_class_name','customer_contact');
        consumer_user.autoSysFields(false);
        consumer_user.update('Manual User Reclassification');

        gs.info(consumer_user.getValue('user_name') + ' reclassified.');
    }}

}
var name = current.variables.consumer_account;
var cont = current.variables.consumer_email;
var acc = new GlideRecord('customer_contact');
  acc.addQuery('email', cont);
   acc.query();
    if (acc.next()) {
	acc.account = name.sys_id;
	acc.update();
	}
		
