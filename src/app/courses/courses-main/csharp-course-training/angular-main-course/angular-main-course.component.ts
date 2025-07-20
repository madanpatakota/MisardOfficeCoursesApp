import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as AOS from 'aos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
declare var bootstrap: any;

@Component({
  selector: 'app-angular-main-course',
  templateUrl: './angular-main-course.component.html',
  styleUrls: ['./angular-main-course.component.css']
})
export class AngularMainCourseComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
    this.toastr.info('C# Course Loaded', 'Welcome!', { timeOut: 3000 });
  }

  faPlay = faPlayCircle;

  selectedVideoTitle: string = '';
  safeVideoUrl: SafeResourceUrl | null = null;

  overviewText = `This Angular course is crafted to take you from beginner to proficient front-end developer.
Starting with HTML, CSS, and TypeScript fundamentals, it gradually builds up to advanced concepts like component architecture, state management, and REST API integration.
You’ll gain real-time development experience through hands-on projects, learning how to build scalable single-page applications (SPAs).
The course also covers practical debugging, browser dev tools, and deployment practices.
With mentor support and regular evaluations, you'll become confident in building professional Angular applications ready for industry standards.`;

  trainerInfo = `Madan Patakota, a seasoned full-stack developer and mentor with over 11 years of experience, is the lead trainer for this Angular course.
He has deep expertise in Angular, TypeScript, HTML, CSS, and enterprise integration with REST APIs and Azure.
Having mentored over 200+ students and delivered projects across domains like telecom, healthcare, and real estate, Madan brings a strong practical edge to learning.
His interactive teaching style, combined with real-time assignments and personalized mentoring, ensures learners grasp core Angular concepts with clarity and confidence.
With a commitment to turning beginners into job-ready professionals, Madan focuses on real-world problem-solving and industry best practices.`;

  whatYouWillLearn = [
    'Master HTML, CSS, Bootstrap, and TypeScript fundamentals for front-end development.',
    'Understand Angular CLI, components, directives, pipes, and services.',
    'Build dynamic forms using template-driven and reactive form techniques.',
    'Implement routing, lazy loading, and navigation guards for large SPAs.',
    'Integrate RESTful APIs with HTTPClient and handle data binding securely.',
    'Learn state management using RxJS, BehaviorSubjects, and async pipes.',
    'Apply real-time debugging techniques and browser dev tools effectively.',
    'Deploy Angular applications using GitHub, Azure Static Web Apps, and CI/CD pipelines.',
    'Work on end-to-end projects with modular architecture and reusable components.',
    'Participate in coding sessions, assignments, and mock interviews to build confidence.'
  ];

  marketInsight = [
    `Angular is a widely adopted front-end framework maintained by Google and used by top enterprises for building scalable web applications.`,
    `Its powerful component-based architecture, strong TypeScript support, and integration with modern dev tools make it a preferred choice for large-scale projects.`,
    `Angular is extensively used in sectors like fintech, healthcare, retail, and e-learning to create robust, responsive user interfaces.
With ongoing community support and real-world enterprise use, Angular developers remain in high demand globally.`
  ];

  whoShouldLearn = [
    'Freshers wanting to master frontend development through structured Angular training.',
    'Backend developers looking to transition into full-stack roles.',
    'Working professionals seeking to upgrade their frontend skills with modern frameworks.',
    'Graduates (BCA/MCA/B.Tech) aiming to build a strong portfolio in UI development with real projects.'
  ];


  chaptersList = [
    {
      title: 'Angular Basics: First Level',
      describes: `Explore essential concepts like String Interpolation, Property Binding, Event Binding, and Two-Way Binding in this Angular Basics course.`,
      ProjectURL: 'https://ngbasics.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'String Interpolation',
        },
        {
          id: 2,
          name: 'Property Binding',
        }
        ,
        {
          id: 3,
          name: 'Event Binding',
        },
        {
          id: 4,
          name: 'Two-Way Binding',
        },
        {
          id: 5,
          name: 'Custom Component Creation',
        },
        {
          id: 6,
          name: 'Understand flow of data in Angular',
        },
        {
          id: 7,
          name: 'Understand on the angular.json,main.ts,app.module.ts,app.component.ts',
        }
      ]
    },
    {
      title: 'Angular Basics: Intermediate Techniques',
      describes: `Dive into Angular concepts like ngStyle, ngClass, ngIf, LocalRef, ngTemplate, ngIf and Else, ngFor, and ngSwitch to enhance your understanding of Angular development.`,
      ProjectURL: 'https://ngcore.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'ngStyle',
        },
        {
          id: 2,
          name: 'ngClass',
        },
        {
          id: 3,
          name: 'ngIf',
        },
        {
          id: 4,
          name: 'LocalRef',
        },
        {
          id: 5,
          name: 'ngTemplate',
        },
        {
          id: 6,
          name: 'ngIf and Else',
        },
        {
          id: 7,
          name: 'ngFor',
        },
        {
          id: 8,
          name: 'ngSwitch',
        }
      ]
    },
    {
      title: 'Advanced Angular: Content Control Techniques',
      describes: `Explore advanced Angular techniques for content control, including ViewChild, ContentChild, ngContent, ngContainer, TemplateRef, and Dynamic Templates.`,
      url: 'https://ngadvanced.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'ViewChild',
        },
        {
          id: 2,
          name: 'ContentChild',
        },
        {
          id: 3,
          name: 'ngContent',
        },
        {
          id: 4,
          name: 'ngContainer',
        },
        {
          id: 5,
          name: 'TemplateRef',
        },
        {
          id: 6,
          name: 'Dynamic Templates',
        }
      ]
    },
    {
      title: 'Advanced Angular: Data Communication Strategies',
      describes: `Discover essential Angular concepts such as Input, Output, and EventEmitter for efficient data exchange between components.`,
      ProjectURL: 'https://ngtrans.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'Input',
        },
        {
          id: 2,
          name: 'Output',
        },
        {
          id: 3,
          name: 'EventEmitter',
        }
      ]
    },
    {
      title: 'Angular: Services',
      describes: `Explore Angular Services, covering topics like creation of services, utilization at various component levels, data communication mechanisms, and cross-communication between services.`,
      ProjectURL: 'https://ngservices.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'Services',
        },
        {
          id: 2,
          name: 'Service at Component Level',
        },
        {
          id: 3,
          name: 'Service at Module Level',
        },
        {
          id: 4,
          name: 'Service at Root Level',
        },
        {
          id: 5,
          name: 'Component to Component Communication via Service',
        },
        {
          id: 6,
          name: 'Cross Communication between Services',
        }
      ]
    },
    {
      title: 'Angular: Routing',
      describes: `Learn about Angular Routing, including setting up routing in AppModule, using RouterLinks, exploring different types of parameters in Router URLs, and implementing Subscription Routing.`,
      ProjectUrl: 'https://ngrouting.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'RouterModule',
        },
        {
          id: 2,
          name: 'RouterLink',
        },
        {
          id: 3,
          name: 'RouterLink with Parameters',
        },
        {
          id: 4,
          name: 'RouterLink with Query Parameters',
        },
        {
          id: 5,
          name: 'RouterLink with Fragment',
        },
        {
          id: 6,
          name: 'Subscription Routing',
        }
      ]
    },
    {
      title: 'Angular: Forms',
      describes: `Explore Angular Template Forms and Reactive Forms, covering topics like form creation, validation, handling form data, and manipulating form values.`,
      ProjectUrl: 'https://ngforms.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'Template Forms',
        },
        {
          id: 2,
          name: 'Reactive Forms',
        },
        {
          id: 3,
          name: 'Form Validation',
        },
        {
          id: 4,
          name: 'Form Data Handling',
        },
        {
          id: 5,
          name: 'Form Value Manipulation',
        }
      ]
    },
    {
      title: 'Angular: HTTP',
      describes: `Explore Angular HTTP, covering topics like consuming Web APIs using HTTP methods, utilizing HttpClientModule, integrating HTTP APIs into services, and implementing HTTP Interceptors.`,
      ProjectUrl: 'https://nghttp.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'HttpClientModule',
        },
        {
          id: 2,
          name: 'GET Method',
        },
        {
          id: 3,
          name: 'POST Method',
        },
        {
          id: 4,
          name: 'PUT Method',
        },
        {
          id: 5,
          name: 'DELETE Method',
        },
        {
          id: 6,
          name: 'HTTP Interceptors',
        }
      ]
    },
    {
      title: 'Angular: More Concepts',
      describes: `Dive deeper into Angular with advanced topics including creation and utilization of Pipes and Custom Pipes, development of Advanced Directives, custom Observable creation, and exploration of RxJS Operators.`,
      ProjectUrl: 'https://ngmore.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'Pipes',
        },
        {
          id: 2,
          name: 'Custom Pipes',
        },
        {
          id: 3,
          name: 'Advanced Directives',
        },
        {
          id: 4,
          name: 'Custom Observable',
        },
        {
          id: 5,
          name: 'RxJS Operators',
        }
      ]
    },
    {
      title: 'Angular: Deployment Angular App into Azure',
      describes: `Learn how to deploy your Angular app to Azure and showcase your work to the world.`,
      ProjectUrl: 'https://ngdeploy.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'Deploy Angular App into Azure',
        },
        {
          id: 2,
          name: 'Deploy Angular App into GitHub',
        },
        {
          id: 3,
          name: 'Deploy Angular App into Azure Static Web Apps',
        },
        {
          id: 4,
          name: 'Deploy Angular App into Azure Static Web Apps with CI/CD',
        }
      ]
    }
  ];


  VideosList = [
    {
      title: 'Angular Basics: First Level',
      describes: `Explore essential concepts like String Interpolation, Property Binding, Event Binding, and Two-Way Binding in this Angular Basics course.`,
      ProjectURL: 'https://ngbasics.azurewebsites.net/',
      lessons:
        [
          {
            id: 1,
            name: 'String Interpolation',
            VideoId: ''
          },
          {
            id: 2,
            name: 'Property Binding',
            VideoId: ''
          }
          ,
          {
            id: 3,
            name: 'Event Binding',
            VideoId: ''
          },
          {
            id: 4,
            name: 'Two-Way Binding',
            VideoId: ''
          },
          {
            id: 5,
            name: 'Custom Component Creation',
            VideoId: ''
          },
          {
            id: 6,
            name: 'Understand flow of data in Angular',
            VideoId: ''
          },
          {
            id: 7,
            name: 'Understand on the angular.json,main.ts,app.module.ts,app.component.ts',
            VideoId: ''
          }
        ]
    },
    {
      title: 'Angular Basics: Intermediate Techniques',
      describes: `Dive into Angular concepts like ngStyle, ngClass, ngIf, LocalRef, ngTemplate, ngIf and Else, ngFor, and ngSwitch to enhance your understanding of Angular development.`,
      ProjectURL: 'https://ngcore.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'ngStyle',
          VideoId: ''
        },
        {
          id: 2,
          name: 'ngClass',
          VideoId: ''
        },
        {
          id: 3,
          name: 'ngIf and Else',
          VideoId: ''
        },
        {
          id: 4,
          name: 'LocalRef',
          VideoId: ''
        },
        {
          id: 5,
          name: 'ngTemplate',
          VideoId: ''
        },
        {
          id: 6,
          name: 'ngFor',
          VideoId: ''
        },
        {
          id: 7,
          name: 'ngSwitch...ngSwitchCase & ngDefault',
          VideoId: ''
        }
      ]
    },
    {
      title: 'Advanced Angular: Content Control Techniques',
      describes: `Explore advanced Angular techniques for content control, including ViewChild, ContentChild, ngContent, ngContainer, TemplateRef, and Dynamic Templates.`,
      url: 'https://ngadvanced.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'ViewChild',
          VideoId: 'IRqaylvEsxM'
        },
        {
          id: 2,
          name: 'ViewChildren',
          VideoId: '95Jlajf9grE'
        },
        {
          id: 3,
          name: 'ContentChild',
          VideoId: 'th95I9y2cCA'
        },
        {
          id: 4,
          name: 'ngContent',
          VideoId: 'QBdHmphfkas'
        },
        {
          id: 5,
          name: 'ngContainer , TemplateRef ,ngTemplate, ngTemplateOutlet',
          VideoId: 'qHdTiM1Nngw'
        }
      ]
    },
    {
      title: 'Advanced Angular: Data Communication Strategies',
      describes: `Discover essential Angular concepts such as Input, Output, and EventEmitter for efficient data exchange between components.`,
      ProjectURL: 'https://ngtrans.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: '@Input and @Output Decorators',
          VideoId: 'EdEqX-WS2sU'
        },
        {
          id: 2,
          name: 'How to Use @Input and @Output Along with Event Emitter',
          VideoId: 'S_j-t_R_A6E'
        },
      ]
    },
    {
      title: 'Angular: Services',
      describes: `Explore Angular Services, covering topics like creation of services, utilization at various component levels, data communication mechanisms, and cross-communication between services.`,
      ProjectURL: 'https://ngservices.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'Create Basic Service',
          VideoId: '95mkzNP_Gcs'
        },
        {
          id: 2,
          name: 'Service - Introduction',
          VideoId: 'qdWbVVvy9Lc'
        },
        {
          id: 3,
          name: 'Service at Module Level',
          VideoId: ''
        },
        {
          id: 4,
          name: 'Injecting Services Into Component',
          VideoId: 'fG7iZ_n3t04'
        },
        {
          id: 5,
          name: 'Injecting into another Service',
          VideoId: 'C5BHOVftGD8'
        },
        {
          id: 6,
          name: 'Passing Data to Child Components',
          VideoId: 'o_JWaA57W-A'
        },
        {
          id: 7,
          name: 'Passing Data Component to Component',
          VideoId: 'XbcXSzPlTb8'
        }
      ]
    },
    {
      title: 'Angular: Routing',
      describes: `Learn about Angular Routing, including setting up routing in AppModule, using RouterLinks, exploring different types of parameters in Router URLs, and implementing Subscription Routing.`,
      ProjectUrl: 'https://ngrouting.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'Router Introduction',
          VideoId: 'j6KRpQY7r-M'
        },
        {
          id: 2,
          name: 'Router Setup',
          VideoId: 'fHQi-ExKBt4'
        },
        {
          id: 3,
          name: 'Basic Router Features',
          VideoId: 'MjC6AIIbeHg'
        },
        {
          id: 4,
          name: 'Router Navigation',
          VideoId: 'e8mq1lZ0Qt8'
        },
        {
          id: 5,
          name: 'Router Query Params',
          VideoId: '9TDlz8LFLiU'
        },
        {
          id: 6,
          name: 'Router Fragment',
          VideoId: 'JiSz6qRvl08'
        },
        {
          id: 7,
          name: 'Router Can Activate - Part 1',
          VideoId: 'vE4HnYVXEII'
        },
        {
          id: 8,
          name: 'Router Can Activate - Part 2',
          VideoId: 'FGsQ7nBOl6w'
        },
        {
          id: 9,
          name: 'Router Can DeActivate',
          VideoId: 'pATj9rIlJhE'
        },
        {
          id: 10,
          name: 'Router Resolve and Data - Part 1',
          VideoId: 'URcuJnp-b3I'
        },
        {
          id: 11,
          name: 'Router Resolve and Data - Part 2',
          VideoId: 'GyIAptm4Hmo'
        }
      ]
    },
    {
      title: 'Angular: Forms',
      describes: `Explore Angular Template Forms and Reactive Forms, covering topics like form creation, validation, handling form data, and manipulating form values.`,
      ProjectUrl: 'https://ngforms.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'Template Forms',
          VideoId: 'SHLlSgLLjlE'
        },
        {
          id: 2,
          name: 'Reactive Forms',
          VideoId: '-BnIvrBSBQk'
        },
        {
          id: 3,
          name: 'Dynamic Forms',
          VideoId: 'nmexCgi1A7Q'
        },
        {
          id: 4,
          name: 'Dynamic Forms Implementation',
          VideoId: 'eOieNhl4Mps'
        },
        {
          id: 5,
          name: 'Custom Validation By Template Approach',
          VideoId: 'bYHfhtKTbMk'
        },
        {
          id: 6,
          name: 'Angular - All about Validators',
          VideoId: 'yYNgCn3LLUE'
        },
        {
          id: 7,
          name: 'Custom Validation',
          VideoId: 'v4b-ca5b9-o'
        }
      ]
    },
    {
      title: 'Angular: HTTP',
      describes: `Explore Angular HTTP, covering topics like consuming Web APIs using HTTP methods, utilizing HttpClientModule, integrating HTTP APIs into services, and implementing HTTP Interceptors.`,
      ProjectUrl: 'https://nghttp.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'Http - Basics',
          VideoId: 'Ug51SqNDa7w'
        },
        {
          id: 2,
          name: 'Http - Sample App Design',
          VideoId: 'vzfd_Zz7caE'
        },
        {
          id: 3,
          name: 'Get Request',
          VideoId: 'KC8MMa3Dw3s'
        },
        {
          id: 4,
          name: 'Code Optimization by Get Request',
          VideoId: 'eLvY5gCsL1I'
        },
        {
          id: 5,
          name: 'Prepare Model PopUp',
          VideoId: 'TwmGC0AOWDY'
        },
        {
          id: 6,
          name: 'Post Request',
          VideoId: '6PNK1s1ZqQE'
        },
        {
          id: 7,
          name: 'How to Populate Current row in Model PopUp',
          VideoId: 'vs2oaUfno2A'
        },
        {
          id: 8,
          name: 'Put Request',
          VideoId: 'p_gNJV_R4TU'
        },
        {
          id: 9,
          name: 'Delete Request',
          VideoId: 'lx6805c_wEY'
        },
        {
          id: 10,
          name: 'Header and Params',
          VideoId: 'lx6805c_wEY'
        },
        {
          id: 11,
          name: 'Observe and Http Resoponse type',
          VideoId: 'LoG7n--f2-c'
        },
        {
          id: 12,
          name: 'Exception Handling',
          VideoId: 'QiGTP4b2GF8'
        },
        {
          id: 13,
          name: 'Basic Interceptors',
          VideoId: 'llO6I6nh8pE'
        },
        {
          id: 14,
          name: 'Implement Exception Handling in Interceptors',
          VideoId: 'Gbck2OXMYs8'
        }
      ]
    },
    {
      title: 'Angular: More Concepts',
      describes: `Dive deeper into Angular with advanced topics including creation and utilization of Pipes and Custom Pipes, development of Advanced Directives, custom Observable creation, and exploration of RxJS Operators.`,
      ProjectUrl: 'https://ngmore.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'Explaination on Pipes',
          VideoId: 'RqmAJekGv2Q'
        },
        {
          id: 2,
          name: 'Custom Pipes',
          VideoId: ''
        },
        {
          id: 3,
          name: 'Advanced Directives',
          VideoId: ''
        },
        {
          id: 4,
          name: 'Custom Observable',
          VideoId: ''
        },
        {
          id: 5,
          name: 'RxJS Operators',
          VideoId: ''
        }
      ]
    },
    {
      title: 'Angular: Observables',
      describes: `Observables  `,
      ProjectUrl: 'https://ngmore.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'Observables - Introduction',
          VideoId: 'WTK4692yS90'
        },
        {
          id: 2,
          name: ' Observables - Basic',
          VideoId: 'hsoCvgadZAg'
        },
        {
          id: 3,
          name: 'Custom Observable',
          VideoId: 'xLmMwHo1On0'
        },
        {
          id: 4,
          name: 'Unsubscribe vs Complete',
          VideoId: 'byeawE4Wyjs'
        },
        {
          id: 5,
          name: 'Observer vs Subscriber',
          VideoId: 'JJ0xwAGWj94'
        }
      ]
    },
    {
      title: 'Angular: Deployment Angular App into Azure',
      describes: `Learn how to deploy your Angular app to Azure and showcase your work to the world.`,
      ProjectUrl: 'https://ngdeploy.azurewebsites.net/',
      lessons: [
        {
          id: 1,
          name: 'What is AppService',
          VideoId: ''
        },
        {
          id: 2,
          name: 'Deploy Angular App into Azure',
          VideoId: ''
        },
        {
          id: 3,
          name: 'Deploy Angular App into Azure Static Web Apps',
          VideoId: ''
        }
      ]
    }
  ];

  openVideo(chapterTitle: string, lesson: any): void {
    this.selectedVideoTitle = `${chapterTitle} - ${lesson.name}`;
    const videoId = lesson.VideoId;

    if (!videoId || videoId.trim() === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Video Unavailable',
        html: `🚫 You currently don't have access to this video.<br><br>
           📩 Please reach out to your trainer for access rights.<br><br>
           👉 In the meantime, feel free to continue learning from <b>Chapter 3</b>.`,
        confirmButtonText: 'Got It',
        confirmButtonColor: '#144164',
        backdrop: true,
        width: '400px'
      });
      return;
    }


    if (videoId) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}`
      );

      setTimeout(() => {
        const modal = new bootstrap.Modal(document.getElementById('chapterVideoModal'));
        modal.show();
      }, 50); // slight delay to ensure DOM ready
    }
  }

  filteredLessons(): any[] {
    if (!this.lessonSearch.trim()) {
      return this.selectedChapter?.lessons || [];
    }
    return this.selectedChapter.lessons.filter((lesson: any) =>
      lesson.name.toLowerCase().includes(this.lessonSearch.toLowerCase())
    );
  }
  closeVideo(): void {
    this.safeVideoUrl = null;
    const modal = bootstrap.Modal.getInstance(document.getElementById('chapterVideoModal'));
    modal?.hide();

    // Cleanup remaining blur/backdrop
    setTimeout(() => {
      document.body.classList.remove('modal-open');
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) backdrop.remove();
    }, 300);
  }

  getVideoIdByLesson(lesson: string): string | null {
    // Map lessons to video IDs
    const videoMap: { [key: string]: string } = {
      'Understand the C#.net': 'abc123'
      // Add more mappings here
    };
    return videoMap[lesson] || null;
  }

  selectedChapter: any = null;
  lessonSearch: string = '';

  openChapterModal(chapter: any): void {
    this.selectedChapter = chapter;
    this.lessonSearch = '';
    const modal = new bootstrap.Modal(document.getElementById('chapterModal'));
    modal.show();
  }


}
