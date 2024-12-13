/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Bang Burger Co.',
    position: 'Co-Founder & Head Chef',
    url: 'https://www.instagram.com/bangburgerco.id?igsh=bXR4MnBhMHV3NWpu',
    startDate: '2023 sep 21',
    endDate: '2024 jan 10',
    summary: 'my collage entrepreneurship activity',
    highlights: [
      'no longer existent.',
      'this project was done by me and my teammates, i assisted in the development, creation and planning for this project.',
      'i was also the only cook and the test seller for our products to great success.',
      'our product and business idea was selected to be the best and most feasible and highest chance of success within my class.',
      'our product was customizable burgers and unique special burgers that was sold at a reasonable price for students and teachers in the BINUS international area.',
    ],
  },
  {
    name: 'GuacaRasa',
    position: 'hired chef',
    url: 'https://www.instagram.com/guacarasa?igsh=OWZhejBpbXN1cGp0',
    startDate: '2023-09-01',
    endDate: '2024-01-01',
    summary: 'GuacaRasa combines the freshness of guacamole with authentic Indonesian flavors, creating a unique blend of tradition and modernity.',
    highlights: [
      'no longer existent.',
      'was another collage teams entrepreneurship activity',
      'i was hired to assist in the creation and testing of some of the recipies they had planned',
    ],
  },
  {
    name: 'FLUND',
    position: 'Co-Founder & researcher/planner',
    startDate: '2023 feb',
    endDate: '2023 june',
    summary: 'my collage project hatchery activity',
    highlights: [
      'no longer existent.',
      'we crafted a detailed business plan outlining our objectives, target market, and operational strategies, providing a clear potential for the projects development. We conducted in-depth market analysis to identify potential opportunities and challenges, ensuring our offerings were tailored to meet market demands. We also developed a prove of concept prototype, showcasing FLUNDs core features and demonstrating its viability to stakeholders which are the teachers and others.',
    ],
  },
];

export default work;
