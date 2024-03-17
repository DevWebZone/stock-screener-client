import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

ngOnInit() {
    // after authorization redirection page. authorization code is recieved in query params
    const queryParams = this.route.snapshot.queryParams;
    console.log(queryParams); // Log the query parameters

    // Handle redirect based on queryParams
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve' // Preserve query params
  };
  this.router.navigate(["/app"], navigationExtras); // navigate to main app page after recieving authorization code
    
}
}
