// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    };
    return newStrand;
};

const pAequorFactory = (number, array) => {
    return {
      specimenNum: number,
      dna: array,
      mutate() {
        const randomLocation = Math.floor(Math.random() * 15);
        const randomBase = this.dna[randomLocation];
        let mutation = returnRandBase();
        
        // console.log(randomLocation);
        // console.log(randomBase);
        // console.log(mutation);
  
        while (randomBase !== mutation) {
          this.dna.splice(randomLocation, 1, mutation);
          break;
        };
        return this.dna;
      },
      compareDNA(pAequorAnother) {
        const thisDNA = this.dna;
        const anotherDNA = pAequorAnother.dna;
  
        // console.log(thisDNA);
        // console.log(anotherDNA);
  
        let counter = 0;
        for (let i = 0; i < thisDNA.length; i++) {
          for (let j = 0; j < anotherDNA.length; j++) {
            if (anotherDNA[j] === thisDNA[i] && j === i) {
              counter++;
            };
          };
        };
  
        let percentage = Math.round((counter / 15) * 100);
        let percentWithFloat = ((counter / 15) * 100).toFixed(3);
  
        // console.log(counter);
        // console.log(percentage);
        
        return (`Specimen ${this.specimenNum} and specimen ${pAequorAnother.specimenNum} have ${percentWithFloat}% DNA in common.`);
      },
      willLikelySurvive() {
        let counterC = 0;
        let counterG = 0;
        this.dna.forEach(base => {
          if (base === 'C') {
            counterC++;
          } else if (base === 'G') {
            counterG++;
          };
        });
        let percentC = ((counterC / 15) * 100).toFixed(3);
        let percentG = ((counterG / 15) * 100).toFixed(3);
  
        // console.log(this.dna);
        // console.log(percentC);
        // console.log(percentG);
  
        if (percentC >= 60.000 || percentG >= 60.000) {
          return true;
        } else {
          return false;
        };
      }
    };
};

// creating a pAequor
const pAequorA = pAequorFactory(111, mockUpStrand());
const pAequorB = pAequorFactory(112, mockUpStrand());
const pAequorArr30 = [];

let countUntil30 = 1;
while (countUntil30 <= 30) {
  let pAequor = pAequorFactory(countUntil30, mockUpStrand());
  if (pAequor.willLikelySurvive() === true) {
     pAequorArr30.push(pAequor);
     countUntil30++;
  };
};

// console.log(pAequorArr30);

// console.log(pAequorA.dna);
// console.log(pAequorA.mutate());
// console.log(pAequorA.compareDNA(pAequorB));
// console.log(pAequorA.willLikelySurvive());