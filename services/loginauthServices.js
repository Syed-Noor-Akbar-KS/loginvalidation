module.exports = {
    login:function(query) {
        if(query.password == "NoorAkbar" && query.email == "noorshah007@gmail.com") {
            console.log("Your password and email is oky")
            return true
        } 
        else{
        console.log("Your password and email is Wrong")
            return false;
         }
        
        }

};