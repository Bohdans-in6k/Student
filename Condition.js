/**
 *
 * Represents a condition class
 * @param drunk defines percent of alcohol intoxication
 * @param satiety defines percent of being sated
 * @param energy defines percent of being rested
 * @param fun defines percent of being satisfied
 * @constructor
 */
function Condition(drunk, satiety, energy, fun) {
    this.MAX_PERCENT = 100;
    this.MIN_PERCENT = 0;

    this.drunk = drunk || this.MIN_PERCENT;
    this.satiety = satiety || this.MAX_PERCENT;
    this.energy = energy || this.MAX_PERCENT;
    this.fun = fun || this.MAX_PERCENT;

    /**
     * Checks if are setting properties correct
     * @param {Condition} it defines current condition object
     * @param properties defines current condition properties
     * @param property defines current property
     * @returns {boolean}
     */
    var areSettingPropertiesCorrect = function (it, properties, property) {
        if (isPropertyCorrect(it, properties, property)) {
            isInRange(it, properties[property], property);
        }
        return true;
    };

    /**
     * Checks if are updating properties correct
     * @param {Condition} it defines current condition object
     * @param properties defines current condition properties
     * @param property defines current property
     * @returns {boolean}
     */
    var areUpdatingPropertiesCorrect = function (it, properties, property) {
        if (isPropertyCorrect(it, properties, property)) {

            var currentValue = it[property];
            var newValue = currentValue + properties[property];

            isInRange(it, newValue, property);
        }
        return true;
    };

    /**
     * Sets condition properties
     * @param properties
     */
    this.setProperties = function (properties) {
        for (var p in properties) {

            if (areSettingPropertiesCorrect(this, properties, p))

                this[p] = properties[p];
        }
    };

    /**
     * Updates condition properties
     * @param properties
     */
    this.updateProperties = function (properties) {
        for (var p in properties) {
            if (areUpdatingPropertiesCorrect(this, properties, p))
                this[p] += properties[p];
        }
    };

    /**
     * Prints condition properties
     */
    this.getProperties = function () {
        for (var p in this) {
            console.log(p + ": " + this[p]);
        }
    };

    /**
     *
     * @param {Condition} it defines current condition object
     * @param properties defines current condition properties
     * @param property defines current property
     * @returns {boolean}
     */
    var isPropertyCorrect = function (it, properties, property) {
        if (!(it.hasOwnProperty(property))) throw "Wrong property: " + property;
        if (typeof properties[property] != 'number') throw "Use only number";
        return true;
    };

    /**
     *
     * @param {Condition} it defines current condition object
     * @param value current property value
     * @param property current property
     */
    var isInRange = function (it, value, property) {
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
        return true;
    }
}