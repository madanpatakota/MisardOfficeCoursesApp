import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

declare var bootstrap: any;

@Component({
  selector: 'app-html-beginners-course',
  templateUrl: './html-beginners.component.html',
  styleUrls: ['./html-beginners.component.css']
})
export class HtmlBeginnersComponent implements OnInit {


  courseTopics = [
    { session: 'Session 01', details: 'Introduction to HTML - What is HTML? Basic structure and tools.' },
    { session: 'Session 02', details: 'Basic HTML Elements - Headings, Paragraphs, Formatting, Images.' },
    { session: 'Session 03', details: 'Lists and Navigation - Lists, Links, Title, Meta tags.' },
    { session: 'Session 04', details: 'Styling HTML - Inline/Internal CSS, Selectors.' },
    { session: 'Session 05', details: 'CSS Basics - ID/Class selectors, Global attributes, External styles.' },
    { session: 'Session 06', details: 'HTML Layout - Box Model, Div and Span elements.' },
    { session: 'Session 07', details: 'Block vs Inline Elements - Grid Systems.' },
    { session: 'Session 08', details: 'Semantic HTML - Header, Nav, Article, Section, Footer.' },
    { session: 'Session 09', details: 'HTML Page Layout - Complete layout creation.' },
    { session: 'Session 10', details: 'HTML Tables - Table structure, Rowspan, Colspan.' },
    { session: 'Session 11', details: 'HTML Forms - Input fields, Textareas, Select, Buttons.' }
  ];

  videos = [
    { id: 'k4nwExi-cjA', title: 'Session 01 - Introduction to HTML', thumbnail: 'https://img.youtube.com/vi/k4nwExi-cjA/0.jpg' },
    { id: 'GiGThaM14a4', title: 'Session 02 - Basic HTML Elements', thumbnail: 'https://img.youtube.com/vi/GiGThaM14a4/0.jpg' },
    { id: 'CDD8ONlvQ_w', title: 'Session 03 - Lists and Navigation', thumbnail: 'https://img.youtube.com/vi/CDD8ONlvQ_w/0.jpg' },
    { id: 'iksUXORXGi4', title: 'Session 04 - Styling HTML', thumbnail: 'https://img.youtube.com/vi/iksUXORXGi4/0.jpg' },
    { id: '4Z7bv7eXocQ', title: 'Session 05 - CSS Basics', thumbnail: 'https://img.youtube.com/vi/4Z7bv7eXocQ/0.jpg' },
    { id: 'rTAuS9k7jy0', title: 'Session 06 - HTML Layout', thumbnail: 'https://img.youtube.com/vi/rTAuS9k7jy0/0.jpg' },
    { id: 'dQ0kGuChnoA', title: 'Session 07 - Block vs Inline Elements', thumbnail: 'https://img.youtube.com/vi/dQ0kGuChnoA/0.jpg' },
    { id: '5CTVB3rADZU', title: 'Session 08 - Semantic HTML', thumbnail: 'https://img.youtube.com/vi/5CTVB3rADZU/0.jpg' },
    { id: 'JEtfU1R7rdE', title: 'Session 09 - HTML Page Layout', thumbnail: 'https://img.youtube.com/vi/JEtfU1R7rdE/0.jpg' },
    { id: 'r4m0VSiMX60', title: 'Session 10 - HTML Tables', thumbnail: 'https://img.youtube.com/vi/r4m0VSiMX60/0.jpg' },
    { id: 'fLe99nW9KPo', title: 'Session 11 - HTML Forms', thumbnail: 'https://img.youtube.com/vi/fLe99nW9KPo/0.jpg' }
    // ➡️ You can continue adding your session videos here by YouTube video IDs
  ];

  ngOnInit() {
    AOS.init({ duration: 1200, once: true });
  }

  openVideo(videoId: string) {
    const modalElement = document.getElementById('videoModal');
    const iframeElement = document.getElementById('youtubeFrame') as HTMLIFrameElement;
    iframeElement.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  closeVideo() {
    const iframeElement = document.getElementById('youtubeFrame') as HTMLIFrameElement;
    iframeElement.src = '';
  }
}

