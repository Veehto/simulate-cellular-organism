# simulate-cellular-organism
A program that creates objects that simulate the DNA of a new organism for a research team to study.

CONTEXT:
You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. 
Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. 
The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. 
However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. 
Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

The program creates a random DNA single strand from 4 DNA bases (A, T, C, G), then constructs a factory function pAequorFactory() that includes the following:
  *  I has 2 parameters:
    ○ The first parameter is a number (no two organisms should have the same number).
		○ The second parameter is an array of 15 DNA bases.

  * Returns an object that contains the properties specimenNum and dna that correspond to the parameters provided.

  * .mutate() method randomly selects a base in the object’s dna property and changing the current base to a different base.
    Then .mutate() will return the object’s dna. For example, if the randomly selected base is the 1st base and it is 'A',
    the base must be changed to 'T', 'C', or 'G'. But it cannot be 'A' again.

  * .compareDNA() method compares the DNA sequences of different P. aequor .compareDNA() has one parameter, another pAequor object.
    The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical
    and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common
    — use the .specimenNum to identify which pAequor objects are being compared.

    For example:
      ex1 = ['A', 'C', 'T', 'G']
      ex2 = ['C', 'A', 'T', 'T']
    
      ex1 and ex2 only have the 3rd element in common ('T') and therefore, have 25% (1/4) of their DNA in common.
      The resulting message would read something along the lines of: specimen #1 and specimen #2 have 25% DNA in common.

  * .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise returns false.
    A P. aequor has a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.

Project possible extensions:
		○ A .complementStrand() method to the factory function’s object that returns the complementary DNA strand. The rules are that 
      'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. (Check the hint for more details).
		○ Use the .compareDNA() to find the two most related instances of pAequor.
