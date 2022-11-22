import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }








  public posts = [
    {Header: 'Для начала нужно определиться в какую сторону будет загиб крюка.', Text: 'То есть понять на какую сторону вам удобнее держать клюшку и на какой стороне вам удобнее ей делать броски.'},
    {Header: 'Вторым делаом надо понять какой длины будет ваша клюшка?', Text: 'Длина клюшки делится на три типа:1)клюшка по подбородок.2)клюшка по губы.3)клюшка по нос. '},
    {Header: 'Потом надо выбрать гипкость клюшки(flex)', Text: 'в выборе флекса всё зависит от вас, то есть с каким флексом вам удобнее бросать тот и надо брать. Но флекс есть только у хороших клюшек, то есть не деревянных.'},
    {Header: 'И последним делом надо смотреть на бренд и цену ', Text: 'Потому что все удобные клюшки дорогие, а бренд не надо выбирать, потому что они все делаются практически по одинаковым технологиям.'},
  ] 
}
