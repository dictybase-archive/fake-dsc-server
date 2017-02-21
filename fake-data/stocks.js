const stocks = [
  {
    type: "strain",
    id: 'DBS025897',
    attributes: {
      name: 'abpB-/[dscB]:abpB(E60K):GFP',
      description: 'GFP-tagged AbpB with E60K substitution expressed in abpB null cells under control of the dscB promotor',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS38597',
    attributes: {
      name: 'abpC-/[act15]:abpC(1-556:644-857):GFP',
      description: 'C-terminal fusion of GFP abpC missing rod domain 4 expressed in an abpC null mutant	',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS00987',
    attributes: {
      name: '3KO 60BAS',
      description: 'CF60B antisense in triple KO',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS025425',
    attributes: {
      name: 'abcG2-/abcG18-/rtoA-',
      description: 'abcG2-/abcG18-/rtoA- triple null mutant; recapitulation of the rtoA suppressor',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS025897',
    attributes: {
      name: '2A+/scrA/dis-Scar-GFP',
      description: 'Expresses Scar-GFP under the control of the discoidin promoter. Control strain is 2A+pVGct',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS0252577',
    attributes: {
      name: 'aca-, acaA-(r)',
      description: 'acaA-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS0350146',
    attributes: {
      name: 'AK00010',
      description: 'dfbcdsaB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS038350146',
    attributes: {
      name: 'dhjf44',
      description: 'dfdscB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS038350146',
    attributes: {
      name: 'dhjf44',
      description: 'dfdscB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS03350146',
    attributes: {
      name: 'jfgkhjs3',
      description: 'sdasda33-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS02350146',
    attributes: {
      name: 'kjsjks4',
      description: 'sada2332',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS025897',
    attributes: {
      name: 'abpB-/[dscB]:abpB(E60K):GFP',
      description: 'GFP-tagged AbpB with E60K substitution expressed in abpB null cells under control of the dscB promotor',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS38597',
    attributes: {
      name: 'abpC-/[act15]:abpC(1-556:644-857):GFP',
      description: 'C-terminal fusion of GFP abpC missing rod domain 4 expressed in an abpC null mutant	',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS00987',
    attributes: {
      name: '3KO 60BAS',
      description: 'CF60B antisense in triple KO',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS025425',
    attributes: {
      name: 'abcG2-/abcG18-/rtoA-',
      description: 'abcG2-/abcG18-/rtoA- triple null mutant; recapitulation of the rtoA suppressor',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS025897',
    attributes: {
      name: '2A+/scrA/dis-Scar-GFP',
      description: 'Expresses Scar-GFP under the control of the discoidin promoter. Control strain is 2A+pVGct',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS0252577',
    attributes: {
      name: 'aca-, acaA-(r)',
      description: 'acaA-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS0350146',
    attributes: {
      name: 'AK00010',
      description: 'dfbcdsaB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS038350146',
    attributes: {
      name: 'dhjf44',
      description: 'dfdscB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS038350146',
    attributes: {
      name: 'dhjf44',
      description: 'dfdscB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS03350146',
    attributes: {
      name: 'jfgkhjs3',
      description: 'sdasda33-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS02350146',
    attributes: {
      name: 'kjsjks4',
      description: 'sada2332',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS025897',
    attributes: {
      name: 'abpB-/[dscB]:abpB(E60K):GFP',
      description: 'GFP-tagged AbpB with E60K substitution expressed in abpB null cells under control of the dscB promotor',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS38597',
    attributes: {
      name: 'abpC-/[act15]:abpC(1-556:644-857):GFP',
      description: 'C-terminal fusion of GFP abpC missing rod domain 4 expressed in an abpC null mutant	',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS00987',
    attributes: {
      name: '3KO 60BAS',
      description: 'CF60B antisense in triple KO',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS025425',
    attributes: {
      name: 'abcG2-/abcG18-/rtoA-',
      description: 'abcG2-/abcG18-/rtoA- triple null mutant; recapitulation of the rtoA suppressor',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS025897',
    attributes: {
      name: '2A+/scrA/dis-Scar-GFP',
      description: 'Expresses Scar-GFP under the control of the discoidin promoter. Control strain is 2A+pVGct',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS0252577',
    attributes: {
      name: 'aca-, acaA-(r)',
      description: 'acaA-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS0350146',
    attributes: {
      name: 'AK00010',
      description: 'dfbcdsaB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS038350146',
    attributes: {
      name: 'dhjf44',
      description: 'dfdscB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS038350146',
    attributes: {
      name: 'dhjf44',
      description: 'dfdscB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS03350146',
    attributes: {
      name: 'jfgkhjs3',
      description: 'sdasda33-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS02350146',
    attributes: {
      name: 'kjsjks4',
      description: 'sada2332',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS025897',
    attributes: {
      name: 'abpB-/[dscB]:abpB(E60K):GFP',
      description: 'GFP-tagged AbpB with E60K substitution expressed in abpB null cells under control of the dscB promotor',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS38597',
    attributes: {
      name: 'abpC-/[act15]:abpC(1-556:644-857):GFP',
      description: 'C-terminal fusion of GFP abpC missing rod domain 4 expressed in an abpC null mutant	',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS00987',
    attributes: {
      name: '3KO 60BAS',
      description: 'CF60B antisense in triple KO',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS025425',
    attributes: {
      name: 'abcG2-/abcG18-/rtoA-',
      description: 'abcG2-/abcG18-/rtoA- triple null mutant; recapitulation of the rtoA suppressor',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS025897',
    attributes: {
      name: '2A+/scrA/dis-Scar-GFP',
      description: 'Expresses Scar-GFP under the control of the discoidin promoter. Control strain is 2A+pVGct',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS0252577',
    attributes: {
      name: 'aca-, acaA-(r)',
      description: 'acaA-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS0350146',
    attributes: {
      name: 'AK00010',
      description: 'dfbcdsaB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS038350146',
    attributes: {
      name: 'dhjf44',
      description: 'dfdscB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS038350146',
    attributes: {
      name: 'dhjf44',
      description: 'dfdscB4-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS03350146',
    attributes: {
      name: 'jfgkhjs3',
      description: 'sdasda33-',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "strain",
    id: 'DBS02350146',
    attributes: {
      name: 'kjsjks4',
      description: 'sada2332',
      category: "strain",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236225',
    attributes: {
      name: ' (Myc)2-VAMP7',
      description: 'KpnI-myc-BglII-myc-sacI-BamHI-VAMP7-XhoI-NsiI-myc-stop (in pDXD-3C) In IFs, 9E10 labels endocytic compartments and also in some cells the plasma membrane.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236302',
    attributes: {
      name: 'ACG-KO',
      description: 'Knockout plasmid for acgA',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236357',
    attributes: {
      name: ' EXP5(+)',
      description: 'Integrating expression vector derived from EXP4(+) by removal of the HindIII and XbaI sites, and replacement of the mcs.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210655',
    attributes: {
      name: 'Gβ-YFP',
      description: 'Reporter construct (YFP fused to NH2-terminal of Gβ). The gene encoding the full-length YFP was fused to the NH2-terminus of the Gβ gene. A BglII restriction site was added at the junction that consisted of two additional amino acids, arginine and serine. This β-YFP fusion protein was cloned into the CV5 vector. CV5 was derived from p88 by addition of an actin 15 expression cassette from pMC34.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210602',
    attributes: {
      name: 'amiB-KO (p82ClaI)',
      description: 'Recapitulation of the R8-2 amiB- REMI mutant (aggregation-minus B)',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210782',
    attributes: {
      name: 'GFP-Syntaxin8',
      description: 'KpnI-GFP-SacI-BamHI-Syntaxin8-XhoI-NsiI-myc-stop (in pDXD-3C) Decorates the bladders and tubular network of the contractile vacuole.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210123',
    attributes: {
      name: 'hygromycin B resistance cassette',
      description: 'gene replacement construct typically flanked by target DNA and used for homologous recombination, conferring hygromycin S resistance',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0406123',
    attributes: {
      name: 'Kdel-neo',
      description: 'Mutated Dd PK2 protein kinase over-expression vector. (K-neo cut with KpnI, blunt-ended with T4-polymerase, and religated)',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236225',
    attributes: {
      name: ' (Myc)2-VAMP7',
      description: 'KpnI-myc-BglII-myc-sacI-BamHI-VAMP7-XhoI-NsiI-myc-stop (in pDXD-3C) In IFs, 9E10 labels endocytic compartments and also in some cells the plasma membrane.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236302',
    attributes: {
      name: 'ACG-KO',
      description: 'Knockout plasmid for acgA',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236357',
    attributes: {
      name: ' EXP5(+)',
      description: 'Integrating expression vector derived from EXP4(+) by removal of the HindIII and XbaI sites, and replacement of the mcs.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210655',
    attributes: {
      name: 'Gβ-YFP',
      description: 'Reporter construct (YFP fused to NH2-terminal of Gβ). The gene encoding the full-length YFP was fused to the NH2-terminus of the Gβ gene. A BglII restriction site was added at the junction that consisted of two additional amino acids, arginine and serine. This β-YFP fusion protein was cloned into the CV5 vector. CV5 was derived from p88 by addition of an actin 15 expression cassette from pMC34.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210602',
    attributes: {
      name: 'amiB-KO (p82ClaI)',
      description: 'Recapitulation of the R8-2 amiB- REMI mutant (aggregation-minus B)',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210782',
    attributes: {
      name: 'GFP-Syntaxin8',
      description: 'KpnI-GFP-SacI-BamHI-Syntaxin8-XhoI-NsiI-myc-stop (in pDXD-3C) Decorates the bladders and tubular network of the contractile vacuole.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210123',
    attributes: {
      name: 'hygromycin B resistance cassette',
      description: 'gene replacement construct typically flanked by target DNA and used for homologous recombination, conferring hygromycin S resistance',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0406123',
    attributes: {
      name: 'Kdel-neo',
      description: 'Mutated Dd PK2 protein kinase over-expression vector. (K-neo cut with KpnI, blunt-ended with T4-polymerase, and religated)',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236225',
    attributes: {
      name: ' (Myc)2-VAMP7',
      description: 'KpnI-myc-BglII-myc-sacI-BamHI-VAMP7-XhoI-NsiI-myc-stop (in pDXD-3C) In IFs, 9E10 labels endocytic compartments and also in some cells the plasma membrane.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236302',
    attributes: {
      name: 'ACG-KO',
      description: 'Knockout plasmid for acgA',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236357',
    attributes: {
      name: ' EXP5(+)',
      description: 'Integrating expression vector derived from EXP4(+) by removal of the HindIII and XbaI sites, and replacement of the mcs.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210655',
    attributes: {
      name: 'Gβ-YFP',
      description: 'Reporter construct (YFP fused to NH2-terminal of Gβ). The gene encoding the full-length YFP was fused to the NH2-terminus of the Gβ gene. A BglII restriction site was added at the junction that consisted of two additional amino acids, arginine and serine. This β-YFP fusion protein was cloned into the CV5 vector. CV5 was derived from p88 by addition of an actin 15 expression cassette from pMC34.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210602',
    attributes: {
      name: 'amiB-KO (p82ClaI)',
      description: 'Recapitulation of the R8-2 amiB- REMI mutant (aggregation-minus B)',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210782',
    attributes: {
      name: 'GFP-Syntaxin8',
      description: 'KpnI-GFP-SacI-BamHI-Syntaxin8-XhoI-NsiI-myc-stop (in pDXD-3C) Decorates the bladders and tubular network of the contractile vacuole.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210123',
    attributes: {
      name: 'hygromycin B resistance cassette',
      description: 'gene replacement construct typically flanked by target DNA and used for homologous recombination, conferring hygromycin S resistance',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0406123',
    attributes: {
      name: 'Kdel-neo',
      description: 'Mutated Dd PK2 protein kinase over-expression vector. (K-neo cut with KpnI, blunt-ended with T4-polymerase, and religated)',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236225',
    attributes: {
      name: ' (Myc)2-VAMP7',
      description: 'KpnI-myc-BglII-myc-sacI-BamHI-VAMP7-XhoI-NsiI-myc-stop (in pDXD-3C) In IFs, 9E10 labels endocytic compartments and also in some cells the plasma membrane.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236302',
    attributes: {
      name: 'ACG-KO',
      description: 'Knockout plasmid for acgA',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0236357',
    attributes: {
      name: ' EXP5(+)',
      description: 'Integrating expression vector derived from EXP4(+) by removal of the HindIII and XbaI sites, and replacement of the mcs.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210655',
    attributes: {
      name: 'Gβ-YFP',
      description: 'Reporter construct (YFP fused to NH2-terminal of Gβ). The gene encoding the full-length YFP was fused to the NH2-terminus of the Gβ gene. A BglII restriction site was added at the junction that consisted of two additional amino acids, arginine and serine. This β-YFP fusion protein was cloned into the CV5 vector. CV5 was derived from p88 by addition of an actin 15 expression cassette from pMC34.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210602',
    attributes: {
      name: 'amiB-KO (p82ClaI)',
      description: 'Recapitulation of the R8-2 amiB- REMI mutant (aggregation-minus B)',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210782',
    attributes: {
      name: 'GFP-Syntaxin8',
      description: 'KpnI-GFP-SacI-BamHI-Syntaxin8-XhoI-NsiI-myc-stop (in pDXD-3C) Decorates the bladders and tubular network of the contractile vacuole.',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0210123',
    attributes: {
      name: 'hygromycin B resistance cassette',
      description: 'gene replacement construct typically flanked by target DNA and used for homologous recombination, conferring hygromycin S resistance',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  },
  {
    type: "plasmid",
    id: 'DBS0406123',
    attributes: {
      name: 'Kdel-neo',
      description: 'Mutated Dd PK2 protein kinase over-expression vector. (K-neo cut with KpnI, blunt-ended with T4-polymerase, and religated)',
      category: "plasmid",
      in_stock: Math.random() > 0.5 ? true : false
    }
  }
]

module.exports = stocks
