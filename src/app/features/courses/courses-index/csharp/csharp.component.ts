import { Component } from '@angular/core';

@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  styleUrls: ['./csharp.component.css'],
})
export class CsharpComponent {
  dictionaryDescription = `Introduction to the Dictionary&lt;TKey, TValue&gt; collection in C#, its key-value pair structure, and how to use it for fast data retrieval.`;
  hashSetOverview: string =
    'Overview of the HashSet&lt;T&gt; collection in C#, its unique element constraint, and how to use it for set operations like union, intersection, and difference.';
  collectionsExplanation: string =
    'Explanation of ArrayList and List&lt;T&gt; collections in C#, their differences, and how to use them to store and manipulate data.';
}
