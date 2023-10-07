# Record Collection Management

This JavaScript code provides a simple way to manage a collection of music albums. The collection is organized as an object, with each album represented by a unique ID as a property name. Each album object can contain various properties, such as the album title, artist, and tracks.

## Functionality

The `updateRecords` function is used to update and modify the album collection based on specific rules:

1. If `value` is an empty string, the function deletes the specified `prop` property from the album.

2. If `prop` isn't "tracks" and `value` isn't an empty string, the function assigns the `value` to the specified `prop` for the album.

3. If `prop` is "tracks" and `value` isn't an empty string, the function updates the album's "tracks" array. If the album doesn't have a "tracks" property, it creates one as an empty array and then adds the `value` as the last item in the "tracks" array.

The `updateRecords` function always returns the entire updated collection.

## Example Usage

```javascript
// Example Collection
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  // Add more albums here...
};

// Update an album's artist
updateRecords(recordCollection, 5439, "artist", "ABBA");

// Add a track to an album
updateRecords(recordCollection, 2468, "tracks", "Purple Rain");

// Remove a property from an album
updateRecords(recordCollection, 2548, "artist", "");

// Add a track to an album without existing tracks
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
```
