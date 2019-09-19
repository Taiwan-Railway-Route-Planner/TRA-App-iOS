/**
 Created by svend on 3/07/2019.
 **/

const language = require('./language');
const moment = require("moment");

export default (function () {

    const handleIncomingRouteDetails = async function (_self) {
        loadLanguage(_self);
    };

    function loadLanguage(_self) {
        // TODO if add new language
        switch (_self.$store.state.language) {
            case "EN":
                _self.data = language.language.en;
                break;
            case "ZH":
                _self.data = language.language.zh;
                break;
            case "KO":
                _self.data = language.language.ko;
                break;
            case "NL":
                _self.data = language.language.nl;
                break;
            case "ES":
                _self.data = language.language.es;
                break;
        }
    }

    return {
        handleIncomingRouteDetails
    }

})();
