public with sharing class SkillRetriever {

    @AuraEnabled(cacheable=true)
    public static List<Developer_Skill__c> getAllDeveloperSkills(){
        try {
            System.debug('SKILLS');
            return [SELECT Id, Name FROM Developer_Skill__c WITH SECURITY_ENFORCED];
        } catch (Exception e) {
            System.debug('ERROR');
            throw new AuraHandledException(e.getMessage());
        }
    }
}