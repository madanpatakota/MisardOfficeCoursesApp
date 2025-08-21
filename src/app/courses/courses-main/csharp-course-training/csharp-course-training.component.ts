import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as AOS from 'aos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
declare var bootstrap: any;


@Component({
  selector: 'app-csharp-training',
  templateUrl: './csharp-course-training.component.html',
  styleUrls: ['./csharp-course-training.component.css']
})
export class CsharpCourseTrainingComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private toastr: ToastrService
  ) { }

  faPlay = faPlayCircle;

  selectedVideoTitle: string = '';
  safeVideoUrl: SafeResourceUrl | null = null;

  videoMap: { [key: string]: string } = {
    'Chapter 1: Introduction|Understand the C#.NET': 'abc123',
    'Chapter 1: Introduction|What is C#': 'def456',
    'Chapter 2: All about Classes|What is Class': 'ghi789'
    // Add more mappings
  };

  overviewText = `This C#.NET course is designed to take you from beginner to job-ready full-stack developer.
Starting with foundational programming concepts, it progresses into advanced object-oriented design and enterprise-grade coding practices.
You’ll gain hands-on experience by working on real-time projects, learning debugging skills, and applying C# in live scenarios.
With structured lessons and dedicated mentor support, this course ensures you master practical development techniques.
It also includes detailed interview preparation and best practices used in the software industry`;

  trainerInfo = `Madan Patakota, an experienced software architect and mentor with over 11 years of IT industry exposure, is the lead trainer for this course.
He has worked across multiple domains including telecom, real estate, healthcare, and fintech.
His strong command over C#, .NET Core, Angular, SQL Server, and Azure makes him a highly versatile full-stack expert.
Madan believes in hands-on, real-time training that bridges the gap between theory and industry application.
Over the years, he has trained more than 200+ students, many of whom are now working in top companies.
He provides personalized guidance, assignments, and mentorship to help learners become confident professionals.
His structured methodology and commitment to each trainee’s success make this course a powerful career launcher.`;

  whatYouWillLearn = [
    'Gain strong fundamentals in Object-Oriented Programming, methods, and classes.',
    'Understand and apply exception handling, delegates, and collections effectively.',
    'Master advanced concepts like Dependency Injection, SOLID principles, and abstraction.',
    'Work on real-time C# projects with guidance on debugging and industry best practices.',
    'Prepare for interviews with focused Q&A and project-based examples.',
    'Build confidence in designing and structuring backend components in .NET.',
    'Understand the life cycle of a C# application from setup to deployment.',
    'Practice using Visual Studio, GitHub, and Azure DevOps in project workflows.',
    'Develop custom exceptions and logging strategies for maintainable code.',
    'Participate in regular assignments, live coding sessions, and trainer evaluations.'
  ];


  marketInsight = [`C# is one of the most versatile and powerful backend programming languages used by enterprises worldwide. It forms the core of the Microsoft technology stack and is favored for its strong type safety, scalability, and extensive tooling support.`,
    `From developing desktop applications using Windows Forms and WPF to cross-platform mobile apps with Xamarin and game development through Unity, C# plays a key role in building high-performance software. It also excels in building APIs, microservices, and cloud-native applications, especially with .NET and Azure.`,
    `Today, companies across domains like fintech, health tech, education, insurance, and e-governance rely on skilled C# developers to build and maintain their critical systems. With continuous support from Microsoft and its adoption in modern cloud architectures, C# continues to be in high demand.`];

  whoShouldLearn = [
    'Freshers aiming for a structured programming foundation in .NET technologies.',
    'Working professionals who want to transition into backend/full-stack roles.',
    'Career switchers looking to enter the IT industry with job-ready skills.',
    'BCA/MCA/B.Tech graduates seeking job-focused C# training with real-time guidance.'
  ];


  chapters = [
    {
      title: 'Chapter 1: Course Introduction',
      describes: `This chapter introduces the C#.NET programming language, its applications, and the environment setup required for development. It covers basic concepts such as data types, operators, strings, conditional statements, arrays, loops, and methods with return types and parameters.`,
      lessons: [
        {
          name: 'Welcome to Misard Academy & Trainer Introduction',
          id: 'qC0wQ3rYhU8'
        },
        {
          name: 'Roadmap to Mastering C#8 Steps  – A Step by Step Approach',
          id: '6P39nSM3mgE'
        },
        {
          name: 'Course Material & Resources',
          id: 'WWUCWCJWQHY'
        },
        {
          name: 'Common Questions & Answers',
          id: '8LB_2QcrDWw'
        }
      ]
    },
    {
      title: 'Chapter 2: All about Classes',
      describes: `This chapter delves into object-oriented programming concepts in C#. It covers classes, constructors, properties, namespaces, static classes, inheritance, interfaces, abstraction, and polymorphism. The chapter emphasizes the importance of these concepts in building scalable and maintainable applications.`,
      lessons: [
        {
          "name": "Summary Key Concepts Explained",
          "id": "rhM5Vc2s3fI"
        },
        {
          "name": "Understanding C# NET   A Beginners Guide",
          "id": "9WKtkBM_v74"
        },
        {
          "name": "What is C# NET   A Simple Explanation",
          "id": "1LT4RJXl8dI"
        },
        {
          "name": "Uses of C# NET   Where and Why to Use It",
          "id": "2cSk8WDBFFY"
        },
        {
          "name": "C# NET Environment   Setup Step by Step Guide",
          "id": "FexVnKYN7XY"
        },
        {
          "name": "Explaining the First C# Console Application Program",
          "id": "6qRHDo-ANiQ"
        },
        {
          "name": "First C# Program Explained   Understanding the Main Method",
          "id": "Eqv2alFxmBQ"
        },
        {
          "name": "What is a Console Application in C#   Explained Clearly",
          "id": "g2LF8VhQz9U"
        },
        {
          "name": "Understanding Data Types in C# with Practical Examples",
          "id": "BCTJXyimJvA"
        },
        {
          "name": "What is a Data Type in C#   Explained Simply",
          "id": "lcASxjY--N4"
        },
        {
          "name": "Simple C# Program to Understand Data Types",
          "id": "HX50uza4Uu0"
        },
        {
          "name": "Understanding Non Floating Numeric Data Types in C#",
          "id": "KAHP4iu36J8"
        },
        {
          "name": "Understanding Floating Point Numeric Data Types in C#",
          "id": "FgPe-n8CHCY"
        },
        {
          "name": "C# Numeric Data Types Finding Max and Min Values",
          "id": "CHjIJS4vPJk"
        },
        {
          "name": "Understanding bool, char, and string Data Types in C#",
          "id": "kfD8T2MfSdw"
        },
        {
          "name": "Understanding var and dynamic Keywords in C#",
          "id": "N412051-gPE"
        },
        {
          "name": "C# Strings Part 1   Introduction and Basics",
          "id": "uMhA72G3BYc"
        },
        {
          "name": "Understanding C#   String Members with a Family Example",
          "id": "g5QFjNHQyDQ"
        },
        {
          "name": "Understanding String Class Members in C#   Properties and Methods Explained",
          "id": "JphAv4iE7OM"
        },
        {
          "name": "C# String Methods   Substring, Compare, and Replace Explained",
          "id": "1C6ofTQHy0o"
        },
        {
          "name": "C# Type Conversion   Converting One Data Type to Another",
          "id": "UJmXkPBPeeg"
        },
        {
          "name": "Understanding Value Types vs Reference Types in C#   Theoretical Explanation",
          "id": "dHXfhbt7LLA"
        },
        {
          "name": "Understanding Arrays in C#   A Beginner\u2019s Guide",
          "id": "ALhlguRkrO0"
        },
        {
          "name": "Understanding Arrays in C#   Theoretical Explanation",
          "id": "O3wkrXyzlVw"
        },
        {
          "name": "C# Arrays   Writing Your First Array Program",
          "id": "41npfSvtzCw"
        },
        {
          "name": "Understanding Loops in C# NET   A Beginner\u2019s Guide",
          "id": "_1D57GJGPQA"
        },
        {
          "name": "How to Use foreach Loop in C#   Practical Example",
          "id": "n8B_scnddMw"
        },
        {
          "name": "Understanding Console ReadLine in C#   Reading User Input",
          "id": "OdpvTwDl1hU"
        },
        {
          "name": "Understanding Operators in C#   Theoretical Explanation",
          "id": "1AUAgMbj6ko"
        },
        {
          "name": "C# Arithmetic Operators Explained with Practical Examples",
          "id": "B_HX7S_e-AY"
        },
        {
          "name": "C# Comparison Operators Explained with Practical Examples",
          "id": "uTuAbTaijW0"
        },
        {
          "name": "C# Logical Operators Explained with Practical Examples",
          "id": "ZmsN9riCRn0"
        },
        {
          "name": "Understanding Conditional Statements in C#    Theoretical Explanation",
          "id": "gDxfoYwpOgg"
        },
        {
          "name": "C# if else if else Statement Explained with Practical Program",
          "id": "4xkJRcW-g7Q"
        },
        {
          "name": "C# switch case Statement Explained with Practical Program",
          "id": "01gO3zNR8iA"
        },
        {
          "name": "Understanding Looping Mechanism in C#   Theoretical Explanation",
          "id": "Oe1DKWIuL8g"
        },
        {
          "name": "C# while Loop Explained with Practical Program and Deep Understanding",
          "id": "rRcfSqwK0vM"
        },
        {
          "name": "C# do while Loop Explained with Practical Program",
          "id": "7PydoRAg-3c"
        },
        {
          "name": "C# foreach Loop Explained with Practical Program",
          "id": "vi9v6EfVMCs"
        },
        {
          "name": "C# for Loop Explained with Practical Program",
          "id": "p7fbuQwaYQ8"
        },
        {
          "name": "C# Methods Explained with Practical Example",
          "id": "BgNhbf5kfLI"
        },
        {
          "name": "Understanding Methods in C#    Theoretical Explanation",
          "id": "gTN5j2R4ZVo"
        },
        {
          "name": "C# Methods Explained with Practical Program for Better Understanding",
          "id": "dgFKeCYhJHw"
        },
        {
          "name": "C# Method Return Types Explained with Practical Program",
          "id": "YewtYxTJ1nc"
        },
        {
          "name": "C# Methods   Parameters and Return Types Explained with Practical Program",
          "id": "YCg92iRC_Yg"
        },
        {
          "name": "C# Methods    Parameters and Return Types Explained with Real Life Example",
          "id": "p4IUWnNJFA4"
        }
      ]
    },
      {
      "title": "Mandatory: Debugging Techniques",
      "describes": `This module covers essential debugging techniques in C# using Visual Studio.
It starts with a theoretical overview and moves into hands-on demonstrations.
You'll learn about breakpoints, step execution (F10/F11), and various debugging windows.
The course also explains how to start, stop, and run applications with or without debugging.
A quick summary with shortcut keys wraps up the module for easy reference.`,
      "lessons": [
        {
          "name": "Debugging in C# - Theoretical Overview",
          "id": "3sqmn9xyt6U"
        },
        {
          "name": "Topics We Are Going to Cover",
          "id": "dGQPaWew79o"
        },
        {
          "name": "What is Debugging",
          "id": "5CdZTgXOGSM"
        },
        {
          "name": "Create the Program for Debugging Demo",
          "id": "Q9f674oMH3s"
        },
        {
          "name": "What is Start Without Debugging, Start Debugging and Stop Debugging",
          "id": "9vAbnAuTlVM"
        },
        {
          "name": "Start Debugging and Stop Debugging - Practical",
          "id": "K1Wc7DvXmVs"
        },
        {
          "name": "Breakpoints Explained",
          "id": "_MpyxffIBjQ"
        },
        {
          "name": "Watch Window, Immediate Window, and Set Next Statement",
          "id": "8Mq8sWBZR-s"
        },
        {
          "name": "More Explanation on F10 and F11 (Step Into and Step Over)",
          "id": "DC8OYxXVDZk"
        },
        {
          "name": "Implement All Debugging Techniques in the Program",
          "id": "iEPcUebiMA4"
        },
         {
          "name": "All Debugging Shortcut Keys - Summary (Quick Cheat Sheet)",
          "id": "qxrH3WpCRvY"
        }
      ]
    },
    {
      "title": "Chapter 3: All about Methods",
      "describes": "This chapter focuses on methods in C#. It covers method overloading, method hiding, and the use of ref and out parameters. It also introduces asynchronous programming with async and await keywords, exception handling, and custom exceptions.",
      "lessons": [
        {
          "name": "Methods with ref and out parameters",
          "id": ""
        },
        {
          "name": "Asynchronous Methods with async and await",
          "id": ""
        },
        {
          "name": "Methods with Extension methods",
          "id": ""
        },
        {
          "name": "Exceptions",
          "id": ""
        },
        {
          "name": "compile-time exception",
          "id": ""
        },
        {
          "name": "Run-time exception",
          "id": ""
        },
        {
          "name": "Try-catch-finally for runtime exceptions",
          "id": ""
        },
        {
          "name": "threw new Exception",
          "id": ""
        },
        {
          "name": "Custom Exception",
          "id": ""
        }
      ]
    },
    {
      "title": "Chapter 4: Data Containers",
      "describes": "This chapter introduces various data structures in C#. It covers collections, arrays, lists, dictionaries, hash tables, tuples, and hash sets. The chapter emphasizes the importance of choosing the right data structure for different scenarios.",
      "lessons": [
        {
          "name": "Introduction about Collections",
          "id": ""
        },
        {
          "name": "Array",
          "id": ""
        },
        {
          "name": "Array List",
          "id": ""
        },
        {
          "name": "List",
          "id": ""
        },
        {
          "name": "Dictionary",
          "id": ""
        },
        {
          "name": "Hash Table",
          "id": ""
        },
        {
          "name": "Tuple",
          "id": ""
        },
        {
          "name": "HashSet",
          "id": ""
        }
      ]
    },
    {
      "title": "Chapter 5: Access Modifiers",
      "describes": "This chapter explains access modifiers in C#. It covers the different access levels (private, public, protected, internal) and their usage in classes and assemblies. The chapter emphasizes the importance of encapsulation and data hiding in software design.",
      "lessons": [
        {
          "name": "Introduction on C# Access Modifiers",
          "id": ""
        },
        {
          "name": "Introduction on Assembly",
          "id": ""
        },
        {
          "name": "Use of Assemblies in Building Project Relationships",
          "id": ""
        },
        {
          "name": "Internal Class",
          "id": ""
        },
        {
          "name": "Private",
          "id": ""
        },
        {
          "name": "Protected",
          "id": ""
        },
        {
          "name": "Internal",
          "id": ""
        },
        {
          "name": "Protected Internal",
          "id": ""
        },
        {
          "name": "Public",
          "id": ""
        },
        {
          "name": "Access Modifiers in C# - Comparison Table",
          "id": ""
        }
      ]
    },
    {
      "title": "Chapter 6: Delegates",
      "describes": "This chapter introduces delegates in C#. It covers the concept of delegates, their usage as method signatures, and the differences between Func, Action, and Predicate delegates. The chapter also discusses anonymous methods and lambda expressions.",
      "lessons": [
        {
          "name": "Real time Delegate Analogy",
          "id": ""
        },
        {
          "name": "Introduction on C# Delegates",
          "id": ""
        },
        {
          "name": "Use Delegate as a method signature",
          "id": ""
        },
        {
          "name": "Anonymous methods",
          "id": ""
        },
        {
          "name": "Converting Anonymous method to lambda Expression",
          "id": ""
        },
        {
          "name": "built-in Delegates (Func, Action, Predicate)",
          "id": ""
        },
        {
          "name": "Func delegate",
          "id": ""
        },
        {
          "name": "Action delegate",
          "id": ""
        },
        {
          "name": "Predicate delegate",
          "id": ""
        },
        {
          "name": "Func vs Action vs Predicate",
          "id": ""
        }
      ]
    },
    {
      "title": "Chapter 7: Dependency Injection",
      "describes": "This chapter covers the concept of Dependency Injection (DI) in C#. It explains the importance of DI in software design, its advantages, and how to implement it in real-time projects. The chapter emphasizes the role of DI in achieving loose coupling and enhancing testability.",
      "lessons": [
        {
          "name": "What is Dependency Injection",
          "id": ""
        },
        {
          "name": "How to Apply the Dependency Injection",
          "id": ""
        },
        {
          "name": "Importance of the DI in Real time Projects",
          "id": ""
        }
      ]
    },
    {
      "title": "Chapter 8: SOLID Principles",
      "describes": "This chapter introduces the SOLID principles of object-oriented design. It covers each principle in detail, explaining its significance and how to apply it in C# programming. The chapter emphasizes the importance of following these principles for building maintainable and scalable software.",
      "lessons": [
        {
          "name": "Introduction of SOLID Principles",
          "id": ""
        },
        {
          "name": "Advantages of SOLID Principles",
          "id": ""
        },
        {
          "name": "S - (Single Responsibility Principle)",
          "id": ""
        },
        {
          "name": "O - (Open-Closed Principle)",
          "id": ""
        },
        {
          "name": "L - (Liskov Substitution Principle)",
          "id": ""
        },
        {
          "name": "I - (Interface Segregation Principle)",
          "id": ""
        },
        {
          "name": "D - (Dependency Inversion Principle)",
          "id": ""
        }
      ]
    },
   
  ];



  chapters1 = [
    {
      title: 'Chapter 1: Course Introduction',
      describes: `This chapter introduces the C#.NET programming language, its applications, and the environment setup required for development. It covers basic concepts such as data types, operators, strings, conditional statements, arrays, loops, and methods with return types and parameters.`,
      lessons: [
        'Understand the C#.NET',
        'What is C#',
        'Uses of C#',
        'Environment set-up',
        'First Program',
        'What is Console',
        'Datatypes',
        'Operators',
        'Strings',
        'Conditional Statements',
        'Arrays',
        'Loops',
        'Methods with Return types and Parameters'
      ]
    },
    {
      title: 'Chapter 2: All about Classes',
      describes: `This chapter delves into object-oriented programming concepts in C#. It covers classes, constructors, properties, namespaces, static classes, inheritance, interfaces, abstraction, and polymorphism. The chapter emphasizes the importance of these concepts in building scalable and maintainable applications.`,
      lessons: [
        'What is Class',
        'Constructor(s)',
        'Properties',
        'Namespace',
        'What is Static Class',
        'Static vs non-static',
        'What is Inheritance',
        'Interface',
        'Class with Interface',
        'What is Abstraction',
        'What is abstract Class',
        'abstract method & override method',
        'What is Polymorphism',
        'What is compile-time Polymorphism',
        'What is runtime-time Polymorphism'
      ]
    },
    {
      title: 'Chapter 3: All about Methods',
      describes: `This chapter focuses on methods in C#. It covers method overloading, method hiding, and the use of ref and out parameters. It also introduces asynchronous programming with async and await keywords, exception handling, and custom exceptions.`,
      lessons: [
        'Methods with ref and out parameters',
        'Asynchronous Methods with async and await',
        'Methods with Extension methods',
        'Exceptions',
        'compile-time exception',
        'Run-time exception',
        'Try-catch-finally for runtime exceptions',
        'threw new Exception',
        'Custom Exception'
      ]
    },
    {
      title: 'Chapter 4: Data Containers',
      describes: `This chapter introduces various data structures in C#. It covers collections, arrays, lists, dictionaries, hash tables, tuples, and hash sets. The chapter emphasizes the importance of choosing the right data structure for different scenarios.`,
      lessons: [
        'Introduction about Collections',
        'Array',
        'Array List',
        'List',
        'Dictionary',
        'Hash Table',
        'Tuple',
        'HashSet'
      ]
    },
    {
      title: 'Chapter 5: Access Modifiers',
      describes: `This chapter explains access modifiers in C#. It covers the different access levels (private, public, protected, internal) and their usage in classes and assemblies. The chapter emphasizes the importance of encapsulation and data hiding in software design.`,
      lessons: [
        'Introduction on C# Access Modifiers',
        'Introduction on Assembly',
        'Use of Assemblies in Building Project Relationships',
        'Internal Class',
        'Private',
        'Protected',
        'Internal',
        'Protected Internal',
        'Public',
        'Access Modifiers in C# - Comparison Table'
      ]
    },
    {
      title: 'Chapter 6: Delegates',
      describes: `This chapter introduces delegates in C#. It covers the concept of delegates, their usage as method signatures, and the differences between Func, Action, and Predicate delegates. The chapter also discusses anonymous methods and lambda expressions.`,
      lessons: [
        'Real time Delegate Analogy',
        'Introduction on C# Delegates',
        'Use Delegate as a method signature',
        'Anonymous methods',
        'Converting Anonymous method to lambda Expression',
        'built-in Delegates (Func, Action, Predicate)',
        'Func delegate',
        'Action delegate',
        'Predicate delegate',
        'Func vs Action vs Predicate'
      ]
    },
    {
      title: 'Chapter 7: Dependency Injection',
      describes: `This chapter covers the concept of Dependency Injection (DI) in C#. It explains the importance of DI in software design, its advantages, and how to implement it in real-time projects. The chapter emphasizes the role of DI in achieving loose coupling and enhancing testability.`,
      lessons: [
        'What is Dependency Injection',
        'How to Apply the Dependency Injection',
        'Importance of the DI in Real time Projects'
      ]
    },
    {
      title: 'Chapter 8: SOLID Principles',
      describes: `This chapter introduces the SOLID principles of object-oriented design. It covers each principle in detail, explaining its significance and how to apply it in C# programming. The chapter emphasizes the importance of following these principles for building maintainable and scalable software.`,
      lessons: [
        'Introduction of SOLID Principles',
        'Advantages of SOLID Principles',
        'S - (Single Responsibility Principle)',
        'O - (Open-Closed Principle)',
        'L - (Liskov Substitution Principle)',
        'I - (Interface Segregation Principle)',
        'D - (Dependency Inversion Principle)'
      ]
    }
  ];


  bonusTopics: string[] = [
    'Debugging Techniques',
    'GitHub Integration',
    'Real-Time Projects',
    'Interview Q&A',
    'Downloadable Materials',
    'Trainer Tasks',
    'C# with Real-Time Examples',
    'Extra Assignments'
  ];


  selectedLessonTitle = '';
  safeYoutubeUrl: SafeResourceUrl | null = null;
  // faPlay = faPlayCircle;


  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
    this.toastr.info('C# Course Loaded', 'Welcome!', { timeOut: 3000 });
  }

  openVideo(chapterTitle: string, lesson: any): void {
    this.selectedVideoTitle = `${chapterTitle} - ${lesson.name}`;
    const videoId = lesson.id;

    if (!videoId || videoId.trim() === '') {
        Swal.fire({
            title: `
          <div style="font-size:22px; font-weight:700; color:#b71c1c;">
            <i class="bi bi-shield-lock-fill" style="font-size:30px; color:#b71c1c;"></i>
            <br> Access Denied
          </div>`,
            html: `
          <div style="font-size:15px; color:#333; line-height:1.6; margin-top:10px;">
            🚫 You don’t have permission to view this resource.<br><br>
            📩 Please contact your <b>trainer</b> to get access.<br><br>
            <a href="https://wa.me/917204185064" target="_blank" 
               style="display:inline-flex; align-items:center; gap:8px; 
                      background:#25D366; color:#fff; padding:8px 14px; 
                      border-radius:30px; font-weight:600; text-decoration:none;">
              <i class="bi bi-whatsapp" style="font-size:18px;"></i> Chat on WhatsApp
            </a>
          </div>`,
            showConfirmButton: true,
            // confirmButtonText: 'Request Access',
            confirmButtonColor: '#144164',
            width: '450px',
            padding: '1.5rem',
            background: '#fff',
            backdrop: `rgba(20,65,100,0.4)`,
            customClass: {
              popup: 'rounded-3xl shadow-lg',
              confirmButton: 'px-4 py-2 text-sm font-semibold rounded-full',
            },
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' },
          });
      // Swal.fire({
      //   icon: 'warning',
      //   title: 'Access Denied',
      //   html: `🚫 You don’t have permission to view this video.<br><br>
      //            📩 Please contact your trainer to get access.`,
      //   confirmButtonText: 'Okay',
      //   confirmButtonColor: '#144164',
      //   backdrop: true,
      //   width: '400px'
      // });
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


  openVideo1(chapterTitle: string, lesson: string, videoID: string): void {
    // this.selectedVideoTitle = `${lesson} (${chapterTitle})`;
    // const key = `${chapterTitle}|${lesson}`;
    // const videoId = this.videoMap[key];
    if (videoID) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoID}`);
      const modal = new bootstrap.Modal(document.getElementById('chapterVideoModal'));
      modal.show();
    } else {
      this.safeVideoUrl = null;
      alert('Video not found for this lesson.');
    }
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

  filteredLessons1(): string[] {
    if (!this.lessonSearch.trim()) return this.selectedChapter?.lessons || [];
    return this.selectedChapter?.lessons.filter((lesson: any) =>
      lesson.toLowerCase().includes(this.lessonSearch.toLowerCase())
    );
  }
}
