({
	expandContract: function(component, event, helper) {
        var listDiv = component.find("listContainer").getElement();
        $A.util.toggleClass(listDiv, "expanded")
		console.log('TEST HELPER FUNC EXPAND CONTRACT')
        // el.classList.toggle('collapsed')
    }
})