import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album, Photo} from './models';

@Injectable({providedIn: 'root'})
export class AlbumService {
    // 1. УБРАН ПРОБЕЛ ПЕРЕД HTTPS
    private baseUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) {}

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(`${this.baseUrl}/albums`);
    }

    getAlbum(id: number): Observable<Album> {
        return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
    }

    getAlbumPhotos(id: number): Observable<Photo[]> {
        // 2. ИСПРАВЛЕН ПУТЬ К ФОТО
        return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
    }

    updateAlbum(album: Album): Observable<Album> {
        // 3. ИСПРАВЛЕН СИНТАКСИС (ДОБАВЛЕНА {)
        return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
    }

    deleteAlbum(id: number): Observable<any> {
        // 4. ИСПРАВЛЕН ПУТЬ УДАЛЕНИЯ
        return this.http.delete(`${this.baseUrl}/albums/${id}`);
    }
}