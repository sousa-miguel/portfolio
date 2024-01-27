AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector('.techstack-box');
const techStack = [
    {
    langImage: 'assets/images/techstack-page/git.png',
    langName: 'Git',
    langDesc:
      '<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>',
  },
  {
    langImage: 'assets/images/techstack-page/terraform.png',
    langName: 'Terraform',
    langDesc:
      '<li>Terraform is an infrastructure-as-code software tool that uses a declarative configuration language known as HashiCorp Configuration Language, or optionally JSON</li>',
  },
  {
    langImage: 'assets/images/techstack-page/kubernetes.png',
    langName: 'Kubernetes',
    langDesc:
      '<li>Kubernetes is an open-source container orchestration system for automating software deployment, scaling, and management.</li>',
  },
  {
    langImage: 'assets/images/techstack-page/aws.png',
    langName: 'AWS',
    langDesc:
      '<li>Amazon Web Services (AWS) is a cloud computing platform provided by Amazon that includes a mixture of infrastructure-as-a-service (IaaS), platform-as-a-service (PaaS) and packaged-software-as-a-service (SaaS) offerings</li>',
  },
  {
    langImage: 'assets/images/techstack-page/gha.png',
    langName: 'GitHub Actions',
    langDesc:
      '<li>GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows to automate builds, tests, and deployment pipelines.</li>',
  },
  {
    langImage: 'assets/images/techstack-page/prometheus.png',
    langName: 'Prometheus',
    langDesc:
      '<li>Prometheus is a free software application used for event monitoring and alerting. It records metrics in a time series database built using an HTTP pull model, with flexible queries and real-time alerting.</li>',
  },
  {
    langImage: 'assets/images/techstack-page/argo.png',
    langName: 'Argo CD',
    langDesc:
      '<li>Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes.</li>',
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
