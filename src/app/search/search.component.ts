import {Component, OnInit} from '@angular/core';
import {
  Router,
  ActivatedRoute,
} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string | undefined;
  results: Object | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route
      .queryParams
      .subscribe(params => { this.query = params['query'] || ''; });
  }
  //route.param은 옵저버블이라 .subscribe로 가져와야한다 
  //여기서 route의 queryParams의 값을 가져온다
  //queryParams의 query라는 값이 있으면 값을 query변수에 넣고 없으면 빈문자열 set

  ngOnInit(): void {
    
  }

  submit(query: string): void {
    console.log(query);
    this.router.navigate(['search'], { queryParams: { query: query } }); 
    //navigate가 실행되면서 search라는 주소로 이동할떄 queryParams에 query="값"이런식으로 set해서 간다(이름 : 변수)
  }



  
}
