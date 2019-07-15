import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Kingdom Game',
      description: 'Развиваюая игра, где игрок выполняет различные задания, чтобы победить монстра. Если игрок дает неверный ответ, то монстр наносит ему удар, уменьшающий единицы здоровья игрока.',
      image: 'assets/projects/game.png',
      link: 'https://375291601334.github.io/'
    },
    {
      name: 'GhostHost',
      description: 'Пример верстки сайта. Использовался только HTML и CSS. ',
      image: 'assets/projects/gosthost.png',
      link: 'https://375291601334.github.io/Homework-markup-2018q3/'
    },
    {
      name: 'Mentor Dashboard',
      description: 'Проект реализован на React. Использована технология Firebase Authentication для получения Github-логина пользователя.',
      image: 'assets/projects/mentor-dashboard.png',
      link: 'https://375291601334.github.io/rss-mentor-dashboard/'
    },
    {
      name: 'Youtube Search',
      description: 'Проект написан на чистом JS. Использовалась YouTube Data API для поиска и получения информации о видео.',
      image: 'assets/projects/youtube-search.png',
      link: 'https://375291601334.github.io/youtube-client/'
    },
    {
      name: 'Culture Portal',
      description: 'Одностаничный сайт на React с использованием Material-UI. Он предоставляет информацию по театральным режиссерам с их биографией, видео из Youtube и отметкой на Google Map.',
      image: 'assets/projects/culture-portal.png',
      link: 'https://alenakharytonchyk.github.io/CodeJam-Culture-Portal_gr24/'
    },
    {
      name: 'Teacher Journal App',
      description: 'Сайт на Angular, предоставляющий возможность работать с информацией о студентах и их оценками по принципу школьного журнала.',
      image: 'assets/projects/teacher-journal-app.png',
      link: 'https://375291601334.github.io/Teacher-Journal-App'
    },
  ];

  openProjectLink(link) {
    parent.open(link);
  }
}

