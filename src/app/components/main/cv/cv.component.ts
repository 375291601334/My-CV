import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  education = [
    {
      name: 'БГЭУ',
      time: '2012-2017',
      description: 'Экономическая кибернетика (оптимальное планирование и управление в экономике)'
    },
    {
      name: 'Streamline English Courses',
      time: '2018, 2019',
      description: 'Уровни B2 и С1'
    },
    {
      name: 'Course "JavaScript. Fundamentals"',
      time: '2018',
      description: 'IBA 3-month JavaScript course'
    },
    {
      name: 'Rolling scopes School',
      time: '2018-2019',
      description: 'Half-year corse of web-development'
    }
  ];

  workExperience = [
    {
      name: 'ЗАО "Альфа-Банк"',
      time: '2016-2019',
      description: 'Разработчик програмного обеспечения операционного дня банка (back-end developer)'
    },
    {
      name: 'EPAM',
      time: '2019',
      description: 'JavaScript front-end software engeneer'
    },
  ];

  skills = [
    {
      name: 'HTML',
      stars: 4,
    },
    {
      name: 'CSS',
      stars: 3,
    },
    {
      name: 'JavaScript',
      stars: 4,
    },
    {
      name: '   ',
      stars: 0,
    },
    {
      name: '   ',
      stars: 0,
    },
    {
      name: 'Angular',
      stars: 4,
    },
    {
      name: 'React',
      stars: 2,
    },
    {
      name: 'Redux, ngrx',
      stars: 4,
    },
    {
      name: '   ',
      stars: 0,
    },
    {
      name: '   ',
      stars: 0,
    },
    {
      name: 'SQL',
      stars: 4,
    },
    {
      name: 'DB2',
      stars: 4,
    },
    {
      name: 'IBMi RPG iV',
      stars: 5,
    }
  ];

  constructor() {}

  ngOnInit() {}
}
