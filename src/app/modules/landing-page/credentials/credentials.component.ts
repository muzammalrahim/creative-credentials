import { CompanyService } from './../../../services/company.service';
import { ApiWrapperService } from './../../../services/apiwrapperservice';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {
  faPlus = faPlus;
  cards: any;
  company_name: any;
  checker: boolean = false;

  @ViewChild('content', { static: true }) public content_: ElementRef;
  closeResult: string;
  description: any;
  project_id: any;
  object_send: { company_name: any; project_id: any; };
  constructor(private api: ApiWrapperService, private modalService: NgbModal, private companyService: CompanyService) { }

  ngOnInit() {
    this.checker = false;
    this.company_name = this.companyService.getCompanyName();
    this.api.post(environment.credentials, { company_name: this.company_name }).subscribe(res => {

      this.cards = res.projects.map(data => {
        data.icon = faProjectDiagram;
        data.heading = data.title;
        data.background = '#013220';
        data.stat = [{
          statName: 'Client Name:',
          statValue: data.client_id.name
        }]

        return data

      });
      this.checker = true;
      console.log(this.cards[0].icon);
    });

    // this.cards = [
    //   {
    //     icon: faProjectDiagram,
    //     heading: 'Users',
    //     background: '#800080',
    //     routerLink: '../users',
    //     stat: [
    //       // {
    //       //   statName: 'Current Users',
    //       //   statValue: ''
    //       // },
    //     ]
    //   },
    // ]


  }

  cardFunction(project_id) {
    console.log("cardfunction", project_id);
    this.company_name = this.companyService.getCompanyName();
    this.project_id = project_id;
    this.object_send = { company_name: this.company_name, project_id: this.project_id };

    this.api.post(environment.projdescription, this.object_send).subscribe(data => {
      this.description = data.projects.description;
      console.log("kjkjk", data.projects,this.description);
      this.open(this.content_);

    }
    )
  }





  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}



