import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AlbumService} from '../../album.service';
import {Album} from '../../models';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent implements OnInit{
  albums: Album[]=[];
  loading: boolean=false;

  
  constructor(private albumService: AlbumService) {}
  

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Ошибка при загрузке:', err);
        this.loading = false;
      }
    });
  }

  deleteAlbum(event: Event, id: number): void {
    
    event.stopPropagation();

    this.albums = this.albums.filter(album => album.id !== id);

    this.albumService.deleteAlbum(id).subscribe();
  }
}