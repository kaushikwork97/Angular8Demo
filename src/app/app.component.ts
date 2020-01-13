import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'exchange-app';
  author = 'Kaushik Designer';

  constructor(private http: HttpClient,
    private ngxLoader: NgxUiLoaderService) { }

    ngOnInit() {
      this.ngxLoader.start();
      this.http.get(`https://api.npmjs.org/downloads/range/last-month/ngx-ui-loader`).subscribe((res: any) => {
        // console.log(res);
        this.ngxLoader.stop();
      });
    }
}
