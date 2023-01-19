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

Here is the current editor view. It uses a custom react component https://github.com/serlo/h5p-editor-serlo-poc:

![grafik](https://user-images.githubusercontent.com/13507950/213204687-71cb8f5e-0b3a-4476-a156-cee31fa90b0c.png)

and the render view:

![grafik](https://user-images.githubusercontent.com/13507950/213204947-d1fe28c1-eb61-42e3-8a23-d543a34928c5.png)

Repository supports react, jsx and typescript
