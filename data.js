const P = (id, title, society, year, tags = [], link = null) => ({ id, title, society, year: year ? String(year) : null, tags, link });

const DOMAINS = [
  {
    id: 'core', name: 'Core & Board Prep', icon: '📚',
    topics: [
      { id: 'core-lib', name: 'Core Resource Libraries', papers: [
        P('abim-blueprint', 'Expanded Gastroenterology Certification Examination Blueprint', 'ABIM', null, ['★']),
        P('acg-guidelines', 'ACG Guidelines and Guideline Highlights', 'ACG', null, ['★'], 'https://gi.org/guidelines/'),
        P('aga-clinical-guidance', 'AGA Clinical Guidance, Living Guidelines, and Toolkits', 'AGA', null, ['★'], 'https://gastro.org/clinical-guidance/'),
        P('aga-cpu-archive', 'AGA Clinical Practice Update Archive', 'AGA', null, ['★']),
        P('asge-guidelines', 'ASGE Practice Guidelines', 'ASGE', null, ['★'], 'https://www.asge.org/home/resources/publications/guidelines'),
        P('asge-tech-reports', 'ASGE Technology Status Evaluation Reports', 'ASGE', null, ['★'], 'https://www.asge.org/home/resources/publications/tech-assessments'),
        P('aasld-guidelines', 'AASLD Practice Guidelines and Guidance', 'AASLD', null, ['★'], 'https://www.aasld.org/practice-guidelines'),
        P('esge-guidelines', 'ESGE Guidelines', 'ESGE', null, [], 'https://www.esge.com/publications/guidelines'),
        P('ecco-guidelines', 'ECCO Guidelines, Consensus Papers, and Topical Reviews', 'ECCO', null, [], 'https://ecco-ibd.eu/publications/guidelines'),
        P('ecco-e-guide', 'ECCO e-Guide Algorithms', 'ECCO', null, [], 'https://www.e-guide.ecco-ibd.eu/'),
        P('bsg-resources', 'BSG Clinical Resources and Guidelines', 'BSG', null, [], 'https://www.bsg.org.uk/clinical-resource')
      ]},
      { id: 'core-qbanks', name: 'Question Banks & Journal Updates', papers: [
        P('ddsep-plus', 'DDSEP Plus Question Bank', 'AGA', null, ['★']),
        P('gesap-plus', 'GESAP Plus Question Bank', 'ASGE', null, ['★']),
        P('acg-evidence', 'ACG Evidence-Based GI', 'ACG', null),
        P('asge-journal-scan', 'ASGE Journal Scan', 'ASGE', null),
        P('ajg-updates', 'American Journal of Gastroenterology Guideline and Review Updates', 'AJG', null),
        P('gastro-updates', 'Gastroenterology Guideline, CPU, and Review Updates', 'Gastro', null),
        P('cgh-updates', 'CGH Clinical Practice Updates and Practical Reviews', 'CGH', null),
        P('gie-updates', 'GIE Guidelines, Technology Reports, and Reviews', 'GIE', null),
        P('abim-recheck', 'Recheck ABIM GI Blueprint and Fill Weak Areas', 'ABIM', null)
      ]},
      { id: 'core-review', name: 'Practical Review Collections', papers: [
        P('ueg-mistakes', 'UEG "Mistakes in..." Article Collection and Booklet', 'UEG', 2026, ['★']),
        P('ueg-gutflix', 'UEG Gutflix Courses and Recordings', 'UEG', null),
        P('aasld-back-to-basics', 'AASLD Liver Fellow Network: Back to Basics', 'AASLD', null, ['★']),
        P('aasld-path-pearls', 'AASLD Liver Fellow Network: Pathology Pearls', 'AASLD', null),
        P('aasld-evidence-corner', 'AASLD Liver Fellow Network: Evidence Corner and Guideline Reviews', 'AASLD', null),
        P('aasld-fundamentals', 'AASLD LiverLearning: Fundamentals of Liver Disease', 'AASLD', null),
        P('asge-gi-leap', 'ASGE GI Leap / Endoscopic Learning Library', 'ASGE', null, ['★']),
        P('asge-video-tips', 'ASGE Video Tips Collection', 'ASGE', null),
        P('videogie-tools', 'VideoGIE Tools and Techniques Collection', 'VideoGIE', null),
        P('asge-endo-hangout', 'ASGE Endo Hangout Recordings', 'ASGE', null),
        P('acg-education-universe', 'ACG Education Universe', 'ACG', null),
        P('acg-grand-rounds', 'ACG Virtual Grand Rounds Archive', 'ACG', null)
      ]},
      { id: 'core-lookup', name: 'Medication, Imaging & Pathology Lookups', papers: [
        P('livertox', 'LiverTox', 'NIH', null),
        P('hep-interactions', 'HEP Drug Interactions and Prescribing Resources', 'Liverpool', null),
        P('dailymed', 'DailyMed Drug Labels', 'NLM/NIH', null),
        P('cap-colorectal', 'CAP Colorectal Biopsy and Resection Cancer Protocols', 'CAP', null),
        P('cap-eso-gastric', 'CAP Esophageal and Gastric Cancer Protocols', 'CAP', null),
        P('cap-hpb', 'CAP Pancreatic, HCC, and Biliary Cancer Protocols', 'CAP', null),
        P('cap-gist-net', 'CAP GIST and GI Neuroendocrine Tumor Protocols', 'CAP', null)
      ]}
    ]
  },
  {
    id: 'bleeding', name: 'GI Bleeding & Antithrombotics', icon: '🩸',
    topics: [
      { id: 'bleed-upper', name: 'Upper GI & Ulcer Bleeding', papers: [
        P('acg-ugib-2021', 'Upper GI and Ulcer Bleeding', 'ACG', 2021, ['★']),
        P('esge-pub-2026', 'Peptic Ulcer Bleeding: Guideline Update', 'ESGE', 2026),
        P('aga-ugib-endoscopy', 'Endoscopic Therapies for Nonvariceal Upper GI Bleeding', 'AGA', null, ['CPU'])
      ]},
      { id: 'bleed-lower', name: 'Lower GI Bleeding', papers: [
        P('acg-lgib-2023', 'Acute Lower GI Bleeding', 'ACG', 2023, ['★'])
      ]},
      { id: 'bleed-small', name: 'Small Bowel Bleeding', papers: [
        P('acg-sbb-2015', 'Small Bowel Bleeding (check for forthcoming replacement)', 'ACG', 2015, ['★'])
      ]},
      { id: 'bleed-anticoag', name: 'Antithrombotics & Periendoscopic Management', papers: [
        P('acg-cag-anticoag-2022', 'Anticoagulants and Antiplatelets During Acute GI Bleeding and the Periendoscopic Period', 'ACG–CAG', 2022, ['★']),
        P('bsg-esge-anticoag-2021', 'Endoscopy in Patients on Antiplatelet or Anticoagulant Therapy', 'BSG/ESGE', 2021)
      ]},
      { id: 'bleed-ida', name: 'Iron-Deficiency Anemia', papers: [
        P('aga-ida-eval', 'GI Evaluation of Iron-Deficiency Anemia', 'AGA', null),
        P('aga-ida-2024', 'Management of Iron-Deficiency Anemia', 'AGA', 2024, ['CPU'])
      ]}
    ]
  },
  {
    id: 'endoscopy-safety', name: 'Prep, Sedation & Safety', icon: '🛡️',
    topics: [
      { id: 'safety-prep', name: 'Bowel Preparation', papers: [
        P('usmstf-prep-2025', 'Optimizing Bowel Preparation Quality for Colonoscopy', 'USMSTF', 2025, ['★'])
      ]},
      { id: 'safety-sedation', name: 'Sedation & Anesthesia', papers: [
        P('asge-sedation-2018', 'Sedation and Anesthesia in GI Endoscopy', 'ASGE', 2018, ['★']),
        P('esge-sedation-2026', 'Sedation for GI Endoscopy', 'ESGE/ESGENA', 2026)
      ]},
      { id: 'safety-glp1', name: 'GLP-1 & SGLT-2 Periendoscopic', papers: [
        P('asge-glp1-2025', 'Periendoscopic Management of GLP-1 Receptor Agonists and SGLT-2 Inhibitors', 'ASGE', 2025),
        P('multi-glp1-2024', 'Perioperative Use of GLP-1 Receptor Agonists', 'Multisociety', 2024)
      ]},
      { id: 'safety-consent', name: 'Consent, Antibiotics & Reprocessing', papers: [
        P('asge-consent-2022', 'Informed Consent for GI Endoscopic Procedures', 'ASGE', 2022),
        P('asge-abx-2015', 'Antibiotic Prophylaxis for GI Endoscopy (pair with newer guidance)', 'ASGE', 2015),
        P('multi-reprocessing-2021', 'Reprocessing Flexible GI Endoscopes and Accessories', 'Multisociety', 2021),
        P('asge-reprocessing-2022', 'GI Endoscope Reprocessing: Comparative Review of Organizational Guidelines', 'ASGE', 2022)
      ]},
      { id: 'safety-other', name: 'Radiation, Ergonomics & Adverse Events', papers: [
        P('asge-radiation-2021', 'Radiation and Fluoroscopy Safety in GI Endoscopy', 'ASGE', 2021),
        P('asge-ergonomics-2023', 'Ergonomics for Prevention of Endoscopy-Related Injury', 'ASGE', 2023),
        P('asge-adverse-events', 'Procedure-Specific Adverse-Event Documents', 'ASGE', null),
        P('asge-quality-safety', 'Quality and Safety Resource Collection', 'ASGE', null)
      ]}
    ]
  },
  {
    id: 'esophagus', name: 'Esophagus', icon: '🔴',
    topics: [
      { id: 'eso-gerd', name: 'GERD & Reflux', papers: [
        P('acg-gerd-2022', 'GERD', 'ACG', 2022, ['★']),
        P('aga-gerd-personalized', 'Personalized Approach to GERD', 'AGA', null, ['CPU']),
        P('aga-gerd-extraesophageal', 'Extraesophageal GERD', 'AGA', null, ['CPU']),
        P('aga-ppi-deprescribing', 'PPI Deprescribing', 'AGA', null, ['CPU']),
        P('aga-pcab', 'Integrating Potassium-Competitive Acid Blockers Into Clinical Practice', 'AGA', null, ['CPU']),
        P('aga-functional-heartburn', 'Functional Heartburn', 'AGA', null, ['CPU']),
        P('aga-rumination', 'Rumination Syndrome', 'AGA', null, ['CPU'])
      ]},
      { id: 'eso-barrett', name: "Barrett's Esophagus", papers: [
        P('acg-barrett-2022', "Barrett's Esophagus", 'ACG', 2022, ['★']),
        P('aga-barrett-surveillance-2025', "Surveillance of Barrett's Esophagus", 'AGA', 2025),
        P('aga-barrett-ett-2024', "Endoscopic Eradication Therapy for Barrett's Esophagus and Related Neoplasia", 'AGA', 2024)
      ]},
      { id: 'eso-eoe', name: 'Eosinophilic Esophagitis', papers: [
        P('acg-eoe-2025', 'Eosinophilic Esophagitis', 'ACG', 2025, ['★'])
      ]},
      { id: 'eso-achalasia', name: 'Achalasia & Dysphagia', papers: [
        P('acg-achalasia-2020', 'Achalasia', 'ACG', 2020, ['★']),
        P('aga-esophageal-immunity', 'Esophageal Dysfunction Due to Disordered Immunity and Infection', 'AGA', null, ['CPU'])
      ]},
      { id: 'eso-physiology', name: 'Esophageal Physiology & Testing', papers: [
        P('acg-esophageal-phys-2020', 'Esophageal Physiologic Testing', 'ACG', 2020, ['★']),
        P('chicago-v4-2021', 'Chicago Classification v4.0: Esophageal Motility Disorders', 'CC', 2021, ['★']),
        P('chicago-hrm-protocol', 'Chicago Classification v4.0: Standard HRM Protocol Technical Review', 'CC', null),
        P('lyon-2-2024', 'Lyon Consensus 2.0: Modern Diagnosis of GERD', 'Lyon', 2024, ['★']),
        P('aga-flip-2025', 'Incorporating FLIP Into Esophageal Clinical Practice', 'AGA', 2025, ['CPU']),
        P('asge-esophageal-devices-2022', 'Devices for Esophageal Function Testing', 'ASGE', 2022)
      ]}
    ]
  },
  {
    id: 'stomach', name: 'Stomach, Duodenum & Gastroparesis', icon: '🟠',
    topics: [
      { id: 'sto-hpylori', name: 'H. pylori', papers: [
        P('acg-hpylori-2024', 'Treatment of Helicobacter pylori Infection', 'ACG', 2024, ['★']),
        P('aga-refractory-hpylori', 'Refractory Helicobacter pylori Infection', 'AGA', null, ['CPU'])
      ]},
      { id: 'sto-premalignancy', name: 'Gastric Premalignancy & Cancer Screening', papers: [
        P('acg-gastric-premalignant-2025', 'Gastric Premalignant Conditions', 'ACG', 2025, ['★']),
        P('aga-gastric-cancer-screening', 'Screening and Surveillance in Patients at High Risk for Gastric Cancer', 'AGA', null, ['CPU']),
        P('aga-atrophic-gastritis', 'Atrophic Gastritis', 'AGA', null, ['CPU']),
        P('aga-gastric-polyps-2026', 'Gastric Polyps', 'AGA', 2026, ['CPU'])
      ]},
      { id: 'sto-dyspepsia', name: 'Dyspepsia', papers: [
        P('acg-cag-dyspepsia-2017', 'Dyspepsia', 'ACG/CAG', 2017, ['★']),
        P('bsg-functional-dyspepsia-2022', 'Functional Dyspepsia', 'BSG', 2022)
      ]},
      { id: 'sto-sel', name: 'Subepithelial & Duodenal Lesions', papers: [
        P('acg-sel-2023', 'GI Subepithelial Lesions', 'ACG', 2023, ['★']),
        P('aga-sel-routine', 'Subepithelial Lesions Encountered During Routine Endoscopy', 'AGA', null, ['CPU']),
        P('aga-duodenal-lesions', 'Nonampullary Duodenal Lesions', 'AGA', null, ['CPU'])
      ]},
      { id: 'sto-gastroparesis', name: 'Gastroparesis', papers: [
        P('acg-gastroparesis-2022', 'Gastroparesis', 'ACG', 2022, ['★']),
        P('aga-gastroparesis-2025', 'Management of Gastroparesis', 'AGA', 2025, ['★']),
        P('aga-refractory-gp', 'Medically Refractory Gastroparesis', 'AGA', null, ['CPU']),
        P('aga-gpoem', 'G-POEM for Gastroparesis', 'AGA', null, ['CPU'])
      ]},
      { id: 'sto-nausea', name: 'Nausea & Vomiting Syndromes', papers: [
        P('aga-cvs', 'Cyclic Vomiting Syndrome', 'AGA', null, ['CPU']),
        P('aga-chs', 'Cannabinoid Hyperemesis Syndrome', 'AGA', null, ['CPU'])
      ]}
    ]
  },
  {
    id: 'small-bowel', name: 'Small Bowel & Malabsorption', icon: '🟡',
    topics: [
      { id: 'sb-celiac', name: 'Celiac & Enteropathies', papers: [
        P('acg-celiac-2023', 'Celiac Disease', 'ACG', 2023, ['★']),
        P('bsg-coeliac-2026', 'Adult Coeliac Disease', 'BSG', 2026),
        P('aga-celiac-monitoring', 'Diagnosis and Monitoring of Celiac Disease', 'AGA', null, ['CPU']),
        P('aga-refractory-celiac', 'Refractory Celiac Disease', 'AGA', null, ['CPU']),
        P('aga-seronegative-enteropathies', 'Seronegative Enteropathies', 'AGA', null, ['CPU'])
      ]},
      { id: 'sb-diarrhea', name: 'Chronic Diarrhea & Microscopic Colitis', papers: [
        P('bsg-chronic-diarrhea-2018', 'Investigation of Chronic Diarrhoea in Adults, Third Edition', 'BSG', 2018, ['★']),
        P('aga-functional-diarrhea-2019', 'Laboratory Evaluation of Functional Diarrhea and IBS-D', 'AGA', 2019),
        P('ueg-microscopic-colitis-2021', 'Microscopic Colitis', 'UEG', 2021)
      ]},
      { id: 'sb-bad', name: 'Bile Acid Diarrhea', papers: [
        P('cag-bad', 'Management of Bile Acid Diarrhea', 'CAG', null)
      ]},
      { id: 'sb-sibo', name: 'SIBO & Infectious Diarrhea', papers: [
        P('acg-sibo-2020', 'Small Intestinal Bacterial Overgrowth', 'ACG', 2020, ['★']),
        P('idsa-diarrhea-2017', 'Diagnosis and Management of Infectious Diarrhea', 'IDSA', 2017)
      ]},
      { id: 'sb-other', name: 'Other Small Bowel Conditions', papers: [
        P('aga-alpha-gal', 'Alpha-Gal Syndrome', 'AGA', null, ['CPU']),
        P('aga-sclerosing-mesenteritis', 'Sclerosing Mesenteritis', 'AGA', null, ['CPU']),
        P('aga-ostomy', 'Ostomy Management', 'AGA', null, ['CPU'])
      ]}
    ]
  },
  {
    id: 'motility', name: 'Motility, DGBI & Anorectal', icon: '🟢',
    topics: [
      { id: 'mot-ibs', name: 'Rome V & IBS', papers: [
        P('rome-v-2026', 'Rome V Online Diagnostic Criteria', 'Rome', 2026, ['★']),
        P('rome-v-series-2026', 'Rome V Journal Series', 'Gastro', 2026),
        P('acg-ibs-2021', 'Irritable Bowel Syndrome', 'ACG', 2021, ['★']),
        P('aga-diet-ibs', 'Diet in IBS', 'AGA', null, ['CPU'])
      ]},
      { id: 'mot-ibs-rx', name: 'IBS-C & IBS-D Treatment', papers: [
        P('aga-ibs-c', 'Pharmacological Management of IBS-C', 'AGA', null),
        P('aga-ibs-d', 'Pharmacological Management of IBS-D', 'AGA', null)
      ]},
      { id: 'mot-constipation', name: 'Chronic Constipation', papers: [
        P('aga-acg-constipation-2023', 'Pharmacological Management of Chronic Idiopathic Constipation', 'AGA/ACG', 2023, ['★']),
        P('aga-refractory-constipation-2026', 'Refractory Constipation', 'AGA', 2026, ['CPU'])
      ]},
      { id: 'mot-bloating', name: 'Bloating, Belching & Hypermobile EDS', papers: [
        P('aga-bloating', 'Belching, Abdominal Bloating, and Distention', 'AGA', null, ['CPU']),
        P('aga-eds', 'GI Symptoms in Hypermobile Ehlers-Danlos Syndrome', 'AGA', null, ['CPU'])
      ]},
      { id: 'mot-pseudo-obstruction', name: 'Colonic Pseudo-Obstruction & Volvulus', papers: [
        P('asge-pseudo-volvulus-2020', 'Acute Colonic Pseudo-Obstruction and Colonic Volvulus', 'ASGE', 2020)
      ]},
      { id: 'mot-anorectal', name: 'Anorectal Disorders', papers: [
        P('acg-anorectal-2021', 'Benign Anorectal Disorders', 'ACG', 2021, ['★']),
        P('iapwg-anorectal-testing-2020', 'Anorectal Testing Protocol and London Classification', 'IAPWG', 2020),
        P('ascrs-hemorrhoids-2024', 'Hemorrhoids', 'ASCRS', 2024),
        P('aga-hemorrhoids-2026', 'Diagnosis and Treatment of Hemorrhoids', 'AGA', 2026, ['CPU']),
        P('ascrs-anal-fissures', 'Anal Fissures', 'ASCRS', null)
      ]},
      { id: 'mot-pelvic-floor', name: 'Pelvic Floor & Continence Surgery', papers: [
        P('ascrs-fecal-incontinence', 'Fecal Incontinence', 'ASCRS', null),
        P('ascrs-rectal-prolapse', 'Rectal Prolapse', 'ASCRS', null),
        P('ascrs-fistula', 'Anorectal Abscess and Fistula-in-Ano', 'ASCRS', null)
      ]}
    ]
  },
  {
    id: 'colon', name: 'Colon: Benign Disease & C. difficile', icon: '🔵',
    topics: [
      { id: 'colon-diverticulitis', name: 'Diverticulitis', papers: [
        P('acg-diverticulitis-2026', 'Colonic Diverticulitis', 'ACG', 2026, ['★'])
      ]},
      { id: 'colon-ischemia', name: 'Colon Ischemia', papers: [
        P('acg-ischemia-2015', 'Colon Ischemia', 'ACG', 2015)
      ]},
      { id: 'colon-cdiff', name: 'C. difficile & FMT', papers: [
        P('acg-cdiff-2021', 'Clostridioides difficile Infection', 'ACG', 2021, ['★']),
        P('aga-cdiff-2026', 'Clostridioides difficile Infection in Adults', 'AGA', 2026, ['CPU']),
        P('aga-fmt-2024', 'Fecal Microbiota-Based Therapies for Select GI Diseases', 'AGA', 2024)
      ]},
      { id: 'colon-strictures', name: 'Colonic Strictures', papers: [
        P('asge-strictures-2026', 'Endoscopic Management of Benign and Malignant Colonic Strictures', 'ASGE', 2026)
      ]}
    ]
  },
  {
    id: 'crc', name: 'CRC Screening & Hereditary Syndromes', icon: '🟣',
    topics: [
      { id: 'crc-screening', name: 'Screening & Noninvasive Tests', papers: [
        P('acg-crc-2021', 'Colorectal Cancer Screening', 'ACG', 2021, ['★']),
        P('usmstf-age-2022', 'Colorectal Cancer Screening Age Update', 'USMSTF', 2022),
        P('aga-noninvasive-crc', 'Noninvasive Colorectal Cancer Screening', 'AGA', null, ['CPU']),
        P('aga-blood-crc-2025', 'Blood Tests for Colorectal Cancer Screening', 'AGA', 2025, ['CPU'])
      ]},
      { id: 'crc-surveillance', name: 'Post-Polypectomy & Post-Resection Surveillance', papers: [
        P('usmstf-polypectomy-2020', 'Follow-Up After Colonoscopy and Polypectomy', 'USMSTF', 2020, ['★']),
        P('aga-risk-stratification', 'CRC Screening and Post-Polypectomy Risk Stratification', 'AGA', null, ['CPU']),
        P('usmstf-post-resection-2016', 'Colonoscopy Surveillance After Colorectal Cancer Resection', 'USMSTF', 2016)
      ]},
      { id: 'crc-hereditary', name: 'Hereditary Syndromes', papers: [
        P('acg-polyposis-2026', 'Adenomatous Colorectal Polyposis Syndromes', 'ACG', 2026, ['★']),
        P('usmstf-serrated-2026', 'Serrated Polyposis Syndrome Review and Consensus Statement', 'USMSTF', 2026),
        P('nccn-genetic-risk', 'Genetic/Familial High-Risk Assessment Guidelines', 'NCCN', null)
      ]}
    ]
  },
  {
    id: 'ibd', name: 'IBD', icon: '🟤',
    topics: [
      { id: 'ibd-crohns', name: "Crohn's Disease", papers: [
        P('acg-crohns-2025', "Crohn's Disease in Adults", 'ACG', 2025, ['★']),
        P('aga-crohns-living-2025', "Pharmacological Management of Moderate-to-Severe Crohn's Disease", 'AGA', 2025, ['★', 'Living']),
        P('ecco-crohns-medical-2024', "Crohn's Disease: Medical Treatment", 'ECCO', 2024),
        P('ecco-crohns-surgical-2024', "Crohn's Disease: Surgical Treatment", 'ECCO', 2024)
      ]},
      { id: 'ibd-uc', name: 'Ulcerative Colitis', papers: [
        P('acg-uc-2025', 'Ulcerative Colitis in Adults', 'ACG', 2025, ['★']),
        P('aga-uc-living-2024', 'Pharmacological Management of Moderate-to-Severe Ulcerative Colitis', 'AGA', 2024, ['★', 'Living']),
        P('ecco-uc-medical-2026', 'Ulcerative Colitis: Medical Treatment', 'ECCO', 2026),
        P('ecco-uc-surgical', 'Ulcerative Colitis: Surgical Treatment', 'ECCO', null)
      ]},
      { id: 'ibd-biomarkers', name: 'Biomarkers & Pouch Disorders', papers: [
        P('aga-biomarkers-uc-2023', 'Biomarkers in Ulcerative Colitis', 'AGA', 2023),
        P('aga-biomarkers-crohns-2023', "Biomarkers in Crohn's Disease", 'AGA', 2023),
        P('aga-pouchitis-2024', 'Pouchitis and Inflammatory Pouch Disorders', 'AGA', 2024)
      ]},
      { id: 'ibd-inpatient', name: 'Inpatient & General IBD', papers: [
        P('aga-inpatient-ibd-2025', 'Inpatient Management of Adults With IBD', 'AGA', 2025, ['★', 'CPU']),
        P('bsg-ibd-2025', 'IBD in Adults', 'BSG', 2025)
      ]},
      { id: 'ibd-monitoring', name: 'Diagnosis, Monitoring & Endoscopy', papers: [
        P('ecco-diagnostics-1-2025', 'Diagnostics and Monitoring, Part 1', 'ECCO–ESGAR–ESP–IBUS', 2025),
        P('ecco-diagnostics-2-2025', 'Diagnostics and Monitoring, Part 2', 'ECCO–ESGAR–ESP–IBUS', 2025),
        P('aga-endoscopic-scoring', 'Endoscopic Scoring Systems in IBD', 'AGA', null, ['CPU']),
        P('aga-ius-ibd', 'Intestinal Ultrasound in IBD', 'AGA', null, ['CPU']),
        P('aga-advanced-ibd', 'Advanced Therapeutic Endoscopy in IBD', 'AGA', null, ['CPU']),
        P('bsg-ibd-surveillance-2026', 'Colorectal Surveillance in IBD', 'BSG', 2026, ['★']),
        P('ecco-ibd-malignancies', 'IBD and Malignancies', 'ECCO', null),
        P('aga-ibd-malignancy', 'IBD in Patients With Malignancy', 'AGA', null, ['CPU'])
      ]},
      { id: 'ibd-preventive', name: 'Preventive Care, Pregnancy & Infections', papers: [
        P('acg-preventive-ibd-2025', 'Preventive Care in IBD', 'ACG', 2025, ['★']),
        P('global-pregnancy-ibd-2025', 'Pregnancy in IBD', 'Global Consensus', 2025, ['★']),
        P('ecco-pregnancy', 'Sexuality, Fertility, Pregnancy, and Lactation', 'ECCO', null),
        P('ecco-infections-2026', 'Prevention, Diagnosis, and Management of Infections in IBD', 'ECCO', 2026),
        P('aga-cdiff-ibd-2026', 'Clostridioides difficile Infection in IBD', 'AGA', 2026, ['CPU']),
        P('aga-ibd-vaccines', 'Noncolorectal Cancer Screening and Vaccinations in IBD', 'AGA', null, ['CPU']),
        P('ecco-eim', 'Extraintestinal Manifestations', 'ECCO', null)
      ]},
      { id: 'ibd-practical', name: 'Diet, Pain & Practical Management', papers: [
        P('aga-diet-ibd', 'Diet and Nutritional Therapies in IBD', 'AGA', null, ['CPU']),
        P('aga-pain-ibd', 'Pain Management in IBD', 'AGA', null, ['CPU']),
        P('aga-functional-ibd', 'Functional GI Symptoms in IBD', 'AGA', null, ['CPU']),
        P('aga-biologics-switching', 'Switching Between Biologics and Biosimilars in IBD', 'AGA', null, ['CPU'])
      ]}
    ]
  },
  {
    id: 'liver-chronic', name: 'Liver: Chronic Disease & Viral Hepatitis', icon: '🟩',
    topics: [
      { id: 'liv-lft', name: 'Abnormal LFTs & Fibrosis Assessment', papers: [
        P('acg-lft-2017', 'Evaluation of Abnormal Liver Chemistries', 'ACG', 2017, ['★']),
        P('aasld-blood-nits', 'Blood-Based Noninvasive Assessment of Hepatic Fibrosis and Steatosis', 'AASLD', null),
        P('aasld-imaging-nits', 'Imaging-Based Noninvasive Assessment of Hepatic Fibrosis and Steatosis', 'AASLD', null),
        P('aasld-nits-ph', 'Noninvasive Assessment of Portal Hypertension', 'AASLD', null)
      ]},
      { id: 'liv-masld', name: 'MASLD', papers: [
        P('aasld-nafld-2023', 'NAFLD Foundational Practice Guidance (with MASLD nomenclature update)', 'AASLD', 2023, ['★']),
        P('aasld-resmetirom-2024', 'Resmetirom Therapy: MASLD Practice Guidance Update', 'AASLD', 2024),
        P('aasld-semaglutide-2025', 'Semaglutide Therapy for MASH: Practice Guidance Update', 'AASLD', 2025),
        P('easl-masld', 'MASLD Clinical Practice Guidelines', 'EASL–EASD–EASO', null),
        P('aga-lean-nafld', 'Lean NAFLD', 'AGA', null, ['CPU'])
      ]},
      { id: 'liv-ald', name: 'Alcohol-Associated Liver Disease', papers: [
        P('acg-ald-2024', 'Alcohol-Associated Liver Disease', 'ACG', 2024, ['★'])
      ]},
      { id: 'liv-autoimmune', name: 'Autoimmune Liver Disease', papers: [
        P('aasld-aga-pbc-2026', 'Primary Biliary Cholangitis', 'AASLD/AGA', 2026, ['★']),
        P('aasld-psc-2022', 'Primary Sclerosing Cholangitis and Cholangiocarcinoma', 'AASLD', 2022),
        P('easl-aih-2025', 'Autoimmune Hepatitis', 'EASL', 2025),
        P('aasld-aih', 'Autoimmune Hepatitis Practice Guidance', 'AASLD', null)
      ]},
      { id: 'liv-metabolic', name: 'Metabolic & Drug-Induced Liver Disease', papers: [
        P('acg-hemochromatosis-2019', 'Hereditary Hemochromatosis', 'ACG', 2019),
        P('easl-haemochromatosis', 'Haemochromatosis', 'EASL', null),
        P('aasld-wilson-2022', 'Wilson Disease', 'AASLD', 2022),
        P('easl-wilson-2025', "Wilson's Disease", 'EASL–ERN', 2025),
        P('aasld-dili', 'Drug, Herbal, and Dietary Supplement-Induced Liver Injury', 'AASLD', null),
        P('aga-porphyrias', 'Acute Hepatic Porphyrias', 'AGA', null, ['CPU'])
      ]},
      { id: 'liv-biopsy', name: 'Liver Biopsy', papers: [
        P('aasld-liver-biopsy', 'Liver Biopsy Resources and Expert-Based Practice Opinion', 'AASLD', null)
      ]},
      { id: 'liv-hbv', name: 'Hepatitis B', papers: [
        P('aasld-idsa-hbv-2025', 'Treatment of Chronic Hepatitis B', 'AASLD/IDSA', 2025, ['★']),
        P('aasld-hbv-2018', 'Prevention, Diagnosis, and Treatment of Chronic Hepatitis B (background topics)', 'AASLD', 2018),
        P('aga-hbv-reactivation-2025', 'Prevention and Treatment of Hepatitis B Reactivation in At-Risk Individuals', 'AGA', 2025, ['★'])
      ]},
      { id: 'liv-hcv', name: 'Hepatitis C', papers: [
        P('aasld-idsa-hcv-testing', 'HCV Guidance: Testing, Evaluation, and Monitoring', 'AASLD–IDSA', null, ['★']),
        P('aasld-idsa-hcv-initial', 'HCV Guidance: Initial Treatment', 'AASLD–IDSA', null, ['★']),
        P('aasld-idsa-hcv-retreatment', 'HCV Guidance: Retreatment and Treatment Failure', 'AASLD–IDSA', null),
        P('aasld-idsa-hcv-decomp', 'HCV Guidance: Decompensated Cirrhosis and Transplantation', 'AASLD–IDSA', null),
        P('aasld-idsa-hcv-special', 'HCV Guidance: Pregnancy, Renal, Coinfection, and Special Populations', 'AASLD–IDSA', null)
      ]}
    ]
  },
  {
    id: 'cirrhosis', name: 'Cirrhosis, Portal HTN, HCC & Transplant', icon: '🟥',
    topics: [
      { id: 'cir-preventive', name: 'Preventive Care in Cirrhosis', papers: [
        P('acg-cirrhosis-preventive-2026', 'Preventive Care for Patients With Cirrhosis', 'ACG', 2026, ['★'])
      ]},
      { id: 'cir-ph', name: 'Portal Hypertension & Varices', papers: [
        P('aasld-ph-varices-2024', 'Portal Hypertension and Varices in Cirrhosis', 'AASLD', 2024, ['★']),
        P('asge-varices-2026', 'Esophageal and Gastric Varices in Cirrhosis', 'ASGE', 2026, ['★']),
        P('baveno-viii-2026', 'Baveno VIII: Consensus in Portal Hypertension', 'Baveno', 2026),
        P('aasld-tips-embolization', 'TIPS, Variceal Embolization, and Retrograde Transvenous Obliteration in Variceal Hemorrhage', 'AASLD', null),
        P('easl-tips-2025', 'TIPS', 'EASL', 2025)
      ]},
      { id: 'cir-ascites', name: 'Ascites, SBP, HRS & AKI', papers: [
        P('aasld-ascites-2021', 'Ascites, Spontaneous Bacterial Peritonitis, and Hepatorenal Syndrome', 'AASLD', 2021, ['★']),
        P('adqi-aki-2024', 'Acute Kidney Injury in Patients With Cirrhosis', 'ADQI–ICA', 2024),
        P('aga-aki-cirrhosis', 'Acute Kidney Injury in Cirrhosis', 'AGA', null, ['CPU']),
        P('aga-vasoactive-albumin', 'Vasoactive Drugs and Intravenous Albumin in Cirrhosis', 'AGA', null, ['CPU'])
      ]},
      { id: 'cir-he-aclf', name: 'Hepatic Encephalopathy & ACLF', papers: [
        P('acg-he-2026', 'Hepatic Encephalopathy', 'ACG', 2026, ['★']),
        P('aasld-aclf-2024', 'Acute-on-Chronic Liver Failure and Critically Ill Patients With Cirrhosis', 'AASLD', 2024)
      ]},
      { id: 'cir-alf', name: 'Acute Liver Failure', papers: [
        P('acg-alf-2023', 'Acute Liver Failure', 'ACG', 2023, ['★'])
      ]},
      { id: 'cir-vascular', name: 'Vascular Liver & Coagulation', papers: [
        P('aasld-vascular', 'Vascular Liver Disorders, Portal Vein Thrombosis, and Procedural Bleeding', 'AASLD', null),
        P('aga-pvt-cirrhosis', 'Portal Vein Thrombosis in Patients With Cirrhosis', 'AGA', null, ['CPU']),
        P('aga-coagulation-cirrhosis', 'Coagulation in Cirrhosis', 'AGA', null, ['CPU'])
      ]},
      { id: 'cir-periop', name: 'Perioperative Risk & Nutrition', papers: [
        P('acg-periop-cirrhosis-2025', 'Perioperative Risk Assessment and Management in Patients With Cirrhosis', 'ACG', 2025),
        P('aga-surgical-risk-cirrhosis', 'Surgical Risk Assessment and Perioperative Management in Cirrhosis', 'AGA', null, ['CPU']),
        P('acg-malnutrition-liver-2025', 'Malnutrition and Nutritional Recommendations in Liver Disease', 'ACG', 2025),
        P('aasld-frailty-sarcopenia', 'Malnutrition, Frailty, and Sarcopenia in Cirrhosis', 'AASLD', null),
        P('aasld-palliative-cirrhosis', 'Palliative Care and Symptom-Based Management in Decompensated Cirrhosis', 'AASLD', null)
      ]},
      { id: 'cir-lesions', name: 'Focal Liver Lesions & LI-RADS', papers: [
        P('acg-fll-2024', 'Focal Liver Lesions', 'ACG', 2024, ['★']),
        P('acr-lirads-ct', 'LI-RADS CT/MRI Diagnostic Resources', 'ACR', null),
        P('acr-lirads-us', 'LI-RADS Ultrasound Surveillance Resources', 'ACR', null),
        P('acr-lirads-tra', 'LI-RADS Treatment-Response Assessment Resources', 'ACR', null)
      ]},
      { id: 'cir-hcc', name: 'HCC', papers: [
        P('aasld-hcc-2023', 'Hepatocellular Carcinoma Practice Guidance', 'AASLD', 2023, ['★']),
        P('aasld-hcc-update-2025', 'Critical Update to HCC Practice Guidance', 'AASLD', 2025)
      ]},
      { id: 'cir-transplant', name: 'Liver Transplant', papers: [
        P('aasld-ast-candidate-2025', 'Adult Liver Transplantation: Candidate Evaluation', 'AASLD/AST', 2025),
        P('aasld-ast-graft-2025', 'Adult Liver Transplantation: Graft-Related Complications', 'AASLD/AST', 2025),
        P('aasld-ast-nongraft-2025', 'Adult Liver Transplantation: Non-Graft-Related Complications', 'AASLD/AST', 2025),
        P('optn-allocation', 'Current Liver Allocation and Relevant Transplant Policies', 'OPTN', null)
      ]}
    ]
  },
  {
    id: 'pancreas-biliary', name: 'Pancreas & Biliary', icon: '🟧',
    topics: [
      { id: 'pb-ap', name: 'Acute Pancreatitis & Necrosis', papers: [
        P('acg-ap-2024', 'Acute Pancreatitis', 'ACG', 2024, ['★']),
        P('aga-pancreatic-necrosis', 'Pancreatic Necrosis', 'AGA', null, ['CPU'])
      ]},
      { id: 'pb-cp', name: 'Chronic Pancreatitis & EPI', papers: [
        P('acg-cp-2020', 'Chronic Pancreatitis', 'ACG', 2020, ['★']),
        P('aga-recurrent-cp', 'Endoscopic Approach to Recurrent Acute and Chronic Pancreatitis', 'AGA', null, ['CPU']),
        P('aga-epi', 'Exocrine Pancreatic Insufficiency', 'AGA', null, ['CPU']),
        P('asge-cp-summary-2024', 'Endoscopy in Chronic Pancreatitis: Summary and Recommendations', 'ASGE', 2024),
        P('asge-cp-methods-2025', 'Endoscopy in Chronic Pancreatitis: Methodology and Evidence Review', 'ASGE', 2025)
      ]},
      { id: 'pb-cysts', name: 'Pancreatic Cysts & IPMN', papers: [
        P('acg-cysts-2018', 'Pancreatic Cysts (check for forthcoming replacement)', 'ACG', 2018, ['★']),
        P('kyoto-ipmn-2024', 'International Kyoto Guidelines: IPMN', 'Kyoto', 2024)
      ]},
      { id: 'pb-aip', name: 'Autoimmune Pancreatitis & IgG4', papers: [
        P('intl-aip-dx', 'Autoimmune Pancreatitis Diagnostic Criteria', 'Intl Consensus', null),
        P('intl-aip-rx', 'Treatment of Autoimmune Pancreatitis', 'Intl Consensus', null),
        P('euro-igg4', 'IgG4-Related Digestive Disease', 'European Guideline', null)
      ]},
      { id: 'pb-panc-screening', name: 'Pancreatic Cancer Screening', papers: [
        P('asge-panc-screening', 'Pancreatic Cancer Screening in Individuals With Genetic Susceptibility', 'ASGE', null),
        P('caps-surveillance', 'Pancreatic Cancer Surveillance in High-Risk Individuals', 'CAPS', null)
      ]},
      { id: 'pb-biliary', name: 'Biliary Stones, Cholangitis & Strictures', papers: [
        P('asge-choledocholithiasis-2019', 'Choledocholithiasis', 'ASGE', 2019, ['★']),
        P('asge-cholangitis-2021', 'Cholangitis', 'ASGE', 2021, ['★']),
        P('tokyo-cholangitis', 'Acute Cholangitis and Cholecystitis', 'Tokyo', null),
        P('acg-biliary-strictures-2023', 'Biliary Strictures', 'ACG', 2023, ['★']),
        P('asge-biliary-malignancy-2023', 'Diagnosis of Malignancy in Biliary Strictures of Undetermined Etiology', 'ASGE', 2023),
        P('esge-biliary-strictures-2026', 'Biliary Stricture Management', 'ESGE', 2026),
        P('euro-gallbladder-polyps', 'Management and Follow-Up of Gallbladder Polyps', 'European Societies', null)
      ]},
      { id: 'pb-ercp-eus', name: 'ERCP & EUS', papers: [
        P('asge-pep-2023', 'Post-ERCP Pancreatitis Prevention', 'ASGE', 2023, ['★']),
        P('esge-ercp-ae', 'ERCP-Related Adverse Events', 'ESGE', null),
        P('asge-solid-pancreatic-2024', 'Solid Pancreatic Masses', 'ASGE', 2024),
        P('asge-therapeutic-eus-2024', 'Therapeutic EUS in Biliary Tract Disorders', 'ASGE', 2024)
      ]}
    ]
  },
  {
    id: 'nutrition', name: 'Nutrition & Intestinal Failure', icon: '🥗',
    topics: [
      { id: 'nut-malnutrition', name: 'Malnutrition & Refeeding', papers: [
        P('aspen-refeeding-2020', 'Refeeding Syndrome Consensus Recommendations', 'ASPEN', 2020, ['★']),
        P('aspen-malnutrition', 'Malnutrition Assessment and Nutrition-Support Standards', 'ASPEN', null),
        P('espen-micronutrients-2024', 'Practical Short Micronutrient Guideline', 'ESPEN', 2024)
      ]},
      { id: 'nut-enteral', name: 'Enteral Access & Feeding Tubes', papers: [
        P('aspen-enteral-access', 'Enteral Access and Enteral Feeding Resources', 'ASPEN', null),
        P('asge-peg-2025', 'Gastrostomy Feeding Tubes', 'ASGE', 2025, ['★']),
        P('esge-enteral-tubes', 'Endoscopic Management of Enteral Tubes', 'ESGE', null),
        P('aga-enteral-access', 'Endoscopic Enteral Access Methods', 'AGA', null, ['CPU'])
      ]},
      { id: 'nut-pn', name: 'Parenteral Nutrition & Intestinal Failure', papers: [
        P('aspen-pn-when', 'When Is Parenteral Nutrition Appropriate?', 'ASPEN', null),
        P('aspen-home-pn', 'Central Venous Access and Home Parenteral Nutrition Resources', 'ASPEN', null),
        P('espen-home-enteral-2022', 'Home Enteral Nutrition', 'ESPEN', 2022),
        P('espen-home-pn-2023', 'Home Parenteral Nutrition', 'ESPEN', 2023),
        P('espen-cif-2023', 'Chronic Intestinal Failure in Adults', 'ESPEN', 2023),
        P('aspen-fistulas', 'Nutrition Support in Adults With Enterocutaneous Fistulas', 'ASPEN–FELANPE', null),
        P('aga-sbs', 'Short Bowel Syndrome', 'AGA', null, ['CPU'])
      ]},
      { id: 'nut-disease', name: 'Disease-Specific Nutrition', papers: [
        P('espen-ibd-2023', 'Clinical Nutrition in IBD', 'ESPEN', 2023),
        P('espen-pancreatitis-2024', 'Clinical Nutrition in Acute and Chronic Pancreatitis', 'ESPEN', 2024)
      ]},
      { id: 'nut-practical', name: 'Practical Nutrition Archive', papers: [
        P('sbs-toolkit-1-2022', 'Adult Short Bowel Patient Toolkit, Part I: Nutrition and Hydration Therapy', 'Practical Gastro', 2022),
        P('sbs-toolkit-2-2022', 'Adult Short Bowel Patient Toolkit, Part II: Pharmacologic Interventions', 'Practical Gastro', 2022),
        P('high-output-ostomy-2022', 'High Output Ileostomies: Preventing Acute Kidney Injury', 'Practical Gastro', 2022),
        P('micronutrients-bypass-2022', 'Micronutrients and Gastric Bypass: What We Have Learned', 'Practical Gastro', 2022),
        P('pei-50-ways-2022', '50 Ways to Treat Pancreatic Insufficiency', 'Practical Gastro', 2022),
        P('peg-button-2021', 'PEG or PEG Button Replacement: Willy-Nilly or Evidence-Based?', 'Practical Gastro', 2021),
        P('enteral-series-2019', 'Enteral Feeding / Enteral Nutrition Series, Parts I–IV', 'Practical Gastro', 2019),
        P('pei-enteral-2018', 'Pancreatic Exocrine Insufficiency and Enteral Feeding: A Practical Guide With Case Studies', 'Practical Gastro', 2018),
        P('protein-losing-2017', 'Protein-Losing Enteropathy: Diagnosis and Management', 'Practical Gastro', 2017),
        P('panc-resection-nutrition-2016', 'Pancreatic Resection: Nutritional Implications and Long-Term Follow-Up', 'Practical Gastro', 2016),
        P('clogged-tubes-2014', "Clogged Feeding Tubes: A Clinician's Thorn", 'Practical Gastro', 2014),
        P('uva-vitamins', 'UVA Nutrition Archive: Vitamin and Trace-Element Deficiency Articles', 'UVA', null),
        P('uva-fistulas', 'UVA Nutrition Archive: Chyle Leaks, Fistulas, PN Complications, and D-Lactic Acidosis', 'UVA', null),
        P('uva-tubes', 'UVA Nutrition Archive: Buried Bumper Syndrome and Feeding-Tube Troubleshooting', 'UVA', null)
      ]}
    ]
  },
  {
    id: 'oncology', name: 'GI Oncology & Special Populations', icon: '🎗️',
    topics: [
      { id: 'onc-pregnancy', name: 'Pregnancy & Reproductive Health', papers: [
        P('aga-pregnancy-gi', 'Pregnancy-Related GI and Liver Disease', 'AGA', null, ['CPU']),
        P('aasld-reproductive', 'Reproductive Health and Liver Disease', 'AASLD', null)
      ]},
      { id: 'onc-older', name: 'Older Adults & Comorbidity', papers: [
        P('aga-older-surveillance-2026', 'Surveillance of Esophageal and Colorectal Premalignant Conditions in Older Adults', 'AGA', 2026, ['CPU'])
      ]},
      { id: 'onc-ici', name: 'Immunotherapy Toxicity', papers: [
        P('aga-ici-colitis', 'Immune Checkpoint Inhibitor Colitis and Hepatitis', 'AGA', null, ['CPU'])
      ]},
      { id: 'onc-nccn', name: 'GI Oncology Guidelines', papers: [
        P('nccn-esophageal', 'Esophageal and Esophagogastric Junction Cancers', 'NCCN', null),
        P('nccn-gastric', 'Gastric Cancer', 'NCCN', null),
        P('nccn-colorectal', 'Colon and Rectal Cancer', 'NCCN', null),
        P('nccn-pancreatic', 'Pancreatic Adenocarcinoma', 'NCCN', null),
        P('nccn-hpb', 'Hepatocellular Carcinoma and Biliary Tract Cancers', 'NCCN', null),
        P('nccn-net', 'Neuroendocrine and Adrenal Tumors', 'NCCN', null),
        P('nccn-gist', 'Gastrointestinal Stromal Tumors', 'NCCN', null)
      ]}
    ]
  },
  {
    id: 'endoscopy-technique', name: 'Endoscopy Technique & Quality', icon: '🔬',
    topics: [
      { id: 'et-upper', name: 'Upper Endoscopy & Biopsy', papers: [
        P('bsg-ugi-2026', 'Best Practice for Upper GI Endoscopy', 'BSG/AUGIS', 2026, ['★']),
        P('aga-high-quality-upper', 'High-Quality Upper Endoscopy', 'AGA', null, ['CPU']),
        P('esge-sampling-upper-2021', 'Endoscopic Tissue Sampling, Part 1: Upper GI and HPB Tracts', 'ESGE', 2021, ['★']),
        P('bsg-biopsy-sampling-2025', 'Biopsy Sampling During Upper GI Endoscopy', 'BSG/AUGIS/RCPath', 2025)
      ]},
      { id: 'et-polypectomy', name: 'Colonoscopy & Polypectomy', papers: [
        P('usmstf-removal-2020', 'Endoscopic Removal of Colorectal Lesions', 'USMSTF', 2020, ['★']),
        P('esge-polypectomy-emr-2024', 'Colorectal Polypectomy and EMR', 'ESGE', 2024),
        P('usmstf-malignant-polyps-2020', 'Endoscopic Recognition and Management of Malignant Colorectal Polyps', 'USMSTF', 2020, ['★']),
        P('aga-tailored-polypectomy', 'Appropriate and Tailored Polypectomy', 'AGA', null, ['CPU']),
        P('aga-early-crc', 'Endoscopic Resection for Early Colorectal Cancer', 'AGA', null, ['CPU']),
        P('aga-lifting-agents', 'Endoscopic Lifting Agents', 'AGA', null, ['CPU']),
        P('esge-sampling-lower-2021', 'Endoscopic Tissue Sampling, Part 2: Lower GI Tract', 'ESGE', 2021)
      ]},
      { id: 'et-advanced', name: 'Advanced Resection', papers: [
        P('aga-eftr', 'Endoscopic Full-Thickness Resection for Subepithelial Lesions', 'AGA', null, ['CPU']),
        P('aga-esd-us', 'Endoscopic Submucosal Dissection in the United States', 'AGA', null, ['CPU']),
        P('aga-post-esd', 'Post-ESD Surveillance for Early GI Neoplasia', 'AGA', null, ['CPU'])
      ]},
      { id: 'et-capsule', name: 'Capsule & Deep Enteroscopy', papers: [
        P('esge-capsule-dae-2022', 'Small-Bowel Capsule Endoscopy and Device-Assisted Enteroscopy', 'ESGE', 2022, ['★']),
        P('asge-capsule-quality-2022', 'Quality Indicators for Capsule Endoscopy and Deep Enteroscopy', 'ASGE', 2022),
        P('asge-capsule-tech-2021', 'Video Capsule Endoscopy (Technology Report)', 'ASGE', 2021)
      ]},
      { id: 'et-devices', name: 'Devices & Electrosurgery', papers: [
        P('asge-electrosurgery-2025', 'Electrosurgical Generators (Technology Report)', 'ASGE', 2025, ['★']),
        P('aga-electrosurgery-2026', 'Electrosurgery in Therapeutic Endoscopy', 'AGA', 2026, ['CPU']),
        P('asge-closure-2026', 'Endoscopic Closure Devices, With Videos', 'ASGE', 2026),
        P('asge-stricture-tools-2025', 'Tools for Endoscopic Management of Benign Luminal GI Strictures', 'ASGE', 2025),
        P('asge-stents-2025', 'Enteral Stent Placement for Benign and Malignant Disease', 'ASGE', 2025),
        P('asge-biliary-stents-2023', 'Biliary and Pancreatic Stents', 'ASGE', 2023),
        P('asge-guidewires-2023', 'Guidewires in GI Endoscopy', 'ASGE', 2023),
        P('asge-won-2023', 'Endoscopic Therapies for Walled-Off Necrosis', 'ASGE', 2023),
        P('asge-pbd-tools-2026', 'Tools for Benign Pancreaticobiliary Dilation', 'ASGE', 2026),
        P('asge-esd-tech-2026', 'Endoscopic Submucosal Dissection, With Videos', 'ASGE', 2026)
      ]},
      { id: 'et-quality', name: 'Quality Indicators', papers: [
        P('asge-acg-quality-common-2024', 'Quality Indicators Common to All GI Endoscopic Procedures', 'ASGE/ACG', 2024, ['★']),
        P('asge-acg-quality-colon-2024', 'Quality Indicators for Colonoscopy', 'ASGE/ACG', 2024, ['★']),
        P('asge-acg-quality-upper-2025', 'Quality Indicators for Upper GI Endoscopy', 'ASGE/ACG', 2025, ['★']),
        P('asge-acg-quality-eus-2025', 'Quality Indicators for EUS', 'ASGE/ACG', 2025),
        P('asge-acg-quality-ercp-2026', 'Quality Indicators for ERCP', 'ASGE/ACG', 2026)
      ]},
      { id: 'et-optical', name: 'Optical Diagnosis', papers: [
        P('esge-optical-training-2020', 'Curriculum for Optical Diagnosis Training in Europe', 'ESGE', 2020),
        P('esge-optical-esophageal-2025', 'Curriculum for Optical Diagnosis of Esophageal Neoplasia and Precursor Lesions', 'ESGE', 2025),
        P('esge-curricula', 'Endoscopy Curricula Collection', 'ESGE', null),
        P('endoscopy-campus-class', 'Endoscopy Campus: Classification and Image Reference Collection', 'Endoscopy Campus', null),
        P('endoscopy-campus-eg', 'Endoscopy Campus: Esophageal and Gastric Classification Pages', 'Endoscopy Campus', null),
        P('endoscopy-campus-crc', 'Endoscopy Campus: Colorectal Morphology and Optical Diagnosis Pages', 'Endoscopy Campus', null),
        P('endoscopy-campus-ibd', 'Endoscopy Campus: IBD Endoscopic Scoring Pages', 'Endoscopy Campus', null)
      ]},
      { id: 'et-video', name: 'Video Tips & Techniques', papers: [
        P('video-specimen', 'Specimen Retrieval and Orientation (Video Tip)', 'ASGE/VideoGIE', null),
        P('video-inspection', 'Mucosal Inspection and Insufflation (Video Tip)', 'ASGE/VideoGIE', null),
        P('video-foreign-body', 'Foreign-Body Retrieval and Dilation (Video Tip)', 'ASGE/VideoGIE', null),
        P('video-surgical-anatomy', 'Altered Surgical Anatomy (Video Tip)', 'ASGE/VideoGIE', null),
        P('video-peg-troubleshooting', 'PEG Troubleshooting (Video Tip)', 'ASGE/VideoGIE', null),
        P('video-tattooing', 'Tattooing (Video Tip)', 'ASGE/VideoGIE', null),
        P('video-pedunculated', 'Pedunculated-Polyp Resection (Video Tip)', 'ASGE/VideoGIE', null),
        P('video-defect-closure', 'Defect Inspection, Hemostasis, and Perforation Closure (Video Tip)', 'ASGE/VideoGIE', null),
        P('video-guidewire-stent', 'Guidewire Handling, Stent Placement, and Stent Removal (Video Tip)', 'ASGE/VideoGIE', null)
      ]}
    ]
  }
];
