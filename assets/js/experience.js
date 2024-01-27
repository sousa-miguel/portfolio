AOS.init();

//  Work experience cards

const experiencecards = document.querySelector('.experience-cards');
const exp = [
  {
    title: 'DevOps Engineer',
    cardImage: 'assets/images/experience-page/ctw.png',
    place: 'Critical TechWorks',
    time: '(Jun, 2022 - Present)',
    desp: '<li>TBD</li>',
  },
  {
    title: 'Outsystems Developer',
    cardImage: 'assets/images/experience-page/nexllence.png',
    place: 'Nexllence, powered by Glintt',
    time: '(Oct, 2020 - Jun, 2022)',
    desp: '<li>Worked on a responsive web application (desktop first) for AppsForGood Portugal to provide a platform with courses for students;</li><li>Worked on a web application for PassMusica to manage contracts and licensing requests;</li><li>Built a web application for Galp to manage contracts and its SLAs, projects and consultation processes.</li>',
  },
  {
    title: 'Outsystems Developer Intern',
    cardImage: 'assets/images/experience-page/abconsulting.png',
    place: 'ABConsulting',
    time: '(Apr - Jul, 2020)',
    desp: '<li>Worked at ABConsulting as part of my academic intership;</li><li>Built a component to integrate Outsystems aplications with Microsoft Office 365;</li><li>User Authentication and/or Application Authentication;</li><li>Manage Microsoft Groups;</li><li>Manage Users and Members of Groups;</li><li>Manage Calendars and events.</li>',
  },
];

const showCards2 = () => {
  let output = '';
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `),
  );
  experiencecards.innerHTML = output;
};
document.addEventListener('DOMContentLoaded', showCards2);
