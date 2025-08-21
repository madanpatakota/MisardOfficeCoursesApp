import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit{
  courseSections = [
    {
      title: 'Typescript Introduction',
      id: 'typescriptIntroContent',
      headerId: 'typescriptIntroHeader',
      topics: [
        { heading: 'Typescript Introduction', details: 'Introduction to TypeScript and its features.' },
        { heading: 'Setup Typescript in VSCode', details: 'Guide on setting up TypeScript in Visual Studio Code for development.' },
        { heading: 'TypeScript vs Javascript', details: 'Comparison between TypeScript and JavaScript, highlighting their differences and similarities.' },
        { heading: 'Conversion from Typescript to Javascript', details: 'Explanation of how to convert TypeScript code to JavaScript code.' },
        { heading: 'Run basic code', details: 'Instructions on running basic TypeScript code for testing and validation.' }
      ]
    },
    {
      title: 'Typescript - Intermediate Level',
      id: 'typescriptIntermediateContent',
      headerId: 'typescriptIntermediateHeader',
      topics: [
        { heading: 'Assignment of the variable', details: 'Explanation of how to assign variables in TypeScript.' },
        { heading: 'What is Strong type?', details: 'Introduction to the concept of strong typing in TypeScript and its significance.' },
        { heading: 'Set variable by type (number, boolean, string, any, unknown)', details: 'Declaring and initializing variables with specific data types in TypeScript.' },
        { heading: 'Tupling type and how to destruct that', details: 'Explanation of tuple types in TypeScript and how to destructure them for accessing elements.' }
      ]
    },
    {
      title: 'Typescript - Working with Objects',
      id: 'typescriptObjectsContent',
      headerId: 'typescriptObjectsHeader',
      topics: [
        { heading: 'Working with Objects', details: 'Explanation of how to work with objects in TypeScript.' },
        { heading: 'Making the object with strong type', details: 'Demonstration of creating objects with strong typing in TypeScript.' },
        { heading: 'Modifying object types', details: 'Instructions on how to test for and modify the type of an object in TypeScript.' },
        { heading: 'Optional properties', details: 'Explanation of passing optional properties to objects in TypeScript.' },
        { heading: 'Default values', details: 'Instructions on passing default values to properties of objects in TypeScript.' },
        { heading: 'Index signatures', details: 'Explanation of how to define index signatures for variables in TypeScript.' }
      ]
    },
    {
      title: 'Typescript - Advanced',
      id: 'typescriptAdvancedContent',
      headerId: 'typescriptAdvancedHeader',
      topics: [
        { heading: 'Enums', details: 'Explanation of enums in TypeScript and their usage.' },
        { heading: 'How to use "type" keyword', details: 'Demonstration of using the "type" keyword in TypeScript.' },
        { heading: 'Setup Custom Types', details: 'Instructions on setting up custom types in TypeScript.' },
        { heading: 'Custom Type to Interface', details: 'Explanation of converting custom types to interfaces in TypeScript.' },
        { heading: 'Where to use Interfaces', details: 'Guidance on how and where to use interfaces in TypeScript.' },
        { heading: 'Importance of interfaces', details: 'Explanation of the importance of interfaces in TypeScript.' },
        { heading: 'Handling multiple data types', details: 'Explanation of handling multiple data types in TypeScript.' }
      ]
    },
    {
      title: 'Typescript : Higher level',
      id: 'typescriptHigherLevelContent',
      headerId: 'typescriptHigherLevelHeader',
      topics: [
        { heading: 'Strong functions', details: 'Introduction to strong functions in TypeScript and their usage.' },
        { heading: 'Default, optional, rest parameters', details: 'Explanation of using default, optional, and rest parameters in TypeScript functions.' },
        { heading: 'Importance of type casting', details: 'Discussion on the importance and usage of type casting in TypeScript.' }
      ]
    },
    {
      title: 'Typescript : Class',
      id: 'typescriptClassContent',
      headerId: 'typescriptClassHeader',
      topics: [
        { heading: 'What, how & where to use class', details: 'Explanation of what classes are in TypeScript, how they are used, and where they should be applied.' },
        { heading: 'Implementing concepts in class', details: 'Discussion on implementing various concepts into TypeScript classes.' }
      ]
    }
  ];

  ngOnInit() {
    // Initialize animation on scroll
    AOS.init({ duration: 1200, once: true });
  }

}
