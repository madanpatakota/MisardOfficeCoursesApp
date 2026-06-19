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
Madan believes in hands-on, real-time Program that bridges the gap between theory and industry application.
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
    'BCA/MCA/B.Tech graduates seeking job-focused C# Program with real-time guidance.'
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
          "name": "Methods with ref",
          "id": "Jb8wBuae4Cc"
        },
        {
          "name": "Methods with out",
          "id": "kToO0w-eTeE"
        },
        {
          "name": "Methods with ref vs out",
          "id": "DOM8zSgbbhM"
        },
        {
          "name": "Methods with Params Parameter",
          "id": "dm2-8RMySrw"
        },
        {
          "name": "Methods with Optional Parameter",
          "id": "GCr6SDhEzMY"
        },
        {
          "name": "Methods with Named Parameter",
          "id": "iQsrfmRdF6w"
        },
        {
          "name": "Generic Types of Parameters in methods",
          "id": "LsXSyMdEHzg"
        },
        {
          "name": "Understanding Synchronous Calls",
          "id": "a-6WfLN7B-E"
        },
        {
          "name": "Passing Entity Classes as Generic Parameter",
          "id": "MDcSJggKTrw"
        },
        {
          "name": "Program on Synchronous Calls",
          "id": "mQaR4AvH22o"
        },
        {
          "name": "Preparing Additional for Trainer Example",
          "id": "tuwq8N9lrjk"
        },
        {
          "name": "Thread.Sleep() and StopWatch",
          "id": "jkh2QudsthE"
        },
        {
          "name": "What is Task and Importance of Task",
          "id": "ujigqZ0mrzg"
        },
        {
          "name": "Planning Before Writing Task Programs",
          "id": "9FL77JiQXIw"
        },
        {
          "name": "Converting Synchoronous Calls into Tasks",
          "id": "1Pabe8DXcIY"
        },
        {
          "name": "Importance of Task.WaitAll()",
          "id": "xG-1R7iwHeA"
        },
        {
          "name": "Using Stopwatch to Calculate Task Execution Time",
          "id": "xvSxFvYiaJY"
        },
        {
          "name": " Adding Wait Method to Each Task",
          "id": "jLYYPvCZcW8"
        },
        {
          "name": "Changing Return Type from void to Task",
          "id": "P1q5Es9WoZY"
        },
      {
          "name": "Changing Return Type from Task to Task String",
          "id": "6rE6HGopag4"
        },
        {
          "name": "Use Task.WaitAll() to Wait for All Tasks Instead of Waiting for Each Task Separately",
          "id": "_vqy4kQ9oTw"
        },
      {
          "name": "Working with Task.WhenAll()",
          "id": "FUJ22QfeiMY"
        },
      {
          "name": "Updating Method Signature using async and await",
          "id": "AFdtFog27F0"
        },
        {
          "name": "Uses of Task.Delay() with await",
          "id": "S-GwtpiExQw"
        },
        {
          "name": "Async and Await Program Flow Explanation",
          "id": "UsduKtLDxB0"
        },
      {
          "name": "Understanding Extension Methods in C#",
          "id": "mhEPVMblaEU"
        },
      {
          "name": "Program on Extension Methods",
          "id": "TmeLYuidd8w"
        },
        {
          "name": "Adding Extension Methods to Existing string Type",
          "id": "v_mdyooIP2E"
        },
      {
          "name": "What is Exception in C#",
          "id": "1IG967pOxIo"
        },
      {
          "name": "Compile-Time Errors – Theory",
          "id": "fMoYXT0Hihc"
        },
      {
          "name": "Understanding Runtime Errors – Theory",
          "id": "-ioVyRLAlBo"
        },
      {
          "name": "Handling Runtime Errors using Try-Catch",
          "id": "UpLyGTN6KVQ"
        },
        {
          "name": " Use of finally Block in C#",
          "id": "vgzxZ6Svt_w"
        },
        {
          "name": "Multiple Try-Catch-Finally Blocks in Same Method",
          "id": "zFNE6C4s4yk"
        },
        {
          "name": "Single Try with Multiple Catch Blocks",
          "id": "IZxysqzAW4k"
        },
        {
          "name": "Converting Exception Messages into User-Friendly Messages",
          "id": "-4rDhHHoEr4"
        },
        {
          "name": "Using throw Keyword to Trigger Exceptions Manually",
          "id": "eo3Ft32ll2A"
        },
        {
          "name": "What is Exception Class in C#",
          "id": "13GSvXIbMyU"
        },
        {
          "name": "Creating and Using Custom Exceptions in C#",
          "id": "hSkpz8u7ETI"
        },
      ]
      
    },
    {
      "title": "Chapter 4: Data Containers",
      "describes": "This chapter introduces various data structures in C#. It covers collections, arrays, lists, dictionaries, hash tables, tuples, and hash sets. The chapter emphasizes the importance of choosing the right data structure for different scenarios.",
      "lessons": [
        {
          "name": "Welcome to Step4",
          "id": "EMHXiWKVQlE"
        },
        {
          "name": "Create a New Console Application in C#",
          "id": "d3GyAZhI6Es"
        },
        {
          "name": "What is Collection in C#?",
          "id": "G9gnF1-htaY"
        },
        {
          "name": "Arrays in C# – Theory Explanation",
          "id": "qUAP5FjAccA"
        },
        {
          "name": "Preparing Arrays in C#",
          "id": "ykYhoRLVIdQ"
        },
        {
          "name": "How to Use Array Class in C#",
          "id": "l6kCvvqwkbs"
        },
        {
          "name": "What is ArrayList in C#?",
          "id": "hfuEtN-S8lM"
        },
        {
          "name": "Real-Time Use Cases of ArrayList",
          "id": "Im9fT6iJOKc"
        },
        {
          "name": "What is List Collection in C#?",
          "id": "i6RACTZmzcs"
        },
        {
          "name": "Add, Remove, Update, Operations in List",
          "id": "Mxl-BJR2fAA"
        },
        {
          "name": "What is Dictionary in C#?",
          "id": "XkN1CPLodxc"
        },
        {
          "name": "Add, Remove, Update, Operations in Dictionary",
          "id": "0BAAOc81_N8"
        },
        {
          "name": "What is Hashtable in C#?",
          "id": "kDhruTBtP3I"
        },
        {
          "name": "Add, Remove, Update, Operations in Hashtable",
          "id": "2K-vK6LDPtU"
        },
        {
          "name": "Introduction to HashSet in C#",
          "id": "EIKkSnayX0U"
        },
        {
          "name": "Understanding HashSet with Program",
          "id": "s-9VQcEESRY"
        },
        {
          "name": "What is Tuple in C#?",
          "id": "Z2L0IMe0J3E"
        },
        {
          "name": "Real-Time Usage of Tuple in C#",
          "id": "dCfvcWDeKUA"
        },
      
      ]
    },
    {
      "title": "Chapter 5: Access Modifiers",
      "describes": "This chapter explains access modifiers in C#. It covers the different access levels (private, public, protected, internal) and their usage in classes and assemblies. The chapter emphasizes the importance of encapsulation and data hiding in software design.",
      "lessons": [
        {
          "name": "Welcome to Step-5",
          "id": "9m1RGHm804c"
        },
        {
          "name": "Topics Covered in Step-5",
          "id": "IwG-OVq_RNg"
        },
        {
          "name": "Introduction to Access Modifiers in C#",
          "id": "BxpRmpDFzQ0"
        },
        {
          "name": "Introduction to Assembly Files in C#",
          "id": "mfyDasbeW1Q"
        },
        {
          "name": "Difference Between Executable and Library Files",
          "id": "qr1i1JEw7zQ"
        },
        {
          "name": "Types of Assemblies in C#",
          "id": "31tx6wAWBpM"
        },
        {
          "name": "Use of Assemblies in Building Project Relationships",
          "id": "0lq9G8PdvNU"
        },
        {
          "name": "Solution Planning for Access Modifiers",
          "id": "kPI5BkpHQvQ"
        },
        {
          "name": "Create the Console Application as per Plan",
          "id": "4IL2aDyBKWE"
        },
        {
          "name": "Private Access Modifier – Explanation",
          "id": "mKB6sYX3kT8"
        },
        {
          "name": "Private Access Modifier – Program",
          "id": "pqbbvf8QKuE"
        },
        {
          "name": "Protected Access Modifier – Explanation",
          "id": "P-w-545BWX0"
        },
        {
          "name": "Protected Access Modifier – Program",
          "id": "n90-4Ro6xCQ"
        },
        {
          "name": "Internal Access Modifier – Explanation",
          "id": "KfhkaRKdERg"
        },
        {
          "name": "Internal Access Modifier – Program",
          "id": "uaK9LIiYjX0"
        },
        {
          "name": "Protected Internal Access Modifier – Explanation",
          "id": "riEZBzX1kpY"
        },
         {
          "name": "Protected Internal Access Modifier – Program",
          "id": "G1AVVCxR6vc"
        },
         {
          "name": "Public Access Modifier – Explanation",
          "id": "TaA7tFxUeV4"
        }, {
          "name": "Public Access Modifier – Program",
          "id": "QsAyeOeNqIY"
        }, {
          "name": "Difference Between Public Class and Internal Class",
          "id": "GTUV0mmxM0M"
        }, {
          "name": "Comparison Table of Access Modifiers",
          "id": "rSWHWJAVWGs"
        }, {
          "name": "Comparison Table of Public Class and Internal Class",
          "id": "GyYXi_4lOQQ"
        },{
          "name": "Final Words on Step-5",
          "id": "N6H7mqQ-400"
        }
      ]
    },
    {
      "title": "Chapter 6: Delegates",
      "describes": "This chapter introduces delegates in C#. It covers the concept of delegates, their usage as method signatures, and the differences between Func, Action, and Predicate delegates. The chapter also discusses anonymous methods and lambda expressions.",
      "lessons": [
        {
          "name": "Topics Covered in Step-6",
          "id": "hA2UG69Pxg8"
        },
        {
          "name": "Real-Time Delegate Analogy",
          "id": "egubTPCxIq0"
        },
        {
          "name": "Introduction to Delegates in C#",
          "id": "rOjLds6c_f8"
        },
        {
          "name": "Creating the Console App for Step-6",
          "id": "vdljDA4X0YM"
        },
        {
          "name": "Create a Delegate – Program",
          "id": "dcWpAvscy_Q"
        },
        {
          "name": "Creating Delegates with Return Types",
          "id": "zJ9-rSu8ffs"
        },
        {
          "name": "Understanding Anonymous Methods",
          "id": "xaCXLHnfFhc"
        },
        {
          "name": "Anonymous Methods with Void Return Types",
          "id": "J8KdKW9Mht0"
        },
        {
          "name": "Anonymous Methods with Different Data Types",
          "id": "298Uil0wFW8"
        },
        {
          "name": "Converting Anonymous Methods to Lambda Expressions",
          "id": "HSatEd3BjZ0"
        },
        {
          "name": "Preparing Lambda Expressions",
          "id": "PLp36sJpRUY"
        },
        {
          "name": "Applying Lambdas with Different Return Types",
          "id": "VokLAhBe6gU"
        },
        {
          "name": "Understanding Built-in Delegates",
          "id": "0k9Wuh_F68s"
        },
        {
          "name": "Understanding Func Built-in Delegate",
          "id": "b7MI4wE8jiU"
        },
        {
          "name": "Program on Func Built-in Delegate",
          "id": "txane0N6KH4"
        },
        {
          "name": "Understanding Action Built-in Delegate",
          "id": "RLRvEWSl4WU"
        },
        {
          "name": "Program on Action Delegate",
          "id": "_V69F_WuLI4"
        },
        {
          "name": "Understanding Predicate Built-in Delegate",
          "id": "2FfoLO4fdng"
        },
        {
          "name": "Program on Predicate Delegate",
          "id": "adu-dZ-DPc4"
        },{
          "name": "Comparison Table of Built-in Delegates",
          "id": "dvO6TJ7k8-c"
        },
        {
          "name": "Final Summary of Delegates and Lambda Expressions",
          "id": "xvJCSXWV1ig"
        },
      ]
    },
    {
      "title": "Chapter 7: Dependency Injection and SOLID Principles",
      "describes": "This chapter covers the concept of Dependency Injection (DI) in C#. It explains the importance of DI in software design, its advantages, and how to implement it in real-time projects. The chapter emphasizes the role of DI in achieving loose coupling and enhancing testability.",
      "lessons": [
        {
          "name": "Welcome to Step7 (Revision from Step1 to Step6) & – SOLID Principles and Design Patterns",
          "id": "6MjRAzz7ydc"
        },
        {
          "name": "Topics Covered in Step-7",
          "id": "SnzvLrGycgY"
        },
        {
          "name": "Understanding SOLID Principles",
          "id": "BOFmZpf3F4g"
        },
        {
          "name": "Creating the Solution to Implement SOLID Principles",
          "id": "M7Orw3_WiaE"
        },
        {
          "name": "Understanding the Problem Without SRP",
          "id": "Scob2JC-IzA"
        },
        {
          "name": " Solving the Problem using SRP",
          "id": "z6QA2PiRg5w"
        },
        {
          "name": "What is the Open-Closed Principle (OCP)",
          "id": "BbyL6l0C0cg"
        },
        {
          "name": "Understanding the Problem Without OCP",
          "id": "8lk-GLByBOI"
        },
        {
          "name": "Solving the Problem using OCP",
          "id": "otW0hqWOlt4"
        },
        {
          "name": "What is Liskov Substitution Principle (LSP)",
          "id": "6vzDiLZadd4"
        },
        {
          "name": "Understanding the Problem of LSP",
          "id": "7w-AQB4vc9k"
        },
        {
          "name": "Solving the Problem using LSP",
          "id": "fGqmpOpKIPg"
        },
        {
          "name": "What is Interface Segregation Principle (ISP)",
          "id": "E0U-4jbDXbM"
        },
        {
          "name": "Understanding the Problem of ISP",
          "id": "n5PxuEAcwto"
        },
        {
          "name": "Solving the Problem using ISP",
          "id": "WUfL5Kl9oo8"
        },
        {
          "name": "What is Dependency Inversion Principle (DIP)",
          "id": "lFezMp3GcDE"
        },
         {
          "name": "Understanding the Problem Without DIP",
          "id": "yTbILzeZNPY"
        },
        {
          "name": "Solving the Problem using DIP",
          "id": "OX1D5TnGh6Q"
        },
        {
          "name": "Understanding What a Design Pattern Is",
          "id": "ks8iaV7Lqmw"
        }, 
        {
          "name": "Types of Design Patterns in C#",
          "id": "U_R2wXKHpr8"
        },
        {
          "name": "Understanding the Real-Time Flow of Design Patterns",
          "id": "VT-8xC_JIdg"
        },
        {
          "name": "Difference Between SOLID Principles and Design Patterns",
          "id": "Xa5tha6BY2U"
        },
        {
          "name": "Real-Time Flow Using Repository and Dependency Injection",
          "id": "y_YlqQS6YRU"
        },{
          "name": "Creating the Solution and Configuring the Layers",
          "id": "bJcY-LiimxI"
        },
        {
          "name": "Writing Basic Code in Each Layer and Designing the Repository",
          "id": "sZDq9tLsr6w"
        },
        {
          "name": "Adding a New Method and Understanding the Problem",
          "id": "D4Suv8dN3f4"
        },
        {
          "name": "Prepare Interfaces for Concrete Classes",
          "id": "cZnf0BqT4Yw"
        },

        {
          "name": "Removing Dependencies in Class Constructors Using Manual Dependency Injection",
          "id": "VfDoGOjhPcs"
        },
{
          "name": "Preparing the Dependency Injection Extension to Register Dependencies",
          "id": "mDR88fY4WHM"
        },
        {
          "name": "Recap of What We Have Done So Far in the Application",
          "id": "qNYYjC5aNVI"
        },
        {
          "name": "Final Summary of Step-7",
          "id": "k9FBHQoVS88"
        },



      
        

        

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
  `https://www.youtube.com/embed/${videoId}?origin=https://misardacademy.com&modestbranding=1&rel=0`
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
