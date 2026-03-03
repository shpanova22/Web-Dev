import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AlbumService} from '../../album.service';
import {Album} from '../../models'

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent implements OnInit{
  album!: Album; 
  loading: boolean=true;
  newTitle:string=' ';

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ){}

  ngOnInit(): void{
    const id= Number (this.route.snapshot.paramMap.get('id'));
   
    
    this.albumService.getAlbum(id).subscribe({
      next:(data)=>{
        this.album=data;
        this.newTitle=data.title;
        this.loading=false;

      }
    });
  }
  save(): void{
    const updatedAlbum={...this.album, title:this.newTitle};
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next:(res)=>{
        this.album.title=res.title;
        alert('Album updated successfully(simulated)!');
      }
    });
  }
  goBack(): void{
    this.router.navigate(['/albums']);
  }

}
