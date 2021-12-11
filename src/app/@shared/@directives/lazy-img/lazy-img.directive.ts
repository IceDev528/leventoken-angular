import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';
import { CommonService } from 'src/app/@core/@services/common.service';
import { CustomToastService } from 'src/app/@core/@services/toast.service';

@Directive({
  selector: 'img[lazyImg]',
})
export class LazyImgDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;

  constructor(private el: ElementRef, private cs: CommonService, private toastService: CustomToastService,) { }

  ngAfterViewInit() {
    if (this.cs.isBrowser())
      this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.srcAttr = this.src as any;
  }
}
