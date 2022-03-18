var gr = new GlideRecord("TABLE_NAME");

gr.addNotNullQuery('SOURCE_FIELD_NAME'); // skip the records without a value in the specified field

gr.query();

while(gr.next()) {

        gr.setValue('TARGET_FIELD_NAME', gr.getValue('SOURCE_FIELD_NAME'));

        gr.update();

}
