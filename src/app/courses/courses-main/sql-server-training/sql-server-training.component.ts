import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
declare var bootstrap: any;

@Component({
  selector: 'app-sql-server-training',
  templateUrl: './sql-server-training.component.html',
  styleUrls: ['./sql-server-training.component.css'],
})
export class SqlServerTrainingComponent {
  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }

   constructor(
      private sanitizer: DomSanitizer,
      private toastr: ToastrService,
      private router: Router
    ) {}
  // ================= OVERVIEW =================
  overviewText = `This SQL Server course takes you from beginner to advanced level.
You will learn how to design databases, write efficient queries, and handle real-time data scenarios.
The course covers CRUD operations, joins, performance tuning, and interview-level SQL concepts.`;

  trainerInfo = `Madan Patakota, full-stack developer with 11+ years of experience,
teaches SQL with real-time examples, focusing on practical implementation,
performance optimization, and interview preparation.`;

  whoShouldLearn = [
    'Freshers who want strong database knowledge',
    'Full-stack developers working with APIs',
    'Backend developers using .NET / Java / Node',
    'Anyone preparing for SQL interviews',
  ];

  // ================= COURSE CONTENT =================
  chaptersList = [
    {
      title: 'SQL Installation & Basics',
      describes:
        'Install SQL Server and understand core concepts like database and datasource.',
      lessons: [
        { name: 'Download & Install SQL Server' },
        { name: 'What is DataSource?' },
        { name: 'What is Database?' },
        { name: 'Create Database' },
      ],
    },

    {
      title: 'Table Creation & Management',
      describes:
        'Create tables and manage structure like columns and datatypes.',
      lessons: [
        { name: 'Create Table (User Table)' },
        { name: 'Add Column' },
        { name: 'Delete Column' },
        { name: 'Change Data Type' },
      ],
    },

    {
      title: 'CRUD Operations',
      describes: 'Insert, update, and delete records with real-time scenarios.',
      lessons: [
        { name: 'Insert Records' },
        { name: 'Update With WHERE' },
        { name: 'Update Without WHERE' },
        { name: 'Delete With WHERE' },
        { name: 'Delete Without WHERE' },
      ],
    },

    {
      title: 'Select Queries',
      describes: 'Retrieve data using different filtering and conditions.',
      lessons: [
        { name: 'Select All Records' },
        { name: 'Select Specific Columns' },
        { name: 'Select With Conditions' },
        { name: 'CASE WHEN' },
      ],
    },

    {
      title: 'Keys & Constraints',
      describes: 'Understand primary key and unique key importance.',
      lessons: [
        { name: 'Primary Key Concept' },
        { name: 'Unique Key' },
        { name: 'Primary vs Unique Key' },
      ],
    },

    {
      title: 'Joins & Set Operations',
      describes: 'Combine multiple tables and compare datasets.',
      lessons: [
        { name: 'Inner Join' },
        { name: 'Left Join' },
        { name: 'Right Join' },
        { name: 'Union vs Union All' },
        { name: 'Join vs Union' },
      ],
    },

    {
      title: 'Group By & Aggregations',
      describes: 'Work with grouped data and summary results.',
      lessons: [{ name: 'Group By Basics' }, { name: 'Group By with Joins' }],
    },

    {
      title: 'Advanced SQL Concepts',
      describes: 'Ranking, duplicate handling, and variables.',
      lessons: [
        { name: 'ROW_NUMBER, RANK, DENSE_RANK' },
        { name: 'Find Duplicate Records' },
        { name: 'Delete Duplicate Records' },
        { name: 'DECLARE Variables' },
      ],
    },

    {
      title: 'CTE & Temp Tables',
      describes: 'Advanced querying techniques using temporary structures.',
      lessons: [
        { name: 'What is CTE?' },
        { name: 'Temp Tables vs CTE' },
        { name: 'Global Temp Tables' },
      ],
    },

    {
      title: 'Error Handling',
      describes: 'Handle SQL errors using structured approach.',
      lessons: [
        { name: 'TRY CATCH' },
        { name: 'THROW' },
        { name: 'Error Handling' },
      ],
    },

    {
      title: 'Performance & Tools',
      describes: 'Optimize queries and use SQL tools.',
      lessons: [
        { name: 'NOLOCK Usage' },
        { name: 'SQL Profiler' },
        { name: 'Indexes (Clustered / Non-clustered)' },
      ],
    },

    {
      title: 'Database Objects',
      describes: 'Reusable SQL components for real-world projects.',
      lessons: [
        { name: 'Stored Procedures' },
        { name: 'Views' },
        { name: 'Triggers' },
      ],
    },
  ];

  // ================= MODAL =================
  selectedChapter: any = null;

  openChapterModal(chapter: any): void {
    this.selectedChapter = chapter;

    setTimeout(() => {
      const modalEl = document.getElementById('chapterModal');

      if (modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      } else {
        console.error('Modal element not found');
      }
    }, 50);
  }

  lessonSearch: string = '';

  filteredLessons(): any[] {
    if (!this.lessonSearch.trim()) {
      return this.selectedChapter?.lessons || [];
    }

    return this.selectedChapter?.lessons.filter((l: any) =>
      l.name.toLowerCase().includes(this.lessonSearch.toLowerCase()),
    );
  }

  playLesson(lesson: any) {
    console.log('Play:', lesson);
  }
  showAccessDenied() {
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
        confirmButton: 'px-4 py-2 text-sm font-semibold rounded-full',
      },
      showClass: { popup: 'animate__animated animate__fadeInDown' },
      hideClass: { popup: 'animate__animated animate__fadeOutUp' },
    });
  }

  marketInsight = [
    'SQL Server is one of the most widely used relational databases in enterprise applications.',
    'It is heavily used in banking, healthcare, e-commerce, and large-scale business systems.',
    'Strong SQL knowledge is mandatory for backend developers working with .NET, Java, and Node.js.',
    'Demand for SQL developers and database experts remains consistently high in the IT industry.',
  ];
}
