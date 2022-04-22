AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector('.techstack-box');
const techStack = [
  {
    langImage: 'assets/images/techstack-page/node.png',
    langName: 'Node',
    langDesc:
      '<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>',
  },
  {
    langImage: 'assets/images/techstack-page/javascript.png',
    langName: 'JavaScript',
    langDesc:
      '<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>',
  },
  {
    langImage: 'assets/images/techstack-page/git.png',
    langName: 'Git',
    langDesc:
      '<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>',
  },
  {
    langImage: 'assets/images/techstack-page/mongodb.png',
    langName: 'MongoDB',
    langDesc:
      '<li>MongoDB is a source-available cross-platform document-oriented database program.</li>',
  },
  {
    langImage: 'assets/images/techstack-page/sql.png',
    langName: 'SQL',
    langDesc:
      '<li>SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system. </li>',
  },
  {
    langImage: 'assets/images/techstack-page/html.png',
    langName: 'HyperText Markup Language',
    langDesc:
      '<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>',
  },
  {
    langImage: 'assets/images/techstack-page/css.png',
    langName: 'Cascading Style Sheets',
    langDesc:
      '<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>',
  },
  {
    langImage: 'assets/images/techstack-page/sass.svg',
    langName: 'Syntactically Awesome Stylesheet - Sass',
    langDesc:
      '<li>Syntactically Awesome Stylesheet is a CSS pre-processor completely compatible with all versions of CSS.</li>',
  },
  {
    langImage: 'assets/images/techstack-page/docker.png',
    langName: 'Docker',
    langDesc:
      '<li>Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers</li>',
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate = techStack
    .map((stack) => {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `;
    })
    .join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener('DOMContentLoaded', displayTechStacksCards);
