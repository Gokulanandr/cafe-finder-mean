import { Component, Input, OnChanges } from '@angular/core';
import { CafeService } from '../../services/cafe';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

type Cafe = {
  id: string;
  displayName?: { text: string; languageCode?: string };
  formattedAddress?: string;
  rating?: number;
  userRatingCount?: number;
  iconMaskBaseUri?: string;
  photos?: { name: string; widthPx?: number; heightPx?: number }[];
  location?: { latitude: number; longitude: number };
};

@Component({
  selector: 'app-cafe-list',
  imports: [CommonModule],
  templateUrl: './cafe-list.html',
  styleUrl: './cafe-list.css',
})
export class CafeList implements OnChanges {
  @Input() cafes: Cafe[] = [];

  constructor(private cafeService: CafeService) {}

  photosMap: { [id: string]: string } = {};

  getPhotoUrl(c: Cafe): Observable<string> | null {
    if (!c.photos || !c.photos.length) return null;
    const photoName = c.photos[0].name;
    const photoReference = photoName.split('/').pop() as string;
    return this.cafeService.getPhoto(photoReference, 600);
  }

  onOpenMap(c: Cafe) {
    if (!c.location) return;
    const lat = c.location.latitude;
    const lng = c.location.longitude;
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  }

  onNavigate(c: Cafe) {
    if (!c.location) return;
    const lat = c.location.latitude;
    const lng = c.location.longitude;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  }

  ngOnChanges() {
    this.cafes.forEach((cafe) => {
      if (cafe.photos && cafe.photos.length) {
        const photoName = cafe.photos[0].name;
        const photoReference = photoName.split('/').pop();
        this.cafeService.getPhoto(photoReference!).subscribe((url) => {
          this.photosMap[cafe.id] = url;
        });
      }
    });
  }
}
