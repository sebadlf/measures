const measures = [{
    id: 'length',
    name: 'Length',
    abbreviation: 'L',
    measures: [{
        id: 'meters',
        name: 'Metres',
        abbreviation: 'm',
        calculation: {
            from: 'x',
            to: 'x'
        }
    }, {
        id: 'meters',
        name: 'Metres',
        abbreviation: 'm',
        calculation: {
            from: 'x',
            to: 'x'
        }
    }, {
        id: 'kilometers',
        name: 'Kilometers',
        abbreviation: 'km',
        calculation: {
            from: 'x*1000',
            to: 'x/1000'
        }
    }],
}, {
    id: 'temperature',
    name: 'Temperature',
    abbreviation: 'T',
    measures: [{
        id: 'centigrades',
        name: 'Centigrades',
        abbreviation: 'ºC',
        calculation: {
            from: 'x',
            to: 'x'
        }
    }, {
        id: 'fahrenheit',
        name: 'Fahrenheit',
        abbreviation: 'ºF',
        calculation: {
            from: '(x-32)/1.8',
            to: 'x*1.8+32'
        }
    }, {
        id: 'kelvin',
        name: 'Kelvin',
        abbreviation: 'K',
        calculation: {
            from: 'x - 273.15',
            to: 'x + 273.15'
        }
    }],
  }, {
      id: 'weight',
      name: 'Weight',
      abbreviation: 'W',
      measures: [{
          id: 'kilograms',
          name: 'Kilograms',
          abbreviation: 'kg',
          calculation: {
              from: '1000 * x',
              to: 'x / 1000'
          }
      }, {
          id: 'grams',
          name: 'Grams',
          abbreviation: 'g',
          calculation: {
              from: 'x',
              to: 'x'
          }
      }, {
          id: 'pounds',
          name: 'Pounds',
          abbreviation: 'lb',
          calculation: {
              from: 'x * 453.5923',
              to: 'x / 453.5923'
          }
      }, {
          id: 'ounces',
          name: 'Ounces',
          abbreviation: 'oz',
          calculation: {
              from: 'x * 28.34952',
              to: 'x / 28.34952'
          }
      }],
  },
]

export default measures;
