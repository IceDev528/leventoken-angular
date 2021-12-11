import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shared-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(protected router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() { }

  ngOnDestroy() { }
}
