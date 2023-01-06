# Karaoke App

An Angular webapp that lets you view and edit lyric files (.lrc).

.lrc files are in the form:

```lrc
[mm:ss.ms]Line text
```

The viewer loads this file and plays it, highlighting each line at the given timestamp like a karaoke machine shows lyrics as they are sung.

This can be used for managing and viewing your own lyrics when sites like Musixmatch don't provide lyrics to your standard or at all.

## Usage

Clone this project then CD into each directory individually (`cd api`, `cd client` in separate terminals) and run `yarn dev` for reload-on-save or `yarn start` for a single run.
