import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCountdownTimer]'
})
export class CountdownTimerDirective implements OnInit {
  @Input('endDate') endDate!: any;
  TimetoClose: any;
  currentDate = new Date();
  seconds: any;
  interval:any;
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.endDate = new Date(Number(this.endDate));
    this.seconds = (this.endDate.getTime() - this.currentDate.getTime()) / 1000;
    this.countDown();
  }

  convertToString() {
    if (this.seconds==0){
      clearInterval(this.interval);
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', 'Auction Ended');
    }
    let seconds = this.seconds
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay = d > 0 ? d + (d == 1 ? " d, " : " d, ") : "0 d, ";
    var hDisplay = h > 0 ? h + (h == 1 ? " h, " : " h, ") : "0 h, ";
    var mDisplay = m > 0 ? m + (m == 1 ? " m, " : " m, ") : "0 m, ";
    var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "0 s";
    let ui ='<div class=" d-flex justify-content-center align-items-center"><div class="days-hors text-center"><strong>'+d+'<span>:</span></strong><p>Days</p></div><div class="days-hors text-center"><strong>'+h+'<span>:</span></strong><p>Hours</p></div><div class="days-hors text-center"><strong>'+m+'<span>:</span></strong><p>Minutes</p></div><div class="days-hors text-center"><strong>'+s+'</strong><p>Seconds</p></div></div>'

    let stringvalue = dDisplay + hDisplay + mDisplay + sDisplay;
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', ui);


  }

  private countDown() {
    // this.clearTimer();
  this.interval=  window.setInterval(() => {
      this.seconds -= 1;
      this.convertToString();
      // if (this.seconds === 0) {
      //   // this.message = 'Blast off!';
      // } else {
      //   if (this.seconds < 0) { this.seconds = 10; } // reset
      //   // this.message = `T-${this.seconds} seconds and counting`;
      // }
    }, 1000);

  }
}
