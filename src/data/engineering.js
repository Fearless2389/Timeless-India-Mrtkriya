// Clay mineralogy — 6 types
export const clayTypes = [
  {
    name: 'Kaolinite',
    formula: 'Al₂Si₂O₅(OH)₄',
    body: 'Primary firing component in porcelain. Low plasticity, white-burning. Dehydroxylates at 550°C and converts to mullite above 980°C. Found in Rajmahal and the Eastern Ghats — used in Indian porcelain and high-fired stoneware production.',
    burn: 'White',
  },
  {
    name: 'Illite',
    formula: 'K-Al phyllosilicate',
    body: 'Common in sedimentary clays of the Gangetic alluvium. Moderate plasticity. Contains K⁺ which acts as a flux, lowering vitrification temperature to 1000–1100°C. The dominant fraction in Indian alluvial brick and earthenware bodies.',
    burn: 'Buff to red',
  },
  {
    name: 'Smectite / Montmorillonite',
    formula: '(Na,Ca)(Al,Mg)₂Si₄O₁₀(OH)₂·nH₂O',
    body: 'Very high plasticity and shrinkage; swells significantly on wetting. Used in small proportions to increase workability of leaner bodies. Excessive amounts cause severe drying cracks; traditional potters intuitively limit additions.',
    burn: 'Variable',
  },
  {
    name: 'Ball Clay',
    formula: 'Mixed illite–kaolinite',
    body: 'High plasticity and high dry strength. An essential component of stoneware and porcelain bodies in industrial use. Provides the "throwability" of commercial throwing bodies and supplies fine-particle clay fraction in tile production.',
    burn: 'Cream to grey',
  },
  {
    name: 'Fire Clay',
    formula: 'Refractory kaolinite',
    body: 'Refractory kaolinite-rich clay with high alumina content. Used for kiln furniture, saggar manufacture, refractory bricks for steel plants, and heavy clay refractories. Withstands temperatures up to 1700°C without softening.',
    burn: 'Grey-white',
  },
  {
    name: 'Lateritic / Serpentinite',
    formula: 'Fe₂O₃ · Al₂O₃ rich · Mg-silicate',
    body: 'Deccan trap-derived lateritic clays — high iron, red-burning — sustain traditional ware across central India. The unique serpentinite-clay composite of Longpi, Manipur, is found nowhere else and gives that tradition its singular character.',
    burn: 'Red / smoky grey',
  },
]

// Ceramic classification table
export const ceramicClassification = [
  {
    type: 'Terracotta',
    temp: '700 – 950°C',
    absorption: '15 – 30 %',
    strength: '5 – 15 MPa',
    hardness: '1 – 2 GPa',
    examples: 'Kumhar earthenware · Bankura horse · ritual figurines',
  },
  {
    type: 'Earthenware',
    temp: '950 – 1,100°C',
    absorption: '5 – 15 %',
    strength: '10 – 30 MPa',
    hardness: '2 – 4 GPa',
    examples: 'Khurja glazed ware · Kashi tiles · kulhad',
  },
  {
    type: 'Faience (no clay)',
    temp: '850 – 950°C',
    absorption: '2 – 10 %',
    strength: '15 – 35 MPa',
    hardness: '3 – 5 GPa',
    examples: 'Indus Valley beads · Jaipur Blue Pottery',
  },
  {
    type: 'Stoneware',
    temp: '1,200 – 1,300°C',
    absorption: '0.5 – 3 %',
    strength: '40 – 70 MPa',
    hardness: '5 – 7 GPa',
    examples: 'Khurja hotel ware · Bengal studio pottery',
  },
  {
    type: 'Porcelain',
    temp: '1,260 – 1,400°C',
    absorption: '< 0.5 %',
    strength: '60 – 100 MPa',
    hardness: '6 – 8 GPa',
    examples: 'Indian sanitary ware · HSIL · NGK insulators',
  },
  {
    type: 'Technical Ceramics',
    temp: '1,500 – 1,800°C',
    absorption: '< 0.01 %',
    strength: '200 – 400 MPa',
    hardness: '15 – 20 GPa',
    examples: 'ISRO thermal tiles · DRDO armour · biomedical alumina',
  },
]

// Glaze chemistry — 6 cards
export const glazeChemistry = [
  {
    name: 'Glass Formers',
    formula: 'SiO₂',
    body: 'The principal silicate network former, supplied by quartz, feldspar, or flint. Provides the glassy continuum that vitrifies on cooling. All ceramic glazes are at base silicate glasses tuned to match the body\'s thermal expansion.',
    role: 'Backbone',
  },
  {
    name: 'Fluxes',
    formula: 'Na₂O · K₂O · CaO · MgO · ZnO · PbO',
    body: 'Reduce melting temperature by disrupting the silicate network. Sodium and potassium come from feldspar and nepheline syenite; calcium from whiting. Traditional Khurja and Jaipur glazes used PbO for its low 880°C melt — now phased out for safety.',
    role: 'Lowers melt',
  },
  {
    name: 'Stabilisers',
    formula: 'Al₂O₃',
    body: 'Alumina from feldspar increases melt viscosity and prevents devitrification (uncontrolled crystallisation). Without alumina, glazes would crawl off the body during firing. The 30% Al₂O₃ typical of stoneware glazes is the engineering sweet spot.',
    role: 'Holds the melt',
  },
  {
    name: 'Opacifiers',
    formula: 'SnO₂ · ZrO₂ · TiO₂',
    body: 'Scatter light from suspended crystals to produce opacity. Tin oxide is the historic opacifier of Mughal kashi tilework and Mediterranean majolica. Modern industrial glazes use zirconium silicate as a cheaper alternative with similar optical performance.',
    role: 'White scattering',
  },
  {
    name: 'Colourants',
    formula: 'CoO · CuO · Fe₂O₃ · MnO₂ · Cr₂O₃',
    body: 'Metal oxides dissolved in the glass matrix. Cobalt yields the cobalt blue of Jaipur. Copper produces green in oxidation and copper-red in reduction. Iron gives ambers and browns. Manganese yields purple-brown. Chromium produces green.',
    role: 'Hue',
  },
  {
    name: 'BIS IS 1861 : 2020',
    formula: 'Pb ≤ 2.5 mg/L · Cd ≤ 0.25 mg/L',
    body: 'India\'s Bureau of Indian Standards mandates that lead and cadmium release from glazed ware used for food and drink must not exceed these thresholds. This standard drove the reformulation of Khurja glazes from lead-flux to alkaline boron-zinc systems post-2000.',
    role: 'Food-contact safety',
  },
]

// Modern applications
export const modernApplications = [
  {
    icon: '⟆',
    title: 'Aerospace',
    body: 'ISRO thermal protection tiles, yttria-stabilised zirconia plasma coatings on turbine blades, alumina radomes. HAL\'s Kaveri engine programme uses YSZ thermal barrier coatings reducing metal temperatures by 100–200°C.',
    actors: 'ISRO · HAL · DRDO',
  },
  {
    icon: '✛',
    title: 'Medical & Biomedical',
    body: 'Hydroxyapatite coatings on orthopaedic implants; porous HAp scaffolds for bone regeneration researched at IIT Kharagpur, IIT Bombay, CGCRI. Zirconia (ZrO₂) ceramic dental crowns and bridges now manufactured in India.',
    actors: 'IITs · CGCRI · dental ceramics firms',
  },
  {
    icon: '◧',
    title: 'Electronics',
    body: 'Multilayer ceramic capacitors (MLCCs), piezoelectric PZT for ultrasound transducers and actuators (ECIL), manganese-zinc and nickel-zinc ferrites for EMI suppression (Cosmo Ferrites, BDL Magnetics), alumina substrates for microchips.',
    actors: 'ECIL · BEL · Cosmo Ferrites',
  },
  {
    icon: '◬',
    title: 'Construction',
    body: 'India is the world\'s third-largest tile producer. Morbi cluster: 700+ units, 1,000 continuous tunnel kilns, 1,200 million m²/year. Kajaria, Somany, Asian Granito, Nitco. Vitreous-china sanitary ware by HSIL and Cera (~55 million pieces/year).',
    actors: 'Morbi · Kajaria · HSIL · Cera',
  },
  {
    icon: '⛨',
    title: 'Defence & Armour',
    body: 'Boron carbide (B₄C) and alumina ceramic tiles in body armour and vehicle armour — lighter and harder than steel at equivalent protection. Active DRDO programme at the Centre for Fire, Explosive and Environment Safety (CFEES).',
    actors: 'DRDO · CFEES · ordnance factories',
  },
  {
    icon: '⚡',
    title: 'Energy & Power',
    body: 'High-voltage ceramic insulators (BHEL, Aditya Birla Insulators, NGK India). Yttria-stabilised zirconia electrolytes for solid oxide fuel cells under development at BHEL. Refractories: ~1.4 million tonnes consumed in 2023 (Orient, RHI Magnesita, Calderys).',
    actors: 'BHEL · NGK · RHI Magnesita',
  },
]
