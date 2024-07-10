public class AccountUtility {
    public static void viewAnnualRevenue() {
        List<Account> accountsList = new List<Account>();
        accountsList = [SELECT id, name, AnnualRevenue FROM Account];
        for (Account acc : accountsList) {
			String acctRev = acc.name + ':' + acc.AnnualRevenue;
            System.debug(acctRev);
        }
    } 
}