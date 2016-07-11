import measures from './src/config';

class MeasuresBase {

  formatPosibilities(currentMeasures) {
    return currentMeasures.map((measure) => {
        return {
            id: measure.id,
            name: measure.name,
            abbreviation: measure.abbreviation
        };
    });
  }

  getMeasures() {
    return this.kind ? this.kind.measures : measures;
  }

  getPossibilities() {
    let result = this.getMeasures();
    result = this.formatPosibilities(result);

    return result;
  }

  getPossibilityById(posibilityId) {
    const posibilities = this.getPossibilities();

    const posibility = posibilities.find((posibility) => posibility.id === posibilityId);

    return posibility;
  }

  getTerm(id) {
    let result = this.getMeasures();
    result = result.find((measure) => measure.id === id);

    return result;
  }
}

class Measures extends MeasuresBase {

    convert (kindId) {
      let kind = this.getTerm(kindId);
      return new From(kind);
    }

}

class Term extends MeasuresBase {


}


class From extends Term {

    constructor(kind) {
      super();
      this.kind = kind;
    }

    from(measureFromId) {
      let measureFrom = this.getTerm(measureFromId);
      return new To(this.kind, measureFrom)
    }

}

class To extends Term {

    constructor(kind, measureFrom) {
      super();
      this.kind = kind;
      this.measureFrom = measureFrom;
    }

    to(measureToId) {
      let measureTo = this.getTerm(measureToId);
      return new Value(this.kind, this.measureFrom, measureTo);
    }

}

class Value {

    constructor(kind, measureFrom, measureTo) {
        this.kind = kind;
        this.measureFrom = measureFrom;
        this.measureTo = measureTo;
    }

    get(value) {
      const termFrom = this.measureFrom.calculation.from;
      const termTo = this.measureTo.calculation.to;

      const ecuation = termTo.replace('x', termFrom.replace('x', value));

      const result = eval(ecuation);

      return result;
    }

}

const measuresObj = new Measures();

// let km = measuresObj.convert('distance').from('metres').to('kilometers').get(100);
// let temp = measuresObj.convert('temperature').from('fahrenheit').to('centigrades').get(100);
//
//
// console.log(km);
// console.log(temp);

export default measuresObj;
