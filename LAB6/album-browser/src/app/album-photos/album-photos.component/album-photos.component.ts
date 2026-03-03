import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../../album.service';
import { Photo } from '../../models';


@Component({
  selector: 'app-album-photos.component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css',
})
export class AlbumPhotosComponent implements OnInit {
       photos: Photo[] = [];
       loading: boolean = true;
       albumId!: number;

       constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}


  ngOnInit(): void {
    
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
