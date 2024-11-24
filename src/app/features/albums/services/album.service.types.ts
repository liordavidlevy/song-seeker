export interface AlbumsResponse {
  albums: Albums;
}

export interface Albums {
  total: number;
  items: AlbumItem[];
}

export interface AlbumItem {
  album_type: string;
  total_tracks: number;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  artists: Artist[];
}

export interface Image {
  url: string;
}

export interface Artist {
  id: string;
  name: string;
}

export interface AlbumResponse {
  total_tracks: number;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  album_type: string;
  artists: Artist[];
  tracks: Tracks;
  label: string;
  popularity: number;
}

export interface Tracks {
  total: number;
  items: TrackItem[];
}

export interface TrackItem {
  artists: Artist[];
  duration_ms: number;
  id: string;
  name: string;
  preview_url: string;
}