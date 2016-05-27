import measures from './src/config';

class Measures {
    
    constructor() {
        
    }
    
    convert (kind) {
        return new From(kind);
    }
    
}

class From {
    
    constructor(kind) {
        this.kind = kind;
        this.measures = measures.map((measure) => {
            return {
                name: measure.name,
                abbreviation: measure.abbreviation
            }
        })
    }
    
    from(measureFrom) {
        return new To(this.kind, measureFrom)
    }
    
}

class To {
    
    constructor(kind, from) {
        this.kind = kind;
        this.filter = filter;
        this.measures = measures.map((measure) => {
            return {
                name: measure.name,
                abbreviation: measure.abbreviation
            }
        })
    }
    
    to(measureTo) {
        return new Value(this.kind, this.from, measureTo);
    }
    
}

class Value {
    
    constructor(kind, from, to) {
        this.kind = kind;
        this.from = from;
        this.to = to;
        
        this.configure
    }
    
    
    
}



