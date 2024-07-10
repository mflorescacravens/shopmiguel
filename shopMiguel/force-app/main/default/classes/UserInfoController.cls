public class UserInfoController {
    public User currentuser { get; private set; }
    public UserInfoController() {
        currentuser = [SELECT Id, Name, FirstName, LastName, Email, Profile.Name, Username FROM User WHERE Id = :UserInfo.getUserId()];
    }
}