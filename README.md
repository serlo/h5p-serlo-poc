# h5p-serlo-poc

Proof of Concept repository for a h5p library that renders content with serlo components

## How to create h5p file

Increase patch version and build libraray

```
npm run build
```

Install h5p cli. Go to parent directory and run

```
h5p pack -r h5p-serlo-poc artefact.h5p
```

Upload this file in the library administration. Refresh Cache. Now you can use the new content type.

Here is the current editor view:

![grafik](https://user-images.githubusercontent.com/13507950/213129887-b55f6165-e4b8-4a07-be6c-fbba82d94ccd.png)

and the render view:

![grafik](https://user-images.githubusercontent.com/13507950/213130037-c18ace3d-944a-4338-adb4-f96b32c72508.png)

Repository supports react, jsx and typescript
