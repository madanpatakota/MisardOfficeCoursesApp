import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

declare var bootstrap: any;

@Component({
  selector: 'app-html-beginners-test',
  templateUrl: './html-beginners-test.component.html',
  styleUrls: ['./html-beginners-test.component.css']
})
export class HtmlBeginnersComponent_test implements OnInit {
  videos = [
    {
      id: 'k4nwExi-cjA',
      title: 'Session 01 - Introduction to HTML',
      points: [
        'What is HTML?',
        'Basic structure of an HTML document',
        'Tools to write HTML (VS Code, Sublime Text, Notepad)'
      ],
      image: "Part1.png"
    },
    {
      id: 'abcd1234',
      title: 'Session 02 - Understanding HTML Tags',
      points: [
        'Heading Element',
        'Paragraph Element',
        'Text formatting (strong, id, name attributes)',
        'Image Element',
      ],
      image: "Part2.png"
    },
    {
      id: 'abcd1234',
      title: 'Session 02 - Understanding HTML Tags',
      points: [
        'Heading Element',
        'Paragraph Element',
        'Text formatting (strong, id, name attributes)',
        'Image Element',
      ],
      image: "Part2.png"
    },
    {
      id: 'abcd1234',
      title: 'Session 02 - Understanding HTML Tags',
      points: [
        'Heading Element',
        'Paragraph Element',
        'Text formatting (strong, id, name attributes)',
        'Image Element',
      ],
      image: "Part2.png"
    },
    {
      id: 'abcd1234',
      title: 'Session 02 - Understanding HTML Tags',
      points: [
        'Heading Element',
        'Paragraph Element',
        'Text formatting (strong, id, name attributes)',
        'Image Element',
      ],
      image: "Part2.png"
    },
    {
      id: 'abcd1234',
      title: 'Session 02 - Understanding HTML Tags',
      points: [
        'Heading Element',
        'Paragraph Element',
        'Text formatting (strong, id, name attributes)',
        'Image Element',
      ],
      image: "Part2.png"
    },
    {
      id: 'abcd1234',
      title: 'Session 02 - Understanding HTML Tags',
      points: [
        'Heading Element',
        'Paragraph Element',
        'Text formatting (strong, id, name attributes)',
        'Image Element',
      ],
      image: "Part2.png"
    },
    {
      id: 'abcd1234',
      title: 'Session 02 - Understanding HTML Tags',
      points: [
        'Heading Element',
        'Paragraph Element',
        'Text formatting (strong, id, name attributes)',
        'Image Element',
      ],
      image: "Part2.png"
    },
    {
      id: 'abcd1234',
      title: 'Session 02 - Understanding HTML Tags',
      points: [
        'Heading Element',
        'Paragraph Element',
        'Text formatting (strong, id, name attributes)',
        'Image Element',
      ],
      image: "Part2.png"
    }
  ];

  showScrollButton = false; // <-- Added here

  ngOnInit() {
    AOS.init({
      duration: 1200,
      once: true
    });
  }

  openVideo(videoId: string) {
    const modalElement = document.getElementById('videoModal');
    const iframeElement = document.getElementById('youtubeFrame') as HTMLIFrameElement;

    if (iframeElement) {
      iframeElement.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    }

    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  closeVideo() {
    const iframeElement = document.getElementById('youtubeFrame') as HTMLIFrameElement;

    if (iframeElement) {
      iframeElement.src = '';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
