import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {

// @Input({required:true}) imagedata!: { src: string; alt: string;}
// @Input({required:true}) title!: string;

//using signal

image = input.required< { src: string; alt: string;}>();
title = input.required<string>();

}
