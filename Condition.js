function Condition(drunk, satiety, energy, fun) {
    this.MAX_PERCENT = 100;
    this.MIN_PERCENT = 0;

    this.drunk = drunk || this.MIN_PERCENT;
    this.satiety = satiety || this.MAX_PERCENT;
    this.energy = energy || this.MAX_PERCENT;
    this.fun = fun || this.MAX_PERCENT;

    var areSettingPropertiesCorrect = function (it, properties, property) {
        if (isPropertyRight(it, properties, property)) {

            handleRange(it, properties[property], property);
        }
        return true;
    };

    var areUpdatingPropertiesCorrect = function (it, properties, property) {
        if (isPropertyRight(it, properties, property)) {

            var currentValue = it[property];
            var newValue = currentValue + properties[property];

            handleRange(it, newValue, property);
        }
        return true;
    };

    this.setProperties = function (properties) {
        for (var p in properties) {
            if (areSettingPropertiesCorrect(this, properties, p))
                this[p] = properties[p];
        }
    };

    this.updateProperties = function (properties) {
        for (var p in properties) {
            if (areUpdatingPropertiesCorrect(this, properties, p))
                this[p] += properties[p];
        }
    };

    this.getProperties = function () {
        for (var p in this) {
            console.log(p + ": " + this[p]);
        }
    };

    var isPropertyRight = function (it, properties, property) {
        if (!(property in it)) throw "Wrong property: " + property;
        if (typeof properties[property] != 'number') throw "Use only number";
        return true;
    };

    function handleRange(it, value, property) {
        if (value > it.MAX_PERCENT) {
            throw {
                description: 'much',
                propName: property
            };
        }
        if (value < it.MIN_PERCENT) {
            throw {
                description: 'less',
                propName: property
            };
        }
    }
}