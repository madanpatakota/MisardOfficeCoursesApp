import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import Swal from 'sweetalert2';

declare var bootstrap: any;

@Component({
  selector: 'app-javascript-training',
  templateUrl: './javascript-training.component.html',
  styleUrls: ['./javascript-training.component.css']
})
export class JavascriptTrainingComponent implements OnInit {

  courseTopics = [
    { session: 'Session 01', details: 'JavaScript: An Introduction' },
    { session: 'Session 02', details: 'Setup & Console' },
    { session: 'Session 03', details: 'Variables, Comments & Datatypes' },
    { session: 'Session 04', details: 'Primitive Data types with examples' },
    { session: 'Session 05', details: 'Non-Primitive Datatypes with Examples' },
    { session: 'Session 06', details: 'Function & its inputs' },
    { session: 'Session 07', details: 'Return and Non-return functions' },
    { session: 'Session 08', details: 'Function types' },
    { session: 'Session 09', details: 'Anonymous Functions' },
    { session: 'Session 10', details: 'Anonymous Function: Key Points' },
    { session: 'Session 11', details: 'Arrow Functions' },
    { session: 'Session 12', details: 'Execution Context' },
    { session: 'Session 13', details: 'Scope Chain' },
    { session: 'Session 14', details: 'Overview of Code Debugging' },
    { session: 'Session 15', details: 'The Process of Debugging Code' },
    { session: 'Session 16', details: 'Members of Complex Data Types' },
    { session: 'Session 17', details: 'Purpose of "this" keyword' },
    { session: 'Session 18', details: 'Function Property Members & Prototype' },
    { session: 'Session 19', details: 'Using "this" with Function Method Members & How to use Call , apply , bind methods' },
    { session: 'Session 20', details: 'Conditional Statements: if, else if, else' },
    { session: 'Session 21', details: 'Conditional Statements: switch..case' },
    { session: 'Session 22', details: 'Comparison and Logical Operators' },
    { session: 'Session 23', details: 'Errors & How to Handle' },
    { session: 'Session 24', details: 'What is Looping System' },
    { session: 'Session 25', details: 'Looping: for' },
    { session: 'Session 26', details: 'Looping: while & do…while' },
    { session: 'Session 27', details: 'Callback Functions' },
    { session: 'Session 28', details: 'Callback Hell' },
    { session: 'Session 29', details: 'Understand type of calls' },
    { session: 'Session 30', details: 'Call types: Synchronous Calls & Its Disadvantages' },
    { session: 'Session 31', details: 'Call types: ASynchronous Calls & Its Advantages' },
    { session: 'Session 32', details: 'Handle Asynchronous calls by callbacks' },
    { session: 'Session 33', details: 'What is Promise & Prepare the single Promise' },
    { session: 'Session 34', details: 'Handle Asynchronous calls by Multiple Promises' },
    { session: 'Session 35', details: 'What is Fetch Promise' },
    { session: 'Session 36', details: 'Handle Asynchronous calls by async & await' },
    { session: 'Session 37', details: 'What is Class' },
    { session: 'Session 38', details: 'How to apply Inhertience by using Class' },
    { session: 'Session 39', details: 'Modules: import and export' },
    { session: 'Session 40', details: 'Browser Storage' }
  ];


  videos = [
    { id: 'E8vlKAvirv8', title: 'Session 01 - JavaScript: An Introduction', thumbnail: '../../../../assets/images/JS/Thumbnails/Part1.jpg' },
    { id: '5516N46-M_g', title: 'Session 02 - Setup & Console', thumbnail: '../../../../assets/images/JS/Thumbnails/Part2.jpg' },
    { id: '4d10uOCIBig', title: 'Session 03 - Variables, Comments & Datatypes', thumbnail: '../../../../assets/images/JS/Thumbnails/Part3.jpg' },
    { id: 'zQU4qV3jvRg', title: 'Session 04 - Primitive Data types with examples', thumbnail: '../../../../assets/images/JS/Thumbnails/Part4.jpg' },
    { id: 'ofM1AL8vARY', title: 'Session 05 - Non-Primitive Datatypes with Examples', thumbnail: '../../../../assets/images/JS/Thumbnails/Part5.jpg' },
    { id: 'HPhGyao4sck', title: 'Session 06 - Function & its inputs', thumbnail: '../../../../assets/images/JS/Thumbnails/Part6.jpg' },
    { id: 'D6yfx_-Sl8s', title: 'Session 07 - Return and Non-return functions', thumbnail: '../../../../assets/images/JS/Thumbnails/Part7.jpg' },
    { id: 'I_mkTJXpm2M', title: 'Session 08 - Function types', thumbnail: '../../../../assets/images/JS/Thumbnails/Part8.jpg' },
    { id: '7QbTShPZ6Zw', title: 'Session 09 - Anonymous Functions', thumbnail: '../../../../assets/images/JS/Thumbnails/Part9.jpg' },
    { id: 'tmSmR4ovEQI', title: 'Session 10 - Anonymous Function: Key Points', thumbnail: '../../../../assets/images/JS/Thumbnails/Part10.jpg' },
    { id: 'TqTjzATsrno', title: 'Session 11 - Arrow Functions', thumbnail: '../../../../assets/images/JS/Thumbnails/Part11.jpg' },
    { id: 'iCkeF1gB3lY', title: 'Session 12 - Execution Context', thumbnail: '../../../../assets/images/JS/Thumbnails/Part12.jpg' },
    { id: 'Odcj7fKA1ms', title: 'Session 13 - Scope Chain', thumbnail: '../../../../assets/images/JS/Thumbnails/Part13.jpg' },
    { id: 'RNfQyuYX5lM', title: 'Session 14 - Overview of Code Debugging', thumbnail: '../../../../assets/images/JS/Thumbnails/Part14.jpg' },
    { id: '9Cdx6vWSn9A', title: 'Session 15 - The Process of Debugging Code', thumbnail: '../../../../assets/images/JS/Thumbnails/Part15.jpg' },
    { id: 'NzKxz3UFP7Y', title: 'Session 16 - Members of Complex Data Types', thumbnail: '../../../../assets/images/JS/Thumbnails/Part16.jpg' },
    { id: 'MA1UkT6X8Xg', title: 'Session 17 - Purpose of "this" keyword', thumbnail: '../../../../assets/images/JS/Thumbnails/Part17.jpg' },
    { id: 'i9mbn1ndH48', title: 'Session 18 - Function Property Members & Prototype', thumbnail: '../../../../assets/images/JS/Thumbnails/Part18.jpg' },
    { id: 't2-8ik1trk4', title: 'Session 19 - Using "this" with Function Method Members & How to use Call , apply , bind methods', thumbnail: '../../../../assets/images/JS/Thumbnails/Part19.jpg' },
    { id: 'bOlW9o3zmx0', title: 'Session 20 - Conditional Statements: if, else if, else', thumbnail: '../../../../assets/images/JS/Thumbnails/Part20.jpg' },
    { id: 'VNcEnOCKr6s', title: 'Session 21 - Conditional Statements: switch...case', thumbnail: '../../../../assets/images/JS/Thumbnails/Part21.jpg' },
    { id: '7eYw2DAe3fI', title: 'Session 22 - Comparison & Logical Opertators ', thumbnail: '../../../../assets/images/JS/Thumbnails/Part22.jpg' },
    { id: 'jXafOkXtIaY', title: 'Session 23 - Errors & How to handle Errors', thumbnail: '../../../../assets/images/JS/Thumbnails/Part23.jpg' },
    { id: 'hqhVCAtRkNQ', title: 'Session 24 - What is Looping System', thumbnail: '../../../../assets/images/JS/Thumbnails/Part24.jpg' },
    { id: 'J2EVrc0vYnc', title: 'Session 25 - Looping: for...of & for...in', thumbnail: '../../../../assets/images/JS/Thumbnails/Part25.jpg' },
    { id: 'BF6DR726APA', title: 'Session 26 - Looping: while & do...while', thumbnail: '../../../../assets/images/JS/Thumbnails/Part26.jpg' },
    { id: 'kFu8Y2yuSdo', title: 'Session 27 - Callback Functions', thumbnail: '../../../../assets/images/JS/Thumbnails/Part27.jpg' },
    { id: 'vqKhesdjZj0', title: 'Session 28 - Callback Hell', thumbnail: '../../../../assets/images/JS/Thumbnails/Part28.jpg' },
    { id: 'HoMiQbBUK2I', title: 'Session 29 - Understand type of calls', thumbnail: '../../../../assets/images/JS/Thumbnails/Part29.jpg' },
    { id: '9aWEUIAzPFw', title: 'Session 30 - Call types: Synchronous Calls & Its Disadvantages', thumbnail: '../../../../assets/images/JS/Thumbnails/Part30.jpg' },
    { id: 'AHTqZnf0b0M', title: 'Session 31 - Call types: ASynchronous Calls & Its Advantages', thumbnail: '../../../../assets/images/JS/Thumbnails/Part31.jpg' },
    { id: 'lQKAlp9U5bQ', title: 'Session 32 - Async: Handle Asynchronous calls by callbacks', thumbnail: '../../../../assets/images/JS/Thumbnails/Part32.jpg' },
    { id: '1PjCPz1KEYc', title: 'Session 33 - What is Promise & Prepare the single Promise', thumbnail: '../../../../assets/images/JS/Thumbnails/Part33.jpg' },
    { id: 'IRSceSG4238', title: 'Session 34 - Handle Asynchronous calls by Multiple Promises ', thumbnail: '../../../../assets/images/JS/Thumbnails/Part34.jpg' },
    { id: 'qC_cCw3ehVw', title: 'Session 35 - What is Fetch Promise', thumbnail: '../../../../assets/images/JS/Thumbnails/Part35.jpg' },
    { id: 'SqzbO3UB_Y8', title: 'Session 36 - Handle Asynchronous calls by async & await', thumbnail: '../../../../assets/images/JS/Thumbnails/Part36.jpg' },
    { id: '', title: 'Session 37 - What is Class', thumbnail: '../../../../assets/images/JS/Thumbnails/Part37.jpg' },
    { id: '', title: 'Session 38 - How to apply Inhertience by using Class', thumbnail: '../../../../assets/images/JS/Thumbnails/Part38.jpg' },
    { id: '', title: 'Session 39 - Modules: import and export', thumbnail: '../../../../assets/images/JS/Thumbnails/Part39.jpg' },
    { id: '', title: 'Session 40 - Browser Storage', thumbnail: '../../../../assets/images/JS/Thumbnails/Part40.jpg' },


  ];




  ngOnInit() {
    AOS.init({ duration: 1200, once: true });
  }

  // openVideo(videoId: string) {
  //   const modal = new bootstrap.Modal(document.getElementById('videoModal'));
  //   const iframe = document.getElementById('youtubeFrame') as HTMLIFrameElement;
  //   iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
  //   modal.show();
  // }

  openVideo(id: string): void {
    if (!id || id.trim() === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Access Denied',
        html: `🚫 You don’t have permission to view this video.<br><br>
             📩 Please contact your trainer to get access.`,
        confirmButtonText: 'Okay',
        confirmButtonColor: '#144164',
        backdrop: true,
        width: '400px'
      });
      return;
    }

    const iframe = document.getElementById('youtubeFrame') as HTMLIFrameElement;
    iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
    //iframe.src = `https://www.youtube.com/watch?v=E8vlKAvirv8`;
    const modalElement = document.getElementById('videoModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  closeVideo(): void {
    const iframe = document.getElementById('youtubeFrame') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = '';
    }
  }
  // Add your existing properties and methods here

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
