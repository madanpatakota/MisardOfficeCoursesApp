import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as AOS from 'aos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-aspnetcore-main-course',
  templateUrl: './aspnetcore.component.html',
  styleUrls: ['./aspnetcore.component.css'],
})
export class AspnetcoreComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
    this.toastr.info('ASP.NET Core Course Loaded', 'Welcome!', { timeOut: 3000 });
  }

  selectedVideoTitle: string = '';
  safeVideoUrl: SafeResourceUrl | null = null;

  overviewText = `This ASP.NET Core Web API course (targeting .NET 6/7/8) takes you from zero to production-ready APIs.
You’ll learn controllers & minimal APIs, DI, EF Core, repository/unit-of-work, AutoMapper, validation, filters,
middleware, global exception handling, JWT/Identity security, query features (filter/sort/page), Swagger & versioning,
file uploads, background services, testing, and Azure deployment.`;

  trainerInfo = `Madan Patakota, full‑stack developer (11+ years), teaches practical API development with
ASP.NET Core, EF Core, SQL Server, and Azure. Expect hands‑on labs, code reviews, and real-world best practices.`;

  marketInsight = [
    `ASP.NET Core is a high‑performance, cross‑platform framework widely used for enterprise APIs.`,
    `Built‑in DI, first‑class async IO, and EF Core integration make it ideal for scalable microservices.`,
    `Demand for .NET Core API developers remains strong across finance, healthcare, retail, and SaaS.`,
  ];

  whoShouldLearn = [
    'Freshers who want a backend/API foundation with .NET.',
    'Angular/React devs who want to build/consume real APIs.',
    'C#/Java devs moving to ASP.NET Core and REST patterns.',
    'Full‑stack aspirants targeting Azure‑hosted applications.',
  ];

  // ======== COURSE CONTENT ========
  chaptersList = [
    {
      title: 'ASP.NET Core Web API: Getting Started (.NET 6/7/8)',
      describes: `Overview, minimal vs controller APIs, tooling setup, first run.`,
      ProjectURL: '', // set live URL if you have one
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Intro to ASP.NET Core Web APIs' },
        { id: 2, name: 'Install .NET SDK, VS 2022/VS Code, Postman' },
        { id: 3, name: 'Create First API & Run via Kestrel/IIS Express' },
        { id: 4, name: 'Minimal API vs Controller API' },
      ],
    },
    {
      title: 'Create New API Project & Domain Models',
      describes: `Project structure, REST/HTTP verbs, routing, DDD basics, EF Core setup.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Project Skeleton & Files (Program.cs, appsettings)' },
        { id: 2, name: 'REST Principles & HTTP Verbs' },
        { id: 3, name: 'Attribute vs Conventional Routing' },
        { id: 4, name: 'Domain Modeling (DDD intro)' },
        { id: 5, name: 'Install EF Core Packages' },
        { id: 6, name: 'DbContext & Connection String' },
        { id: 7, name: 'Migrations & Database Update' },
      ],
    },
    {
      title: 'Controllers: Regions CRUD (DTOs & Mapping)',
      describes: `Build Regions controller with CRUD; use DTOs to shape payloads.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Create RegionsController' },
        { id: 2, name: 'GET: GetAll, GetById' },
        { id: 3, name: 'POST: Create Region' },
        { id: 4, name: 'PUT/PATCH: Update Region' },
        { id: 5, name: 'DELETE: Remove Region' },
        { id: 6, name: 'Introduce DTOs & Mapping Strategy' },
      ],
    },
    {
      title: 'Async Programming, Repository Pattern & AutoMapper',
      describes: `Use async/await everywhere, add repository/UoW, configure AutoMapper.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Async/Await & EF Core' },
        { id: 2, name: 'Repository Pattern & Unit of Work' },
        { id: 3, name: 'Add CRUD Methods in Repository' },
        { id: 4, name: 'AutoMapper Profiles for DTOs' },
      ],
    },
    {
      title: 'Northwind: Customers CRUD + Navigation Properties',
      describes: `Seed data, build customer endpoints, explore relations.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Seed Northwind Data' },
        { id: 2, name: 'Customers Controller: Create' },
        { id: 3, name: 'Customers Controller: Get All / By Id' },
        { id: 4, name: 'Update & Delete Customer' },
        { id: 5, name: 'Navigation Properties (Includes)' },
      ],
    },
    {
      title: 'Validation in ASP.NET Core Web API',
      describes: `Model validation, DataAnnotations, custom validators/filters.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Model Validation & ModelState' },
        { id: 2, name: 'DataAnnotations & FluentValidation (optional)' },
        { id: 3, name: 'Custom Validation Attributes' },
        { id: 4, name: 'Validation ProblemDetails' },
      ],
    },
    {
      title: 'Filtering, Sorting, Pagination (Query Features)',
      describes: `Query params, dynamic sorting, paging metadata & performance tips.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Seed Dataset for Demos' },
        { id: 2, name: 'Filtering by Fields' },
        { id: 3, name: 'Sorting (asc/desc) with Expressions' },
        { id: 4, name: 'Pagination & Metadata in Response' },
      ],
    },
    {
      title: 'Security: JWT + Identity + Roles + Swagger Auth',
      describes: `Identity setup, JWT issuance, role/claim based auth, swagger security.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Add Identity & DbContext Changes' },
        { id: 2, name: 'Seed Roles & Users' },
        { id: 3, name: 'Auth Controller: Register/Login' },
        { id: 4, name: 'Create & Validate JWT Tokens' },
        { id: 5, name: 'Role/Policy Based Authorization' },
        { id: 6, name: 'Swagger Bearer Authorization' },
      ],
    },
    {
      title: 'Advanced Concepts & Resilience',
      describes: `Logging, global exception handling, Serilog, HttpClientFactory & retry.',
      `,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Built‑in Logging + Serilog to File' },
        { id: 2, name: 'Global Exception Handling Middleware' },
        { id: 3, name: 'HttpClientFactory, Retry & Circuit Breaker (Polly)' },
      ],
    },
    {
      title: 'API Versioning & Documentation',
      describes: `Swashbuckle/OpenAPI docs, XML comments, API Versioning strategies.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Swagger UI & XML Comments' },
        { id: 2, name: 'Security Schemes (Bearer) in Swagger' },
        { id: 3, name: 'URL/Header/Query API Versioning' },
        { id: 4, name: 'Versioned Endpoints & Deprecation' },
      ],
    },
    {
      title: 'File Uploads & Static Files',
      describes: `IFormFile basics, streaming large files, validations & secure static hosting.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'IFormFile & Size Limits' },
        { id: 2, name: 'Streaming Uploads' },
        { id: 3, name: 'Whitelist, Virus Scan Hooks, Secure Paths' },
      ],
    },
    {
      title: 'Hosted Services & Background Jobs',
      describes: `IHostedService/BackgroundService, timers, graceful shutdown, queues.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'IHostedService Basics' },
        { id: 2, name: 'BackgroundService with Scoped Services' },
        { id: 3, name: 'Graceful Shutdown & Cancellation' },
      ],
    },
    {
      title: 'Testing, Health Checks & Performance',
      describes: `xUnit tests, WebApplicationFactory, health checks, caching/compression.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Unit & Integration Tests' },
        { id: 2, name: 'Health Checks & Liveness/Readiness' },
        { id: 3, name: 'Response Caching, Gzip/Brotli, ETags' },
      ],
    },
    {
      title: 'Deploying ASP.NET Core Web API to Azure',
      describes: `App Service vs Container Apps, publish profiles, GitHub Actions CI/CD.`,
      ProjectURL: '',
      ProjectGitHubURL: '',
      lessons: [
        { id: 1, name: 'Azure App Service Deployment' },
        { id: 2, name: 'App Settings & Secrets' },
        { id: 3, name: 'Custom Domain, HTTPS, Scaling & Diagnostics' },
      ],
    },
  ];

  // ======== VIDEOS (YouTube IDs optional; empty => access denied dialog) ========
  VideosList = [
    {
      title: 'Getting Started & Project Setup',
      describes: 'SDK install, first API, minimal vs controllers.',
      ProjectURL: '',
      lessons: [
        { id: 1, name: 'Install & Hello API', VideoId: '' },
        { id: 2, name: 'Minimal vs Controller APIs', VideoId: '' },
      ],
    },
    {
      title: 'EF Core & Repository',
      describes: 'DbContext, migrations, repo/UoW patterns.',
      ProjectURL: '',
      lessons: [
        { id: 1, name: 'DbContext & Migrations', VideoId: '' },
        { id: 2, name: 'Repository + UoW', VideoId: '' },
      ],
    },
    {
      title: 'Security & JWT',
      describes: 'Identity, roles, JWT issuance & Swagger auth.',
      ProjectURL: '',
      lessons: [
        { id: 1, name: 'Identity + Roles', VideoId: '' },
        { id: 2, name: 'JWT + Swagger', VideoId: '' },
      ],
    },
    {
      title: 'Versioning & Docs',
      describes: 'OpenAPI, security schemes, versioning.',
      ProjectURL: '',
      lessons: [
        { id: 1, name: 'Swagger/OpenAPI', VideoId: '' },
        { id: 2, name: 'API Versioning', VideoId: '' },
      ],
    },
  ];

  // ======== UI BEHAVIOR (same as your Angular component) ========
  selectedChapter: any = null;
  lessonSearch: string = '';

  filteredLessons(): any[] {
    if (!this.lessonSearch.trim()) {
      return this.selectedChapter?.lessons || [];
    }
    return (this.selectedChapter?.lessons || []).filter((l: any) =>
      l.name.toLowerCase().includes(this.lessonSearch.toLowerCase())
    );
  }

  openChapterModal(chapter: any): void {
    this.selectedChapter = chapter;
    this.lessonSearch = '';
    const modal = new bootstrap.Modal(document.getElementById('chapterModal'));
    modal.show();
  }

  openVideo(chapterTitle: string, lesson: any): void {
    this.selectedVideoTitle = `${chapterTitle} - ${lesson.name}`;
    const videoId = (lesson.VideoId || '').trim();

    if (!videoId) {
      this.showAccessDenied();
      return;
    }

    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
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
      backdrop && backdrop.remove();
    }, 300);
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
}
