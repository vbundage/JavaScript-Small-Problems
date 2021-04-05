"use strict";

const CODON_TO_AMINO_ACID = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
};

function generateCodons(rna) {
  return rna.match(/[A-Z]{3}/g);
}

function getProtein(codon) {
  if (!CODON_TO_AMINO_ACID[codon]) throw new Error("Invalid codon");
  return CODON_TO_AMINO_ACID[codon];
}

function translate(rna) {
  if (!rna) return [];

  let codons = generateCodons(rna);
  let protein = codons.map(getProtein);
  let index = protein.indexOf("STOP") >= 0 ? protein.indexOf("STOP") : protein.length;
  return protein.slice(0, index);
}

module.exports = translate;