type Song = {
	title: string;
	artist: string;
};

type SongLyrics = {
	lyrics: string;
} & Song;
