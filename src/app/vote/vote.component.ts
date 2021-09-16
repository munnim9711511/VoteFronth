import { Component, OnInit } from '@angular/core';
import { AjendaService } from '../ajenda.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  title: string = "";
  summery: string = "";
  file: any;

  constructor(private readonly ajendaService: AjendaService) { }

  ngOnInit(): void {
  }
  onFileUpload($event: any) {
    console.log($event.target.files[0]);
    this.file = $event.target.files[0];
  }
  uploadAjenda() {
    console.log("uploaded");
    var formData = new FormData();
    formData.append("Doc",this.file);
    formData.append("Title",this.title);
    formData.append("Discription",this.summery);
    this.ajendaService.postAgenda(formData).subscribe((data:any)=>{
      console.log("updated");
    })
  }
}
