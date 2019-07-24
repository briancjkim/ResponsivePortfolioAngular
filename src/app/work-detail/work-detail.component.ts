import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import portfolios from "../db";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-work-detail",
  templateUrl: "./work-detail.component.html",
  styleUrls: ["./work-detail.component.scss"]
})
export class WorkDetailComponent implements OnInit {
  private portfolios = portfolios;
  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}
  private selectedPortfolio;
  ngOnInit() {
    //set selectedPortfolio from db.ts
    this.route.params.subscribe(params => {
      portfolios.forEach(portfolio => {
        if (portfolio.id == params.id) {
          this.selectedPortfolio = portfolio;
          return;
        }
      });
    });
    // set Title name
    this.titleService.setTitle(`My Work | ${this.selectedPortfolio.title}`);
  }
}
