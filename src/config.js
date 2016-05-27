const measures = [{
    name: 'distance',
    measures: [{
        name: 'metres',
        abbreviation: 'm',
        calculation: {
            from: 'x',
            to: 'x'
        }
    }, {
        name: 'kilometers',
        abbreviation: 'km',
        calculation: {
            from: 'x*1000',
            to: 'x/1000'
        }       
    }],
}, {
    name: 'temperature',
    measures: [{
        name: 'centigrades',
        abbreviation: 'ºC',
        calculation: {
            from: 'x',
            to: 'x'
        }
    }, {
        name: 'fahrenheit ',
        abbreviation: 'ºF',
        calculation: {
            from: '(x-32)/1.8',
            to: 'x*1.8+32'
        }        
    }],    
}]

export default measures;