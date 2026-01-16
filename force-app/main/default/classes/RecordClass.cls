public with sharing class RecordClass {
    @AuraEnabled
    public static STUDENT__c createStudent(String name, String mobileNo, Integer age) {
        STUDENT__c student = new STUDENT__c();
        student.Name = name;
        student.Mobile_No__c = mobileNo;
        insert student;
        return student;
    }
}