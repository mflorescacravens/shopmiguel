public class NewCaseListController {
    public List<Case> getNewCases() {
        List<Case> cases = [SELECT Id, CaseNumber FROM Case WHERE Status = 'New'];
        return cases;
    }
}