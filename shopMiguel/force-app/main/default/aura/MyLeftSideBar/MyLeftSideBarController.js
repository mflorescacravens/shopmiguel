({  
    toggleList: function(component, event, helper) {
        var isExpanded = !component.get("v.isExpanded");
        component.set("v.isExpanded", isExpanded);
        var listDiv = component.find("listContainer").getElement();
        if (isExpanded) {
            listDiv.style.display = "block";
        } else {
            listDiv.style.display = "none";
        }
        var expandContractFunc = component.get("c.expandContract");
        expandContractFunc.setParams({
            
        })
        $A.enqueueAction();
    }
})