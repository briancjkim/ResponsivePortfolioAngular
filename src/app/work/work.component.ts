import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import portfolios from "../db";
@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"]
})
export class WorkComponent implements OnInit {
  private portfolios = portfolios;
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("My Work");
  }
}
