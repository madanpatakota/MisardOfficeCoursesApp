import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import Swal from 'sweetalert2';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare var bootstrap: any;


@Component({
  selector: 'app-typescript-training',
  templateUrl: './typescript-training.component.html',
  styleUrls: ['./typescript-training.component.css']
})
export class TypescriptTrainingComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
    this.toastr.info('TypeScript Course Loaded', 'Welcome!', { timeOut: 3000 });
  }

  // -------------------- Page text --------------------
  overviewText: string = `This TypeScript course takes you from JavaScript comfort to strong, typed, large-app development.
You’ll learn type annotations, unions, generics, enums, interfaces, classes, modules, and real-world patterns.
We’ll build confidence with VS Code tooling, debugging, strict mode, and idiomatic TS for Angular/React/Node.`;

  marketInsight: string[] = [
    `TypeScript is the standard for enterprise-scale web apps, powering projects at Microsoft, Google, Airbnb, and more.`,
    `Its static types improve reliability, refactoring, and team velocity—making TS a must-have skill for modern FE/FS roles.`,
    `Frameworks like Angular are written in TypeScript; React and Node ecosystems also widely adopt it.`
  ];

  whoShouldLearn: string[] = [
    'JavaScript developers who want safer, scalable code.',
    'Angular/React devs who want first-class tooling and patterns.',
    'Freshers aiming to stand out with strong typing and OOP skills.',
    'Backend devs moving toward full-stack TypeScript (Node/Nest).'
  ];

  // -------------------- Chapters (cards) --------------------
  chaptersList = [
    {
      title: 'TypeScript Basics',
      describes:
        'Understand what TS is, why types matter, and how the compiler/tsconfig works. Run your first TS program.',
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'What is TypeScript? Features & Benefits' },
        { id: 2, name: 'Install TS & VS Code Setup' },
        { id: 3, name: 'tsc Compiler, tsconfig.json' },
        { id: 4, name: 'Transpile TS → JS, Source Maps' },
        { id: 5, name: 'Strict Mode Overview' }
      ]
    },
    {
      title: 'Types & Variables (Intermediate)',
      describes:
        'Work with primitive/structural types, any/unknown/never, unions, literals, tuples, and narrowing.',
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Type Annotations & Inference' },
        { id: 2, name: 'number | string | boolean | null | undefined' },
        { id: 3, name: 'any vs unknown vs never' },
        { id: 4, name: 'Union, Intersection & Literal Types' },
        { id: 5, name: 'Tuple Types & Destructuring' },
        { id: 6, name: 'Type Narrowing (typeof, in, instanceof, predicates)' }
      ]
    },
    {
      title: 'Objects & Functions',
      describes:
        'Model data with object types, interfaces, index signatures, optional/default props. Strongly-typed functions.',
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Object Types & Readonly' },
        { id: 2, name: 'Interfaces vs Type Aliases' },
        { id: 3, name: 'Optional & Default Properties' },
        { id: 4, name: 'Index Signatures & Record' },
        { id: 5, name: 'Function Types, Params, Return' },
        { id: 6, name: 'Optional/Default/Rest Params' }
      ]
    },
    {
      title: 'Advanced Types',
      describes:
        'Leverage generics, utility types, mapped/conditional types, keyof, and template literal types.',
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Enums' },
        { id: 2, name: 'Generics (Functions, Interfaces, Classes)' },
        { id: 3, name: 'keyof, typeof, Indexed Access' },
        { id: 4, name: 'Mapped & Conditional Types' },
        { id: 5, name: 'Partial/Required/Pick/Record & friends' }
      ]
    },
    {
      title: 'Classes & OOP',
      describes:
        'Use classes, access modifiers, inheritance, abstract classes, implements, and composition.',
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Classes & Constructors' },
        { id: 2, name: 'public/private/protected & readonly' },
        { id: 3, name: 'Inheritance & Abstract Classes' },
        { id: 4, name: 'Implements Interfaces' },
        { id: 5, name: 'Getters/Setters & Parameter Properties' }
      ]
    },
    {
      title: 'Modules & Tooling',
      describes:
        'Organize with ES modules, node/ts-node, path mapping, ambient types, and @types ecosystem.',
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'ES Modules: import/export' },
        { id: 2, name: 'Node + ts-node + nodemon' },
        { id: 3, name: 'DefinitelyTyped & @types' },
        { id: 4, name: 'Path Mapping & BaseUrl' },
        { id: 5, name: 'Build Targets & Lib DOM/ES' }
      ]
    }
  ];

  // -------------------- Videos (accordion) --------------------
  VideosList = [
    {
      title: 'TypeScript Basics',
      describes: 'Installation, config, and first program.',
      ProjectURL: '',
      lessons: [
        { id: 1, name: 'Intro & Setup', VideoId: 'BCg4U1FzODs' }, // example id
        { id: 2, name: 'tsconfig & Build', VideoId: '' },
        { id: 3, name: 'Strict Mode', VideoId: '' }
      ]
    },
    {
      title: 'Types & Variables',
      describes: 'Primitives, unions, unknown/never, tuples, narrowing.',
      ProjectURL: '',
      lessons: [
        { id: 1, name: 'Primitives & Annotations', VideoId: '' },
        { id: 2, name: 'Union/Literal Types', VideoId: '' },
        { id: 3, name: 'Tuples & Destructuring', VideoId: '' },
        { id: 4, name: 'Type Narrowing', VideoId: '' }
      ]
    },
    {
      title: 'Objects, Functions & Interfaces',
      describes: 'Modeling structures and strong function contracts.',
      ProjectURL: '',
      lessons: [
        { id: 1, name: 'Interfaces vs Type', VideoId: '' },
        { id: 2, name: 'Optional/Default Props', VideoId: '' },
        { id: 3, name: 'Index Signatures', VideoId: '' },
        { id: 4, name: 'Function Types', VideoId: '' }
      ]
    },
    {
      title: 'Advanced Types & Generics',
      describes: 'Generics, mapped/conditional, utility types.',
      ProjectURL: '',
      lessons: [
        { id: 1, name: 'Generics Deep Dive', VideoId: '' },
        { id: 2, name: 'Utility Types', VideoId: '' },
        { id: 3, name: 'Mapped/Conditional', VideoId: '' }
      ]
    },
    {
      title: 'Classes & OOP',
      describes: 'Classes, inheritance, modifiers, abstract.',
      ProjectURL: '',
      lessons: [
        { id: 1, name: 'Classes & Modifiers', VideoId: '' },
        { id: 2, name: 'Inheritance & Abstract', VideoId: '' },
        { id: 3, name: 'Interfaces & Classes', VideoId: '' }
      ]
    },
    {
      title: 'Modules & Tooling',
      describes: 'ES modules, @types, ts-node, build.',
      ProjectURL: '',
      lessons: [
        { id: 1, name: 'ES Modules', VideoId: '' },
        { id: 2, name: '@types & Ambient', VideoId: '' },
        { id: 3, name: 'Path Mapping', VideoId: '' }
      ]
    }
  ];

  // -------------------- Modal/video helpers (same API as Angular page) --------------------
  selectedVideoTitle: string = '';
  safeVideoUrl: SafeResourceUrl | null = null;
  selectedChapter: any = null;
  lessonSearch: string = '';

  openChapterModal(chapter: any): void {
    this.selectedChapter = chapter;
    this.lessonSearch = '';
    const modal = new bootstrap.Modal(document.getElementById('chapterModal'));
    modal.show();
  }

  filteredLessons(): any[] {
    if (!this.lessonSearch.trim()) {
      return this.selectedChapter?.lessons || [];
    }
    return (this.selectedChapter?.lessons || []).filter((lesson: any) =>
      lesson.name.toLowerCase().includes(this.lessonSearch.toLowerCase())
    );
  }

  openVideo(chapterTitle: string, lesson: any): void {
    this.selectedVideoTitle = `${chapterTitle} - ${lesson.name}`;
    const id = (lesson?.VideoId || '').trim();

    if (!id) {
      this.showAccessDenied();
      return;
    }

    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}`
    );

    setTimeout(() => {
      const modal = new bootstrap.Modal(
        document.getElementById('chapterVideoModal')
      );
      modal.show();
    }, 50);
  }

  closeVideo(): void {
    this.safeVideoUrl = null;
    const modal = bootstrap.Modal.getInstance(
      document.getElementById('chapterVideoModal')
    );
    modal?.hide();

    setTimeout(() => {
      document.body.classList.remove('modal-open');
      const backdrop = document.querySelector('.modal-backdrop');
      backdrop?.remove();
    }, 300);
  }

  showAccessDenied(): void {
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
      confirmButtonColor: '#144164',
      width: '450px',
      padding: '1.5rem',
      background: '#fff',
      backdrop: `rgba(20,65,100,0.4)`,
      customClass: {
        popup: 'rounded-3xl shadow-lg',
        confirmButton: 'px-4 py-2 text-sm font-semibold rounded-full'
      },
      showClass: { popup: 'animate__animated animate__fadeInDown' },
      hideClass: { popup: 'animate__animated animate__fadeOutUp' }
    });
  }
}
