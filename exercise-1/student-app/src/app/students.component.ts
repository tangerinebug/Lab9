@Component({
    selector: 'students',
    template: `<h2>{{getTitle()}}<br>{{getCurrentDate()}}</h2>`
})
export class StudentsComponent{
   title = "My List of Students";
    date = new Date();
   getTitle(){
       return this.title;
   }
   getCurrentDate(){
        return this.date;
   }

}
import { Component } from "@angular/core";import { getOrCreateInjectable } from "@angular/core/src/render3/di";
